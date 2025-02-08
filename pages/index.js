import { ContactShadows, OrbitControls, PerspectiveCamera, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState,useRef } from "react";
import { Slippers } from "../components/Models/Slippers";
import { useLights } from "../context/LightContext";
import Avtar from "../components/Models/Avtar";
import Heart from "../components/Models/Heart";
import { io } from "socket.io-client";

import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const socket = io("https://valentines-chat-app.onrender.com");
const Index = () => {
  const { lightsOn, setLightsOn } = useLights();
  const [text, setText] = useState("");
  const [hearts, setHearts] = useState([]);
  const [message1, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socketId, setSocketId] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [incomingCall, setIncomingCall] = useState(false);
  const [offerData, setOfferData] = useState(null);
  const [callerId, setCallerId] = useState(null);
  const [activeUsers, setActiveUsers] = useState([]);
  const [callEndedMessage, setCallEndedMessage] = useState(null);
  

  const emojiPickerRef = useRef(null);

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

    socket.on("offer", async ({ offer, from }) => {
      setIncomingCall(true);
      setOfferData(offer);
      setCallerId(from);
    });

    socket.on("answer", async (answer) => {
      if (peerConnection.current) {
        await peerConnection.current.setRemoteDescription(answer);
      }
    });

    socket.on("candidate", async (candidate) => {
      if (peerConnection.current) {
        await peerConnection.current.addIceCandidate(candidate);
      }
    });

    socket.on("activeUsers", (users) => {
      setActiveUsers(users);
    });

    // Listen for "endCall" event (Call ends for all users)
    const endCall = () => {
      socket.emit("endCall"); // Notify server to end call for everyone
      handleEndCall(); // Local cleanup
      setCallEndedMessage("Call ended by you");
      setTimeout(() => setCallEndedMessage(null), 3000);
    };


    return () => {
      socket.off("offer");
      socket.off("answer");
      socket.off("candidate");
      socket.off("activeUsers");
      socket.off("endCall");
      socket.off("receive-message");
      socket.off("connect");
    };
  }, [socketId]);


  useEffect(() => {
    socket.on("callEnded", ({ reason }) => {
      handleEndCall();
      setCallEndedMessage(reason || "Call ended by other user");
      setTimeout(() => setCallEndedMessage(null), 3000);
    });

    return () => {
      socket.off("callEnded");
    };
  }, []);


  const createPeerConnection = () => {
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("candidate", { candidate: event.candidate, to: callerId });
      }
    };

    pc.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    return pc;
  };


  const startCall = async () => {
    setIsCallActive(true);
    peerConnection.current = createPeerConnection();
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = stream;
    }
    stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));

    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);

    socket.emit("broadcastOffer", offer);
  };


  const acceptCall = async () => {
    setIncomingCall(false);
    setIsCallActive(true);

    peerConnection.current = createPeerConnection();
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = stream;
    }
    stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));

    await peerConnection.current.setRemoteDescription(offerData);
    const answer = await peerConnection.current.createAnswer();
    await peerConnection.current.setLocalDescription(answer);

    socket.emit("answer", { answer, to: callerId });
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setIncomingCall(false);
    if (peerConnection.current) {
      peerConnection.current.close();
      peerConnection.current = null;
    }
    if (localVideoRef.current) {
      localVideoRef.current.srcObject?.getTracks().forEach((track) => track.stop());
      localVideoRef.current.srcObject = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
  };

  // When any user ends call, notify all users
  const endCall = () => {
    socket.emit("endCall"); // Notify all users
    handleEndCall(); // Stop call for self
  };


  const CallEndedPopup = () => (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      backgroundColor: 'rgba(255, 105, 180, 0.9)',
      color: 'white',
      borderRadius: '10px',
      zIndex: 1003,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      animation: 'fadeInOut 3s forwards'
    }}>
      <h3>💔 Call Ended</h3>
      <p>{callEndedMessage}</p>
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
  
  const sendMessage = async () => {
    if (message1.trim()) {
      // Extract query if message starts with "/ask"
      if (message1.startsWith("/ai")) {
        const query = message1.replace("/ai", "").trim();
  
        if (!query) {
          console.error("Query is required after /ask!");
          return;
        }
  
        // 1️⃣ Show user's "/ask" message in chat
        const userMessage = { text: message1, isUser: true };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
  
        // 📡 Broadcast "/ask" message to other users
        socket.emit("send-message", { msg: message1, senderId: socket.id });
  
        // 2️⃣ Show "Typing..." indicator
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "Typing...", isUser: false, isTyping: true },
          ]);
        }, 200);
  
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
  
          // 3️⃣ Replace "Typing..." with AI response
          setMessages((prevMessages) =>
            prevMessages
              .filter((msg) => !msg.isTyping) // Remove "Typing..."
              .concat({ text: data.reply, isUser: false })
          );
  
          // 📡 Broadcast AI response as well
          socket.emit("send-message", { msg: data.reply, senderId: "bot" });
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
  
      // Clear input field
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
        for (let i = 0; i < 10; i++) {
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

  const handleEmojiSelect = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
    // Do not close the emoji picker here
  };

  const closeEmojiPicker = () => {
    setShowEmojiPicker(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    };

    if (showEmojiPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmojiPicker]);

  return (
    <div className="h-[100vh] relative">
      {/* Chatbox Toggle Button */}
      {lightsOn && (
        <>
        {callEndedMessage && <CallEndedPopup />}
          {/* Chat Toggle Button */}
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

          {/* Chat Container */}
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
              {/* Chat Header with Call Controls */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  backgroundColor: "#ff69b4",
                  color: "#fff",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  fontWeight: "bold",
                }}
              >
                <div>Chat</div>
                <div style={{ display: "flex", gap: "8px" }}>
                  {!isCallActive && (
                    <button
                      onClick={startCall}
                      style={{
                        padding: "6px",
                        background: "#ff69b4",
                        border: "2px solid white",
                        borderRadius: "50%",
                        cursor: "pointer",
                        minWidth: "32px",
                        minHeight: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      📞
                    </button>
                  )}
                  {isCallActive && (
                    <button
                      onClick={endCall}
                      style={{
                        padding: "6px",
                        background: "#ff4444",
                        border: "2px solid white",
                        borderRadius: "50%",
                        cursor: "pointer",
                        minWidth: "32px",
                        minHeight: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      🚫
                    </button>
                  )}
                </div>
              </div>

              {/* Chat Messages Area */}
              <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
                {/* Incoming Call Alert */}
                {incomingCall && (
                  <div style={{
                    padding: "10px",
                    backgroundColor: "#ffe6f0",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    textAlign: "center"
                  }}>
                    <p style={{ margin: "0 0 10px 0" }}>Incoming Call... 📞</p>
                    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                      <button
                        onClick={acceptCall}
                        style={{
                          padding: "8px 16px",
                          background: "#4CAF50",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer"
                        }}
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => setIncomingCall(false)}
                        style={{
                          padding: "8px 16px",
                          background: "#ff4444",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer"
                        }}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                )}

                {/* Messages List */}
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

              {/* Message Input Area */}
              <div
                style={{
                  display: "flex",
                  padding: "10px",
                  borderTop: "1px solid #f0f0f0",
                  gap: "8px",
                }}
              >
                <button
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  style={{
                    padding: "8px",
                    backgroundColor: "#ff69b4",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  😀
                </button>
                <input
                  type="text"
                  value={message1}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  style={{
                    flex: 1,
                    padding: "8px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                  placeholder="Type a message"
                />
              </div>

              {/* Emoji Picker */}
              {showEmojiPicker && (
                <div
                  ref={emojiPickerRef}
                  style={{
                    position: "absolute",
                    bottom: "60px",
                    right: "10px",
                    zIndex: 1001,
                  }}
                >
                  <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                </div>
              )}
            </div>
          )}

          {/* Video Call Containers */}
          {(isCallActive || incomingCall) && (
            <div style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              display: "flex",
              gap: "20px",
              zIndex: 1002
            }}>
              <div style={{
                width: "200px",
                height: "150px",
                backgroundColor: "black",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}>
                <video 
                  ref={localVideoRef} 
                  autoPlay 
                  muted 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{
                width: "200px",
                height: "150px",
                backgroundColor: "black",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}>
                <video 
                  ref={remoteVideoRef} 
                  autoPlay 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
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
            <directionalLight position={[2, 5, 5]} intensity={1.2} color="#f8c291" castShadow={false} />
            <pointLight position={[-3, 2, -4]} intensity={0.6} color="#ffb6c1"  castShadow={false}/>
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
              <pointLight intensity={0.5} color={"red"}  castShadow={false}/>
              <pointLight intensity={0.5} color={"yellow"} castShadow={false}/>
              <pointLight intensity={0.5} position={[2, 0, 0]} color={"red"} castShadow={false}/>
              <pointLight intensity={0.5} position={[3, 0, 0]} color={"blue"} castShadow={false}/>
              <pointLight intensity={0.5} position={[4, 0, 0]} color={"red"} castShadow={false}/>
              <pointLight intensity={1} position={[8, 0, 0]} color={"white"} castShadow={false}/>
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
              <pointLight intensity={0.5} color={"yellow"} castShadow={false}/>
              <pointLight intensity={0.5} position={[2, 0, 0]} color={"blue"} castShadow={false}/>
              <pointLight intensity={0.5} position={[3, 0, 0]} color={"red"} castShadow={false}/>
              <pointLight intensity={0.5} position={[4, 0, 0]} color={"yellow"} castShadow={false}/>
            </Text3D>
          </>
        )}

        <ContactShadows />
      </Canvas>
    </div>
  );
};

export default Index;