import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';

// Custom materials
const newFaceMaterial = new MeshStandardMaterial({
  color: 0xe5d8d0, // Skin color
  metalness: 0.1,
  roughness: 1,
});

const blackColor = new MeshStandardMaterial({
  color: 0x000000, // Black color
  metalness: 0.1,
  roughness: 1,
});

const customMaterial = new MeshStandardMaterial({
  color: 0xffffff, // White color
  metalness: 0.1,
  roughness: 0.7,
});

const katana = new MeshStandardMaterial({
  color: 0x99a3a3, // Katana color
  metalness: 0.1,
  roughness: 1,
});

const Developer = (props) => {
  const { nodes, materials } = useGLTF('/aizen2.glb');
  const groupRef = useRef(); // Reference for the entire character group
  const katanaRef = useRef(); // Reference for the katana
  const time = useRef(0); // Track elapsed time for animations

  // Animation loop
  useFrame((state, delta) => {
    time.current += delta;

    // Floating animation
    if (groupRef.current) {
      groupRef.current.position.y = -4+Math.sin(time.current * 1.5) * 0.05; // Move up and down
    }

    // Rotation animation
    if (groupRef.current) {
      groupRef.current.rotation.y = time.current * 0.5; // Rotate around Y-axis
    }

    // Pulsating effect for the katana
    if (katanaRef.current) {
      katanaRef.current.scale.setScalar(1 + Math.sin(time.current * 2) * 0.08); // Scale up and down
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <primitive object={nodes._rootJoint} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[0.421, -0.191, 3.306]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[0.621, -0.291, 3.806]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[0.801, -0.111, 3.306]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['j_obi_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials['h_kimono_2_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['j_obi_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials['g_kimono_1_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials['g_kimono_1_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials['g_kimono_1_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials['d_haori_1_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={customMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials['d_haori_1_mtl-fx_0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials['e_haori_2_mtl-fx_0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials['f_haori_3_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials['a_hair_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials['d_haori_1_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials['j_obi_mtl-fx_1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials['b_face_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials['b_face_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials['b_face_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials['b_face_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials['b_face_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials['b_face_mtl-fx']}
        />
        <mesh
          ref={katanaRef} // Reference for the katana
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={katana}
          position={-0.5,-0.5,-0.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials['d_haori_1_mtl-fx']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials['i_kutu_mtl-fx_0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={blackColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials['a_tabi_mtl-fx_0']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials['b_face_mtl-fx_2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials['a_hair_mtl-fx_3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials['f_haori_3_mtl-fx_0']}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/aizen2.glb');

export default Developer;