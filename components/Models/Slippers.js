import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useLights } from '../../context/Lightcontext';
export  function Slippers(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  const {lightsOn} =useLights();

  
  
  return (
    <group  {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[-2.897, 0, 0.53]}
        scale={5.626}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-2.567, 0, 0.529]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[3.336, 5.626, 5.626]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
        position={[-2.763, -1.044, -2.683]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[3.336, 5.626, 5.626]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
        position={[2.702, -1.044, 0.515]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[3.336, 5.626, 5.626]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={nodes.Plane004.material}
        position={[-2.751, 0, 5.506]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[3.336, 5.626, 5.626]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials['Material.082']}
        position={[-8.203, 0, 0.53]}
        scale={5.626}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={nodes.Plane006.material}
        position={[-7.662, 0, 0.529]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[3.336, 5.626, 5.626]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={nodes.Plane007.material}
        position={[-8.197, 0.004, -2.683]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[3.336, 5.626, 5.626]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={nodes.Plane008.material}
        position={[-4.252, 3.323, 4.275]}
        scale={7.143}
      />
      <group
        position={[-0.269, 0.976, -0.36]}
        rotation={[0, -0.511, 2.506]}
        scale={[-0.024, -1.086, -0.022]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_5.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_6.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_7.geometry}
          material={materials['Material.006']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tray.geometry}
        material={materials['Material.065']}
        position={[-0.731, 0, 0.039]}
        rotation={[0, 0.114, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillow001.geometry}
        material={materials['Material.067']}
        position={[1.077, -0.418, -1.237]}
        rotation={[-0.103, -0.546, -0.011]}
        scale={1.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillow002.geometry}
        material={materials['Material.071']}
        position={[1.658, -0.329, -0.651]}
        rotation={[0, -1.153, 0]}
        scale={0.823}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillow2.geometry}
        material={materials['Material.068']}
        position={[0.888, 0.134, -1.005]}
        rotation={[0.439, -0.401, 0.171]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillow3.geometry}
        material={materials['Material.069']}
        position={[0.572, -0.516, -1.297]}
        rotation={[-0.417, -0.341, 0]}
        scale={1.396}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillow3001.geometry}
        material={materials['Material.070']}
        position={[1.271, -0.425, -0.858]}
        rotation={[-0.823, -0.852, -0.606]}
        scale={[1.256, 1.328, 1.278]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillow.geometry}
        material={materials['Material.066']}
        position={[0.185, -0.329, -1.508]}
        rotation={[0, 0.273, 0]}
        scale={0.823}
      />
      <group position={[-2.656, 0.006, 4.499]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002.geometry}
          material={materials['Material.084']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_1.geometry}
          material={materials['Material.085']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_2.geometry}
          material={materials['Material.086']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_3.geometry}
          material={materials['Material.087']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_4.geometry}
          material={materials['Material.088']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_5.geometry}
          material={materials['Material.115']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_6.geometry}
          material={materials['Material.061']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_7.geometry}
          material={materials['Material.062']}
        />
        <mesh
         
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_8.geometry}
          material={materials['Material.067']}    //heart
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_9.geometry}
          material={materials['Material.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_10.geometry}
          material={materials['Material.014']}
        />     //leaf
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_11.geometry}
          material={materials['Material.013']}
        />
       
        
       
       
        //duplicate
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_12.geometry}
          material={materials['Material.059']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_13.geometry}
          material={materials['Material.060']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_14.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_15.geometry}
          material={materials['Material.078']}
        />
         //
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_19.geometry}
          material={materials['Material.079']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_20.geometry}
          material={materials['Material.080']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_21.geometry}
          material={materials['Material.081']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_22.geometry}
          material={materials['Material.075']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_23.geometry}
          material={materials['Material.076']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_24.geometry}
          material={materials['Material.077']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_25.geometry}
          material={materials['Material.099']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_26.geometry}
          material={materials['Material.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_27.geometry}
          material={materials['Material.028']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_28.geometry}
          material={materials['Material.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_29.geometry}
          material={materials['Material.032']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_30.geometry}
          material={materials['Material.035']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_31.geometry}
          material={materials['Material.036']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_32.geometry}
          material={materials['Material.039']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_33.geometry}
          material={materials['Material.040']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_34.geometry}
          material={materials['Material.044']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_35.geometry}
          material={materials['Material.047']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_36.geometry}
          material={materials['Material.048']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_37.geometry}
          material={materials['Material.051']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_38.geometry}
          material={materials['Material.052']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_39.geometry}
          material={materials['Material.055']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_40.geometry}
          material={materials['Material.056']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_41.geometry}
          material={materials['Material.063']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_42.geometry}
          material={materials['Material.102']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_43.geometry}
          material={materials['Material.103']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_44.geometry}
          material={materials['Material.106']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_45.geometry}
          material={materials['Material.107']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_46.geometry}
          material={materials['Material.110']}
        />
       <mesh
  castShadow
  receiveShadow
  geometry={nodes.s4studio_mesh_4002_47.geometry}
  material={materials['Material.100']}
>
  {/* Add a yellow PointLight positioned close to the mesh */}
  {lightsOn &&(
        <pointLight 
        color="yellow" 
        intensity={2} 
        distance={10} // Ensures the light covers the mesh and its surroundings
        decay={1} // Gradual reduction in intensity
        position={[0, 2, 0]} // Positioned near the mesh
        castShadow 
      />
  )}
 
</mesh>


        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_48.geometry}
          material={materials['Material.101']}
        >
          {lightsOn && (
              <pointLight 
              color="yellow" 
              intensity={2} 
              distance={10} // Ensures the light covers the mesh and its surroundings
              decay={1} // Gradual reduction in intensity
              position={[-2, 2, 0]} // Positioned near the mesh
              castShadow 
            />
          )}
          
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_49.geometry}
          material={materials['Material.104']}
        >
          {lightsOn && (
               <pointLight 
               color="red" 
               intensity={2} 
               distance={10} // Ensures the light covers the mesh and its surroundings
               decay={1} // Gradual reduction in intensity
               position={[-2, 2, 1]} // Positioned near the mesh
               castShadow 
             />
          )}
         
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_50.geometry}
          material={materials['Material.105']}
        >

          {lightsOn && (
              <pointLight 
              color="green" 
              intensity={1} 
              distance={10} // Ensures the light covers the mesh and its surroundings
              decay={1} // Gradual reduction in intensity
              position={[-2, 2, 1]} // Positioned near the mesh
              castShadow 
            />
          )}
            
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_51.geometry}
          material={materials['Material.108']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_52.geometry}
          material={materials['Material.109']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_53.geometry}
          material={materials['Material.022']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_54.geometry}
          material={materials['Material.017']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_55.geometry}
          material={materials['Material.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_56.geometry}
          material={materials['Material.018']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_57.geometry}
          material={materials['Material.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_58.geometry}
          material={materials['Material.021']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_59.geometry}
          material={materials['Material.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_60.geometry}
          material={materials['Material.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_61.geometry}
          material={materials['Material.049']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_62.geometry}
          material={materials['Material.026']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_63.geometry}
          material={materials['Material.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_64.geometry}
          material={materials['Material.030']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_65.geometry}
          material={materials['Material.033']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_66.geometry}
          material={materials['Material.034']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_67.geometry}
          material={materials['Material.037']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_68.geometry}
          material={materials['Material.038']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_69.geometry}
          material={materials['Material.041']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_70.geometry}
          material={materials['Material.045']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_71.geometry}
          material={materials['Material.046']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_72.geometry}   //candle
          material={materials['Material.050']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_73.geometry}
          material={materials['Material.053']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_74.geometry}
          material={materials['Material.054']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_75.geometry}
          material={materials['Material.057']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_76.geometry}
          material={materials['Material.064']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_77.geometry}
          material={materials['Material.058']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_4002_78.geometry}
          material={materials['Material.012']}
        />
       <mesh
  castShadow
  receiveShadow
  geometry={nodes.s4studio_mesh_4002_79.geometry}
  material={materials['Material.068']} // Using the same material as the pillow
/>
      </group>
      <group position={[-0.72, 0.25, -0.063]} rotation={[0, 1.334, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_2017.geometry}
          material={materials['Material.126']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_2017_1.geometry}
          material={materials['Material.125']}
        />
      </group>
      <group position={[-0.557, 0.25, -0.138]} rotation={[0, 1.334, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_2018.geometry}
          material={materials['Material.127']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.s4studio_mesh_2018_1.geometry}
          material={materials['Material.128']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cage.geometry}
        material={materials['Material.116']}
        position={[-0.962, 0.253, -0.038]}
        scale={0.685}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desert.geometry}
        material={materials['Material.129']}
        position={[-0.64, 0.251, 0.141]}
        rotation={[-Math.PI, 1.451, 0]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gift.geometry}
        material={materials['Material.131']}
        position={[0.761, 0.147, -0.772]}
        rotation={[1.327, -0.128, 0.473]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.teddy.geometry}
        material={materials['Material.130']}
        position={[0.802, 0.052, -0.848]}
        rotation={[0, -0.489, 0]}
      />
    </group>
  )
}

useGLTF.preload('/scene.gltf')