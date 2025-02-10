import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Typing(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Typing/typing.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
        console.log("Available Animations: in this ", animations)
        console.log("Available Actions:", actions)
    
        if (animations.length > 0) {
          const firstAnimationName = animations[1].name
          if (actions[firstAnimationName]) {
            actions[firstAnimationName].play()
          }
        }
      }, [animations, actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="avaturn_body"
            geometry={nodes.avaturn_body.geometry}
            material={materials['avaturn_body_material.001']}
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
            material={materials['avaturn_hair_0_material.001']}
            skeleton={nodes.avaturn_hair_1.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={nodes.avaturn_look_0.geometry}
            material={materials['avaturn_look_0_material.001']}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={nodes.avaturn_shoes_0.geometry}
            material={materials['avaturn_shoes_0_material.001']}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Typing/typing.gltf')