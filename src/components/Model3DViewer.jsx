import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';

function Model({ url, scale = 1, position = [0, 0, 0] }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} position={position} />;
}

const Model3DViewer = ({ modelUrl, scale = 1, position = [0, 0, 0], cameraPosition = [0, 0, 5] }) => {
  return (
    <div className="w-full h-full" style={{ minHeight: '300px' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Suspense fallback={null}>
          <Model url={modelUrl} scale={scale} position={position} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
};

export default Model3DViewer;