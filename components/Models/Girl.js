// import React, { useRef } from 'react'
// import { useGLTF, useAnimations } from '@react-three/drei'
// import { useEffect } from 'react'
// export default function Girl(props) {
//   const group = useRef()
//   const { nodes, materials, animations } = useGLTF('/girl/girls.gltf')
//   const { actions } = useAnimations(animations, group)

//    useEffect(() => {
//       console.log("Available Animations:", animations)
//       console.log("Available Actions:", actions)
  
//       if (animations.length > 0) {
//         const firstAnimationName = animations[0].name
//         if (actions[firstAnimationName]) {
//           actions[firstAnimationName].play()
//         }
//       }
//     }, [animations, actions])
//   return (
//     <group ref={group} {...props} dispose={null}   scale={[0.75,0.75,0.75]}  rotation={[0,-2,0]}>
//       <group name="Scene">
//         <group name="Armature001">
//           <skinnedMesh
//             name="avaturn_glasses_0001"
//             geometry={nodes.avaturn_glasses_0001.geometry}
//             material={materials['avaturn_glasses_0_material.001']}
//             skeleton={nodes.avaturn_glasses_0001.skeleton}
//           />
//           <skinnedMesh
//             name="avaturn_glasses_1001"
//             geometry={nodes.avaturn_glasses_1001.geometry}
//             material={materials['avaturn_glasses_1_material.001']}
//             skeleton={nodes.avaturn_glasses_1001.skeleton}
//           />
//           <skinnedMesh
//             name="avaturn_hair_0001"
//             geometry={nodes.avaturn_hair_0001.geometry}
//             material={materials['avaturn_hair_0_material.001']}
//             skeleton={nodes.avaturn_hair_0001.skeleton}
//           />
//           <skinnedMesh
//             name="avaturn_hair_1001"
//             geometry={nodes.avaturn_hair_1001.geometry}
//             material={materials['avaturn_hair_1_material.001']}
//             skeleton={nodes.avaturn_hair_1001.skeleton}
//           />
//           <skinnedMesh
//             name="avaturn_look_0001"
//             geometry={nodes.avaturn_look_0001.geometry}
//             material={materials['avaturn_look_0_material.001']}
//             skeleton={nodes.avaturn_look_0001.skeleton}
//           />
//           <skinnedMesh
//             name="avaturn_shoes_0001"
//             geometry={nodes.avaturn_shoes_0001.geometry}
//             material={materials['avaturn_shoes_0_material.001']}
//             skeleton={nodes.avaturn_shoes_0001.skeleton}
//           />
//           <skinnedMesh
//             name="Body_Mesh001"
//             geometry={nodes.Body_Mesh001.geometry}
//             material={materials['Body.001']}
//             skeleton={nodes.Body_Mesh001.skeleton}
//           />
//           <skinnedMesh
//             name="Eye_Mesh001"
//             geometry={nodes.Eye_Mesh001.geometry}
//             material={materials['Eyes.001']}
//             skeleton={nodes.Eye_Mesh001.skeleton}
//             morphTargetDictionary={nodes.Eye_Mesh001.morphTargetDictionary}
//             morphTargetInfluences={nodes.Eye_Mesh001.morphTargetInfluences}
//           />
//           <skinnedMesh
//             name="EyeAO_Mesh001"
//             geometry={nodes.EyeAO_Mesh001.geometry}
//             material={materials['EyeAO.001']}
//             skeleton={nodes.EyeAO_Mesh001.skeleton}
//             morphTargetDictionary={nodes.EyeAO_Mesh001.morphTargetDictionary}
//             morphTargetInfluences={nodes.EyeAO_Mesh001.morphTargetInfluences}
//           />
//           <skinnedMesh
//             name="Eyelash_Mesh001"
//             geometry={nodes.Eyelash_Mesh001.geometry}
//             material={materials['EyeAO.001']}
//             skeleton={nodes.Eyelash_Mesh001.skeleton}
//             morphTargetDictionary={nodes.Eyelash_Mesh001.morphTargetDictionary}
//             morphTargetInfluences={nodes.Eyelash_Mesh001.morphTargetInfluences}
//           />
//           <skinnedMesh
//             name="Head_Mesh001"
//             geometry={nodes.Head_Mesh001.geometry}
//             material={materials['Head.001']}
//             skeleton={nodes.Head_Mesh001.skeleton}
//             morphTargetDictionary={nodes.Head_Mesh001.morphTargetDictionary}
//             morphTargetInfluences={nodes.Head_Mesh001.morphTargetInfluences}
//           />
//           <skinnedMesh
//             name="Teeth_Mesh001"
//             geometry={nodes.Teeth_Mesh001.geometry}
//             material={materials['Teeth.004']}
//             skeleton={nodes.Teeth_Mesh001.skeleton}
//             morphTargetDictionary={nodes.Teeth_Mesh001.morphTargetDictionary}
//             morphTargetInfluences={nodes.Teeth_Mesh001.morphTargetInfluences}
//           />
//           <skinnedMesh
//             name="Tongue_Mesh001"
//             geometry={nodes.Tongue_Mesh001.geometry}
//             material={materials['Teeth.005']}
//             skeleton={nodes.Tongue_Mesh001.skeleton}
//             morphTargetDictionary={nodes.Tongue_Mesh001.morphTargetDictionary}
//             morphTargetInfluences={nodes.Tongue_Mesh001.morphTargetInfluences}
//           />
//           <primitive object={nodes.Hips} />
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/girl/girls.gltf')




