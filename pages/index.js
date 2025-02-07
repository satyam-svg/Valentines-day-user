import { ContactShadows, OrbitControls, PerspectiveCamera, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { Slippers } from "../components/Models/Slippers";
import { useLights } from "../context/LightContext";
import Avtar from "../components/Models/Avtar";
import Heart from "../components/Models/Heart";
import { io } from "socket.io-client";

const socket = io("https://valentines-chat-app-1.onrender.com/");
const Index = () => {
  const { lightsOn, setLightsOn } = useLights();
  const [text, setText] = useState("");
  const [hearts, setHearts] = useState([]);
  const [message1, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socketId, setSocketId] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      setSocketId(socket.id);
      console.log("Connected with socket ID:", socket.id);
    });

    socket.on("receive-message", ({ msg, senderId }) => {
      console.log("Received message:", msg, "from:", senderId, "my ID:", socketId);
      if (senderId !== socketId) {
        setMessages((prevMessages) => [...prevMessages, { text: msg, isUser: false }]);
      }
    });

    return () => {
      socket.off("receive-message");
      socket.off("connect");
    };
  }, [socketId]);
  
  const sendMessage = async () => {
    if (message1.trim()) {
      // Check if the message starts with "/ask"
      if (message1.startsWith("/ask")) {
        const query = message1.replace("/ask", "").trim();
  
        if (!query) {
          console.error("Query is required after /ask!");
          return;
        }
  
        // Immediately send user message & show "Typing..."
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: message1, isUser: true },
          { text: "Typing...", isUser: false, isTyping: true }, // Show typing status
        ]);
  
        try {
          const response = await fetch("/api/gemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
          });
  
          const data = await response.json();
  
          if (!data.reply) {
            console.error("Invalid response from API:", data);
            return;
          }
  
          // Replace "Typing..." with actual AI response
          setMessages((prevMessages) =>
            prevMessages
              .filter((msg) => !msg.isTyping) // Remove "Typing..."
              .concat({ text: data.reply, isUser: false }) // Add AI response
          );
  
          // Broadcast AI response
          socket.emit("send-message", { msg: data.reply, senderId: socket.id });
        } catch (error) {
          console.error("Error sending message to backend:", error);
        }
      } else {
        // Normal message handling
        socket.emit("send-message", { msg: message1, senderId: socket.id });
  
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: message1, isUser: true },
        ]);
      }
  
      // Clear input field immediately
      setMessage("");
    }
  };
  

  const message = "";
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < message.length) {
        setText((prev) => prev + message[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (lightsOn) {
      const newHearts = [];
      
      const createHearts = async () => {
        for (let i = 0; i < 20; i++) {
          await new Promise((resolve) => setTimeout(resolve, i * 200)); // Delay for each heart
          setHearts((prevHearts) => [
            ...prevHearts,
            <Heart
              key={i}
              position={[
                Math.random() * 5 - 3,  // X axis - random spread
                Math.random() * 5 + 3,  // Y axis - start from top
                2  // Z axis - depth effect
              ]}
              lightsOn={lightsOn}
            />
          ]);
        }
      };
  
      createHearts();
    } else {
      setHearts([]); // Reset hearts when lights turn off
    }
  }, [lightsOn]);

  return (
    <div className="h-[100vh] relative">
      {/* Chatbox Toggle Button */}
      {lightsOn && (
  <>
     
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1000,
          padding: "10px",
          backgroundColor: "#ff69b4",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        💬
      </button>

      {/* Chatbox */}
      {isChatOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: "20px",
            width: "300px",
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              padding: "10px",
              backgroundColor: "#ff69b4",
              color: "#fff",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Chat
          </div>

          {/* Chat Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: msg.isUser ? "flex-end" : "flex-start",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    maxWidth: "70%",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    backgroundColor: msg.isUser ? "#ff69b4" : "#f0f0f0",
                    color: msg.isUser ? "#fff" : "#000",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Field & Send Button */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #f0f0f0",
            }}
          >
            <input
              type="text"
              value={message1}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                flex: 1,
                padding: "8px",
                border: "1px solid #f0f0f0",
                borderRadius: "5px",
                marginRight: "10px",
              }}
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "8px 12px",
                backgroundColor: "#ff69b4",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
      </>
      )}

      {/* Initial Screen (Lights Off) */}
      {!lightsOn && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: "transparent",
            borderRadius: "8px",
            textAlign: "center",
            zIndex: 10,
            fontSize: "18px",
            fontWeight: "bold",
            color: "#ff69b4",
            fontFamily: "cursive",
            whiteSpace: "pre-line",
            minHeight: "100px",
          }}
        >
          <p>{text}</p>
          <button
            onClick={() => setLightsOn(true)}
            style={{
              padding: "12px 24px",
              backgroundColor: "#ff69b4",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              marginTop: "15px",
              transition: "background 0.3s ease-in-out",
            }}
          >
            Turn On Lights
          </button>
        </div>
      )}

      {/* 3D Scene */}
      <Canvas style={{ width: "100%", height: "100%" }}>
        <PerspectiveCamera
          makeDefault
          position={[-1.1, 2.14, 5.5]}
          rotation={[-0.41, -0.02, -0.01]}
        />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />

        {/* Lights */}
        {lightsOn && (
          <>
            <ambientLight intensity={0.7} color="#ffd1dc" />
            <directionalLight position={[2, 5, 5]} intensity={1.2} color="#f8c291" castShadow />
            <pointLight position={[-3, 2, -4]} intensity={0.6} color="#ffb6c1" />
            <spotLight position={[0, 5, 2]} intensity={0.8} angle={0.3} penumbra={1} color="#ffe4e1" />
          </>
        )}

        <Slippers position={[0, 0.6, 0]} />
        <Avtar position={[-1.4, 0.6, 3]} />
        
        {/* Falling Hearts */}
        {hearts}

        {/* Text if lightsOn */}
        {lightsOn && (
          <>
            <Text3D
              font="./fonts/Irish Grover_Regular.json"
              position={[0.5, 0.66, 2]}
              scale={[0.2, 0.2, 0.25]}
              rotation={[0, -0.1, 0]}
              bevelEnabled={true}
              bevelSize={0.05}
              bevelThickness={0.1}
            >
              HAPPY
              <meshStandardMaterial color="#ff69b4" roughness={0.2} metalness={1} />
              <pointLight intensity={0.5} color={"yellow"} />
              <pointLight intensity={0.5} position={[2, 0, 0]} color={"yellow"} />
              <pointLight intensity={0.5} position={[3, 0, 0]} color={"yellow"} />
              <pointLight intensity={0.5} position={[4, 0, 0]} color={"yellow"} />
              <pointLight intensity={0.5} position={[5, 0, 0]} color={"yellow"} />
            </Text3D>
            <Text3D
              font="./fonts/Irish Grover_Regular.json"
              position={[0.5, 0.66, 2.6]}
              scale={[0.2, 0.2, 0.25]}
              rotation={[0, -0.1, 0]}
              bevelEnabled={true}
              bevelSize={0.05}
              bevelThickness={0.1}
            >
              VALENTINES
              <meshStandardMaterial color="#f033ff" roughness={0.2} metalness={1} />
              <pointLight intensity={0.5} color={"red"} />
              <pointLight intensity={0.5} color={"yellow"} />
              <pointLight intensity={0.5} position={[2, 0, 0]} color={"red"} />
              <pointLight intensity={0.5} position={[3, 0, 0]} color={"red"} />
              <pointLight intensity={0.5} position={[4, 0, 0]} color={"red"} />
              <pointLight intensity={1} position={[8, 0, 0]} color={"red"} />
            </Text3D>
            <Text3D
              font="./fonts/Irish Grover_Regular.json"
              position={[0.1, 0.66, 3.1]}
              scale={[0.2, 0.2, 0.25]}
              rotation={[0, -0.1, 0]}
              bevelEnabled={true}
              bevelSize={0.05}
              bevelThickness={0.1}
            >
              DAY
              <meshStandardMaterial color="#ff69b4" roughness={0.2} metalness={1} />
              <pointLight intensity={0.5} color={"blue"} />
              <pointLight intensity={0.5} position={[2, 0, 0]} color={"blue"} />
              <pointLight intensity={0.5} position={[3, 0, 0]} color={"blue"} />
              <pointLight intensity={0.5} position={[4, 0, 0]} color={"blue"} />
            </Text3D>
            <Text3D
              font="./fonts/Irish Grover_Regular.json"
              position={[0.3, 0.66, 3.6]}
              scale={[0.2, 0.2, 0.25]}
              rotation={[0, -0.1, 0]}
              bevelEnabled={true}
              bevelSize={0.05}
              bevelThickness={0.1}
            >
              SAHII
              <meshStandardMaterial color="#ff69b4" roughness={0.2} metalness={1} />
              <pointLight intensity={0.5} color={"yellow"} />
              <pointLight intensity={0.5} position={[2, 0, 0]} color={"yellow"} />
              <pointLight intensity={0.5} position={[3, 0, 0]} color={"yellow"} />
              <pointLight intensity={0.5} position={[4, 0, 0]} color={"yellow"} />
            </Text3D>
          </>
        )}

        <ContactShadows />
      </Canvas>
    </div>
  );
};

export default Index;