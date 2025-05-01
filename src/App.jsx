import { useRef } from 'react';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Cube({ pos, args, color }) {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2.0;
    ref.current.position.z += Math.sin(state.clock.elapsedTime * 2.0) * 0.06; // Added a sine wave movement to the z position
  });
  return (
    <mesh position={pos} ref={ref}>
      <boxGeometry args={args} /> {/* args is an array that defines the width, height, and depth of the box */}
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Sphere({ pos, args, color }) {
  const ref = useRef();
  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta;
  //   ref.current.rotation.y += delta * 2.0;
  //   ref.current.position.z += Math.sin(state.clock.elapsedTime * 2.0) * 0.06; // Added a sine wave movement to the z position
  // });
  return (
    <mesh position={pos} ref={ref}>
      <sphereGeometry args={args} /> {/* args is an array that defines the radius, width segments, and height segments */}
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
}

function App() {
  return (
    <>
      <Canvas>
        <directionalLight position={[1, 1, 1]} />
        <ambientLight />
        {/* <Cube pos={[0, 0, 0]} args={[1, 1, 1]} color="blue" /> */}
        <Sphere pos={[0, 0, 0]} args={[1, 30, 30]} color="red" />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;