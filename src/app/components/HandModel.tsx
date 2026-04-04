'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/models/robot_hand.glb');
  const ref = useRef<THREE.Group>(null!);

  // 🔥 Improve material visibility
  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material.metalness = 0.6;
      child.material.roughness = 0.25;
      child.material.envMapIntensity = 1.5;
    }
  });

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!ref.current) return;

    // 🔥 Smooth floating
    ref.current.position.y = Math.sin(t) * 0.12;

    // 🔥 CONTINUOUS ROTATION (main upgrade)
    ref.current.rotation.y = t * 0.4; // steady spin

    // 🔥 MORE SIDE + TOP ANGLE
    ref.current.rotation.x = -0.4; // top tilt
    ref.current.rotation.z = 0.25; // more side angle
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={2}                 // balanced size
      position={[0, -0.4, 0]}   // centered
    />
  );
}

export default function HandModel() {
  return (
    <Canvas camera={{ position: [0, 0.5, 7], fov: 50 }}>
      
      {/* 🌑 Base light */}
      <ambientLight intensity={1.4} />

      {/* 🔥 FRONT LIGHT */}
      <directionalLight position={[0, 2, 6]} intensity={2.5} />

      {/* 🔥 SIDE LIGHT */}
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      {/* 🔥 TOP LIGHT */}
      <pointLight position={[0, 5, 0]} intensity={1.2} />

      {/* 🔥 EDGE GLOW */}
      <pointLight position={[-3, 0, -3]} intensity={1.5} color="#ff6a00" />

      <Model />
    </Canvas>
  );
}