import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Girl(props) {
  const { romanceMode } = props; 
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/demo/char.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
      if (animations.length > 0) {
        const animationToPlay = romanceMode ? animations[1].name : animations[2].name; // Romance mode ke basis par animation select
    
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
    <group ref={group} {...props} dispose={null}  scale={[0.75,0.75,0.75]}  rotation={[0,-2,0]}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="avaturn_glasses_0"
            geometry={nodes.avaturn_glasses_0.geometry}
            material={materials['avaturn_glasses_0_material.002']}
            skeleton={nodes.avaturn_glasses_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_glasses_1"
            geometry={nodes.avaturn_glasses_1.geometry}
            material={materials['avaturn_glasses_1_material.002']}
            skeleton={nodes.avaturn_glasses_1.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_0"
            geometry={nodes.avaturn_hair_0.geometry}
            material={materials['avaturn_hair_0_material.002']}
            skeleton={nodes.avaturn_hair_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_1"
            geometry={nodes.avaturn_hair_1.geometry}
            material={materials['avaturn_hair_1_material.002']}
            skeleton={nodes.avaturn_hair_1.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={nodes.avaturn_look_0.geometry}
            material={materials['avaturn_look_0_material.002']}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={nodes.avaturn_shoes_0.geometry}
            material={materials['avaturn_shoes_0_material.002']}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
          <skinnedMesh
            name="Body_Mesh"
            geometry={nodes.Body_Mesh.geometry}
            material={materials['Body.002']}
            skeleton={nodes.Body_Mesh.skeleton}
          />
          <skinnedMesh
            name="Eye_Mesh"
            geometry={nodes.Eye_Mesh.geometry}
            material={materials['Eyes.002']}
            skeleton={nodes.Eye_Mesh.skeleton}
            morphTargetDictionary={nodes.Eye_Mesh.morphTargetDictionary}
            morphTargetInfluences={nodes.Eye_Mesh.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeAO_Mesh"
            geometry={nodes.EyeAO_Mesh.geometry}
            material={materials['EyeAO.002']}
            skeleton={nodes.EyeAO_Mesh.skeleton}
            morphTargetDictionary={nodes.EyeAO_Mesh.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeAO_Mesh.morphTargetInfluences}
          />
          <skinnedMesh
            name="Eyelash_Mesh"
            geometry={nodes.Eyelash_Mesh.geometry}
            material={materials['Eyelash.002']}
            skeleton={nodes.Eyelash_Mesh.skeleton}
            morphTargetDictionary={nodes.Eyelash_Mesh.morphTargetDictionary}
            morphTargetInfluences={nodes.Eyelash_Mesh.morphTargetInfluences}
          />
          <skinnedMesh
            name="Head_Mesh"
            geometry={nodes.Head_Mesh.geometry}
            material={materials['Head.002']}
            skeleton={nodes.Head_Mesh.skeleton}
            morphTargetDictionary={nodes.Head_Mesh.morphTargetDictionary}
            morphTargetInfluences={nodes.Head_Mesh.morphTargetInfluences}
          />
          <skinnedMesh
            name="Teeth_Mesh"
            geometry={nodes.Teeth_Mesh.geometry}
            material={materials['Teeth.004']}
            skeleton={nodes.Teeth_Mesh.skeleton}
            morphTargetDictionary={nodes.Teeth_Mesh.morphTargetDictionary}
            morphTargetInfluences={nodes.Teeth_Mesh.morphTargetInfluences}
          />
          <skinnedMesh
            name="Tongue_Mesh"
            geometry={nodes.Tongue_Mesh.geometry}
            material={materials['Teeth.005']}
            skeleton={nodes.Tongue_Mesh.skeleton}
            morphTargetDictionary={nodes.Tongue_Mesh.morphTargetDictionary}
            morphTargetInfluences={nodes.Tongue_Mesh.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/demo/char.gltf')



