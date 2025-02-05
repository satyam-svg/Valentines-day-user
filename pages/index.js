import { ContactShadows, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { Slippers } from "../components/Models/Slippers";
import { useLights } from "../context/LightContext";
import Avtar from "../components/Models/Avtar";
import Heart from "../components/Models/Heart";
import { Text3D } from "@react-three/drei";

const Index = () => {
  const { lightsOn, setLightsOn } = useLights();
  const [text, setText] = useState("");
  const [hearts, setHearts] = useState([]);
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

  // Trigger hearts falling effect when lights turn on
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

      <Canvas style={{ width: "100%", height: "100%" }}>
        <PerspectiveCamera
          makeDefault
          position={[-1.1, 2.14, 5.5]}
          rotation={[-0.41, -0.02, -0.01]}
        />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />

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
        
        {/* Render all the hearts */}
        {hearts}
        {lightsOn && (
          <>
          <Text3D 
    font="./fonts/Irish Grover_Regular.json" 
    position={[0.5, 0.66, 2]} 
    scale={[0.2, 0.2, 0.25]}
    rotation={[0, -0.1, 0]}
    bevelEnabled={true}  // Optional, for beveled edges
    bevelSize={0.05}     // Optional, controls the bevel size
    bevelThickness={0.1} // Optional, controls the thickness of bevels
  >
    HAPPY
    <meshStandardMaterial color="#ff69b4" roughness={0.2} metalness={1} />
    <pointLight intensity={0.5} color={"yellow"}/>
    <pointLight intensity={0.5} position={[2,0,0]} color={"yellow"}/>
    <pointLight intensity={0.5} position={[3,0,0]} color={"yellow"}/>
    <pointLight intensity={0.5} position={[4,0,0]} color={"yellow"}/>
    <pointLight intensity={0.5} position={[5,0,0]} color={"yellow"}/>
  </Text3D>
  <Text3D 
    font="./fonts/Irish Grover_Regular.json" 
    position={[0.5, 0.66, 2.6]} 
    scale={[0.2, 0.2, 0.25]}
    rotation={[0, -0.1, 0]}
    bevelEnabled={true}  // Optional, for beveled edges
    bevelSize={0.05}     // Optional, controls the bevel size
    bevelThickness={0.1} // Optional, controls the thickness of bevels
  >
    VALENTINES
    <meshStandardMaterial color="#f033ff" roughness={0.2} metalness={1} />
    <pointLight intensity={0.5} color={"red"} />
    <pointLight intensity={0.5} color={"yellow"}/>
    <pointLight intensity={0.5} position={[2,0,0]} color={"red"}/>
    <pointLight intensity={0.5} position={[3,0,0]} color={"red"}/>
    <pointLight intensity={0.5} position={[4,0,0]} color={"red"}/>
    <pointLight intensity={0.5} position={[5,0,0]} color={"red"}/>
    <pointLight intensity={1} position={[8,0,0]} color={"red"}/>
  </Text3D>
  <Text3D 
    font="./fonts/Irish Grover_Regular.json" 
    position={[0.1, 0.66, 3.1]} 
    scale={[0.2, 0.2, 0.25]}
    rotation={[0, -0.1, 0]}
    bevelEnabled={true}  // Optional, for beveled edges
    bevelSize={0.05}     // Optional, controls the bevel size
    bevelThickness={0.1} // Optional, controls the thickness of bevels
  >
    DAY
    <meshStandardMaterial color="#ff69b4" roughness={0.2} metalness={1} />
    <pointLight intensity={0.5} color={"blue"}/>
    <pointLight intensity={0.5} position={[2,0,0]} color={"blue"}/>
    <pointLight intensity={0.5} position={[3,0,0]} color={"blue"}/>
    <pointLight intensity={0.5} position={[4,0,0]} color={"blue"}/>
  </Text3D>
  <Text3D 
    font="./fonts/Irish Grover_Regular.json" 
    position={[0.3, 0.66, 3.6]} 
    scale={[0.2, 0.2, 0.25]}
    rotation={[0, -0.1, 0]}
    bevelEnabled={true}  // Optional, for beveled edges
    bevelSize={0.05}     // Optional, controls the bevel size
    bevelThickness={0.1} // Optional, controls the thickness of bevels
  >
    SAHII
    <meshStandardMaterial color="#ff69b4" roughness={0.2} metalness={1} />
    <pointLight intensity={0.5} color={"yellow"}/>
    <pointLight intensity={0.5} position={[2,0,0]} color={"yellow"}/>
    <pointLight intensity={0.5} position={[3,0,0]} color={"yellow"}/>
    <pointLight intensity={0.5} position={[4,0,0]} color={"yellow"}/>
  </Text3D>
          </>
  
)}


        <ContactShadows />
      </Canvas>
    </div>
  );
};

export default Index;
