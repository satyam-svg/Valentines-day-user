import React, { useRef, useState } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { CameraControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export default function Gaming(props) {
  const { nodes, materials } = useGLTF('/gaming/untitled.gltf');
  const cameraControlsRef = useRef();
  const { camera } = useThree();
  const [isZoomed, setIsZoomed] = useState(false);

 


  const spotLightRef = useRef()
  return (
    <group {...props} dispose={null}>



<ambientLight intensity={0.3} color="#ffffff" />

{/* SpotLight for a focused light effect */}
<spotLight
        ref={spotLightRef}
        position={[5, 8, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        color="#ffffff"
      />

{/* Point Light for glowing effects */}
<pointLight position={[0, 3, 0]} intensity={0.5} color="#ff00ff" distance={10} />
      <pointLight position={[-2, 3, -3]} intensity={0.4} color="#00ffff" distance={8} />
      <pointLight position={[2, 3, 3]} intensity={0.4} color="#ffff00" distance={8} />

     

<group position={[-1.5, 5, -4]}>
        <pointLight intensity={2} distance={5} color="#ff0000" />
        <pointLight position={[0.5, 0, 0]} intensity={2} distance={5} color="#00ff00" />
        <pointLight position={[1, 0, 0]} intensity={2} distance={5} color="#0000ff" />
      </group>

      <group
        position={[-2.209, 5.812, -3.963]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.033, 0.009, 0.033]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_109.geometry}
          material={materials.aButton1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_110.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_111.geometry}
          material={materials.blinn3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_112.geometry}
          material={materials.blinn2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_113.geometry}
          material={materials.yButton1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_114.geometry}
          material={materials.bButton1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_115.geometry}
          material={materials.xButton1}
        />
      </group>
      <group
        position={[0.253, 0.585, -2.938]}
        rotation={[0, -1.571, 0]}
        scale={[0.14, 0.029, 0.116]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials['Material.005']}
        />
      </group>
      <group
        position={[-2.5, 2, -1.7]}       //chair
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.022}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_140.geometry}
          material={materials.Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_141.geometry}
          material={materials.ShinyPlastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_142.geometry}
          material={materials.LeatherCougar2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_143.geometry}
          material={materials.LeatherCougar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_144.geometry}
          material={materials.Metallic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_145.geometry}
          material={materials.Leather}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_146.geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_147.geometry}
          material={materials['Leather.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_148.geometry}
          material={materials['Leather.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_149.geometry}
          material={materials.Belt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_150.geometry}
          material={materials['Metallic.001']}
        />
      </group>
      <group position={[-1.548, 2.469, -4.016]} rotation={[-Math.PI / 2, 0, 0]} scale={0.242}>   //Screen
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.57, 0, 0]}>
          <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_68.geometry}
        material={materials['Material.017']}
        
        >
        
        
       
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_66.geometry}
        material={materials.phong1}
      />
          </group>
        </group>
       
      </group>
      <group position={[-0.453, 2.523, -3.1]} rotation={[-Math.PI / 2, 0, 0.303]} scale={3.22}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.MAT_Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.MAT_Emission}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.MAT_Details}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.MAT_Plastic}
          />
        </group>
      </group>
      <group position={[-1.51, 5.632, -3.955]} rotation={[-Math.PI / 2, 0, 0]} scale={4.295}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_100.geometry}
            material={materials.Screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_101.geometry}
            material={materials.Lens}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_102.geometry}
            material={materials.Button}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_103.geometry}
            material={materials.Dial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_104.geometry}
            material={materials.Lens_Grip}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_105.geometry}
            material={materials.Lens_Outer}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_106.geometry}
            material={materials.Camera_Outer}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_107.geometry}
            material={materials.Back_Outer}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_96.geometry}
            material={materials.Dial_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_97.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_99.geometry}
            material={materials.Rubber}
          />
        </group>
      </group>
      <group position={[-1.777, 5.637, -4.15]} rotation={[-Math.PI / 2, 0, -0.567]} scale={0.015}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.332, 0, -11.309]} rotation={[-Math.PI / 2, 0, -0.869]} scale={10.02}>
            <group position={[0, 0, 2.543]} rotation={[-0.337, -0.14, 0.38]}>
              <group position={[0, -0.705, -0.882]}>
                <group position={[5.116, 4.609, 3.018]} rotation={[0.284, -0.355, 1.346]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_86.geometry}
                    material={materials.Metall_rough}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_87.geometry}
                    material={materials.Metall}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_88.geometry}
                    material={materials.Middle}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_89.geometry}
                    material={materials['material.001']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[-4.971, 2.506, -3.644]} rotation={[Math.PI / 2, 0, 0]} scale={-0.013}>
        <group position={[-91.384, 63.435, 16.81]}>
          <group position={[85.712, 1.81, -63.435]}>
            <group position={[-487.138, 0, 0]} rotation={[-Math.PI, 0, 0]} scale={-1}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_128.geometry}
                material={materials['03_-_Default']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_129.geometry}
                material={materials['12_-_Default']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_130.geometry}
                material={materials['04_-_Default']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_131.geometry}
                material={materials['07_-_Default']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_132.geometry}
                material={materials.Material_26}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_133.geometry}
                material={materials['11_-_Default']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_134.geometry}
                material={materials['05_-_Default']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_135.geometry}
                material={materials.Box002__0}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_136.geometry}
                material={materials['06_-_Default']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_137.geometry}
                material={materials['10_-_Default']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_138.geometry}
                material={materials['08_-_Default']}
              />
            </group>
          </group>
        </group>
      </group>
      <group position={[1.023, 5.923, -3.997]} rotation={[-Math.PI / 2, 0, 0]} scale={0.266}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-4.388, 0.127, 0]} scale={1.281}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_75.geometry}
              material={materials.aiStandardSurface3SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_76.geometry}
              material={materials.aiStandardSurface3SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_77.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_78.geometry}
              material={materials.aiStandardSurface1SG}
            />
          </group>
        </group>
      </group>
      <group position={[-1.548, 2.565, -2.538]} rotation={[-Math.PI / 2, 0, 0]} scale={0.4}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[52.674, 0, -128.047]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_60.geometry}
              material={materials['Material.009']}
              position={[-0.877, 0, 0]}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials['Material.001']}
        position={[0.253, 0.585, -2.938]}
        rotation={[0, -1.571, 0]}
        scale={[0.14, 0.029, 0.116]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.material_0}
        position={[0.253, 0.585, -2.938]}
        rotation={[0, -1.571, 0]}
        scale={[0.14, 0.029, 0.116]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.material_0}
        position={[0.253, 0.585, -2.938]}
        rotation={[0, -1.571, 0]}
        scale={[0.14, 0.029, 0.116]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials.material_0}
        position={[0.253, 0.585, -2.938]}
        rotation={[0, -1.571, 0]}
        scale={[0.14, 0.029, 0.116]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials.material_0}
        position={[0.253, 0.585, -2.938]}
        rotation={[0, -1.571, 0]}
        scale={[0.14, 0.029, 0.116]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials.material_0}
        position={[0.253, 0.585, -2.938]}
        rotation={[0, -1.571, 0]}
        scale={[0.14, 0.029, 0.116]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials['Material.006']}
        position={[-3.521, 0.585, -2.938]}
        rotation={[0, -1.571, 0]}
        scale={[0.14, 0.029, 0.116]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials['Material.005']}
        position={[-3.521, 0.585, -2.938]}
        rotation={[0, -1.571, 0]}
        scale={[0.14, 0.029, 0.116]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials['Material.019']}
        position={[-4.378, 0.412, -4.378]}
        scale={[0.19, 3.985, 0.19]}
      />
     <mesh
  castShadow
  receiveShadow
  geometry={nodes.Object_22.geometry}
  material={materials['Material.011']}
  position={[0, 0.412, 0]}  //wall
  scale={4.378}
