import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { nodes, materials, animations } = useGLTF('models/java.glb'); // Replace with java.glb
  const { actions } = useAnimations(animations, targetRef);

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Cube">
              <mesh
                name="Cube_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Plane" position={[0.787, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="Plane_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane001"
              position={[0, 0, 1.518]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1.218}>
              <mesh
                name="Plane001_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_0.geometry}
                material={materials['Material.002']}
                morphTargetDictionary={nodes.Plane001_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Plane001_0.morphTargetInfluences}
              />
            </group>
            <group
              name="Torus001"
              position={[-0.138, -0.061, -0.771]}
              rotation={[-0.14, -0.02, 0.097]}
              scale={[0.467, 0.432, 0.432]}>
              <mesh
                name="Torus001_0"
                castShadow
                receiveShadow
                geometry={nodes.Torus001_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Torus000"
              position={[0.095, -0.029, -0.88]}
              rotation={[-0.134, -0.046, 0.098]}
              scale={[0.454, 0.419, 0.303]}>
              <mesh
                name="Torus000_0"
                castShadow
                receiveShadow
                geometry={nodes.Torus000_0.geometry}
                material={materials.Material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('models/java.glb'); // Preload java.glb

export default Target;