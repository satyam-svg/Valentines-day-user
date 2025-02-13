import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Avtar(props) {
  const { romanceMode } = props; 
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/satyam/satyam.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (animations.length > 0) {
      const animationToPlay = romanceMode ? animations[0].name : animations[1].name; // Romance mode ke basis par animation select
  
      // Pahle sirf active animation stop karo (saare nahi)
      Object.values(actions).forEach(action => {
        if (action.isRunning()) {
          action.stop();
        }
      });
  
      // Naya animation play karo bina position change kiye
      if (actions[animationToPlay]) {
        actions[animationToPlay].reset().play();
      }
    }
  }, [animations, actions, romanceMode]);
  

  return (
    <group ref={group} {...props} dispose={null} rotation={[0,1,0]} scale={[0.8,0.8,0.8]}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="avaturn_body"
            geometry={nodes.avaturn_body.geometry}
            material={materials.avaturn_body_material}
            skeleton={nodes.avaturn_body.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_0"
            geometry={nodes.avaturn_hair_0.geometry}
            material={materials.avaturn_hair_0_material}
            skeleton={nodes.avaturn_hair_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_1"
            geometry={nodes.avaturn_hair_1.geometry}
            material={materials.avaturn_hair_1_material}
            skeleton={nodes.avaturn_hair_1.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={nodes.avaturn_look_0.geometry}
            material={materials.avaturn_look_0_material}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={nodes.avaturn_shoes_0.geometry}
            material={materials.avaturn_shoes_0_material}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/satyam/satyam.gltf')
