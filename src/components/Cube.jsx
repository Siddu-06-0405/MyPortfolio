import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';

const Cube = ({ ...props }) => {
  const { nodes, materials } = useGLTF('models/github.glb'); // Ensure the path is correct
  const texture = useTexture('textures/desk/cpu.png');
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 3.8, 2.8]} scale={0.74} dispose={null} {...props}>
        <group ref={cubeRef} rotation={[Math.PI / 2, 0, 0]} scale={28.364}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.glossy_putih}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.github}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}><meshMatcapMaterial matcap={texture}/></mesh>
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload('models/github.glb'); // Preload the correct GLB file

export default Cube;