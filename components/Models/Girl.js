import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
export default function Girl(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/girl/girls.gltf')
  const { actions } = useAnimations(animations, group)

   useEffect(() => {
      console.log("Available Animations:", animations)
      console.log("Available Actions:", actions)
  
      if (animations.length > 0) {
        const firstAnimationName = animations[0].name
        if (actions[firstAnimationName]) {
          actions[firstAnimationName].play()
        }
      }
    }, [animations, actions])
  return (
    <group ref={group} {...props} dispose={null}   scale={[0.7,0.7,0.7]}  rotation={[0,-2,0]}>
      <group name="Scene">
        <group name="Armature001">
          <skinnedMesh
            name="avaturn_glasses_0001"
            geometry={nodes.avaturn_glasses_0001.geometry}
            material={materials['avaturn_glasses_0_material.001']}
            skeleton={nodes.avaturn_glasses_0001.skeleton}
          />
          <skinnedMesh
            name="avaturn_glasses_1001"
            geometry={nodes.avaturn_glasses_1001.geometry}
            material={materials['avaturn_glasses_1_material.001']}
            skeleton={nodes.avaturn_glasses_1001.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_0001"
            geometry={nodes.avaturn_hair_0001.geometry}
            material={materials['avaturn_hair_0_material.001']}
            skeleton={nodes.avaturn_hair_0001.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_1001"
            geometry={nodes.avaturn_hair_1001.geometry}
            material={materials['avaturn_hair_1_material.001']}
            skeleton={nodes.avaturn_hair_1001.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0001"
            geometry={nodes.avaturn_look_0001.geometry}
            material={materials['avaturn_look_0_material.001']}
            skeleton={nodes.avaturn_look_0001.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0001"
            geometry={nodes.avaturn_shoes_0001.geometry}
            material={materials['avaturn_shoes_0_material.001']}
            skeleton={nodes.avaturn_shoes_0001.skeleton}
          />
          <skinnedMesh
            name="Body_Mesh001"
            geometry={nodes.Body_Mesh001.geometry}
            material={materials['Body.001']}
            skeleton={nodes.Body_Mesh001.skeleton}
          />
          <skinnedMesh
            name="Eye_Mesh001"
            geometry={nodes.Eye_Mesh001.geometry}
            material={materials['Eyes.001']}
            skeleton={nodes.Eye_Mesh001.skeleton}
            morphTargetDictionary={nodes.Eye_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.Eye_Mesh001.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeAO_Mesh001"
            geometry={nodes.EyeAO_Mesh001.geometry}
            material={materials['EyeAO.001']}
            skeleton={nodes.EyeAO_Mesh001.skeleton}
            morphTargetDictionary={nodes.EyeAO_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeAO_Mesh001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Eyelash_Mesh001"
            geometry={nodes.Eyelash_Mesh001.geometry}
            material={materials['EyeAO.001']}
            skeleton={nodes.Eyelash_Mesh001.skeleton}
            morphTargetDictionary={nodes.Eyelash_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.Eyelash_Mesh001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Head_Mesh001"
            geometry={nodes.Head_Mesh001.geometry}
            material={materials['Head.001']}
            skeleton={nodes.Head_Mesh001.skeleton}
            morphTargetDictionary={nodes.Head_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.Head_Mesh001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Teeth_Mesh001"
            geometry={nodes.Teeth_Mesh001.geometry}
            material={materials['Teeth.004']}
            skeleton={nodes.Teeth_Mesh001.skeleton}
            morphTargetDictionary={nodes.Teeth_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.Teeth_Mesh001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Tongue_Mesh001"
            geometry={nodes.Tongue_Mesh001.geometry}
            material={materials['Teeth.005']}
            skeleton={nodes.Tongue_Mesh001.skeleton}
            morphTargetDictionary={nodes.Tongue_Mesh001.morphTargetDictionary}
            morphTargetInfluences={nodes.Tongue_Mesh001.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/girl/girls.gltf')