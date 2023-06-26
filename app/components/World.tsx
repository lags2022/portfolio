"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

const World = () => {
  const texture = useLoader(
    THREE.TextureLoader,
    "/globe/earth-blue-marble.jpg"
  );

  return (
    <div className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 0, 6],
        }}
      >
        <OrbitControls
          autoRotate
          enableZoom={true}
          enableRotate={true}
          enablePan={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          dampingFactor={0.03}
        />
        <motion.mesh
          //   scale={[1, 1, 1]}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          animate={{ scale: 2, opacity: 1 }}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial attach="material" map={texture} />
        </motion.mesh>
      </Canvas>
    </div>
  );
};

export default World;
