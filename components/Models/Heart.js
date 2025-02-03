import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Heart({ lightsOn, ...props }) {
  const { nodes, materials } = useGLTF("/heart/heart.gltf");
  const ref = useRef();

  useEffect(() => {
    if (lightsOn) {
      ref.current.position.y = 3; // Start from a higher position
    }
  }, [lightsOn]);

  useFrame(() => {
    if (lightsOn && ref.current.position.y > 0.113) {
      ref.current.position.y -= 0.01; // Move down smoothly
    }
  });

  return (
    <group ref={ref} {...props} dispose={null} scale={[2, 2, 2]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart_Shape.geometry}
        material={materials["Heart Shape shader"]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/heart/heart.gltf");