>
  {/* 🔥 Red Light - Gaming Effect */}
 
</mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials['Material.010']}
        position={[0, 0.412, 0]}
        scale={4.378}
      >
         
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials['Material.012']}
        position={[0, 0.412, 0]}
        scale={4.378}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials['Material.007']}
        position={[-4.198, 2.456, -2.386]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 2.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials['Material.008']}
        position={[-4.198, 2.456, -2.386]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 2.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials['Material.014']}
        position={[-1.548, 2.506, -3.1]}
        rotation={[0, -1.571, 0]}
        scale={[0.558, 1, 1.703]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_70.geometry}
        material={materials['Material.013']}
        position={[-1.548, 5.635, -4.012]}
        scale={[1.763, 1, 0.388]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_117.geometry}
        material={materials['Material.015']}
        position={[-1.438, 7.083, -4.296]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.477, 0.609, 0.609]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_119.geometry}
        material={materials['Material.016']}
        position={[-1.438, 7.083, -4.289]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.477, 0.609, 0.609]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.material_0}
        position={[0, 0.412, 0]}
        scale={4.378}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_121.geometry}
        material={materials['Material.018']}
        position={[-4.378, 4.763, -1.907]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      >
         <directionalLight position={[1, 3, 2]} intensity={1.2} color="yellow" castShadow={false} />
        <directionalLight position={[5, 2, 5]} intensity={1.2} color="#f8c291" castShadow={false} />
        </mesh>
    </group>
  )
}

useGLTF.preload('/gaming/untitled.gltf')


