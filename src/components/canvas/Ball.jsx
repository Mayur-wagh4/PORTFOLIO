import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      
      {/* ✅ BETTER LIGHTING */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight position={[-5, 5, 5]} intensity={0.8} />

      <mesh castShadow receiveShadow scale={2.6}>
        <icosahedronGeometry args={[1, 1]} />

        {/* ✅ MATERIAL FIX */}
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.15}
          roughness={0.35}
        />

        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 6], fov: 45 }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
