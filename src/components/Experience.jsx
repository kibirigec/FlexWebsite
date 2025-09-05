import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
import { Suspense } from "react";

export const Experience = () => {
  return (
    <Suspense fallback={null}>
      {/* 
        Float component adds a gentle floating animation to the book
        rotation-x: initial tilt of the book (-Math.PI / 4 = -45 degrees)
        floatIntensity: how much the book moves up and down (1 = moderate)
        speed: how fast the floating animation is (2 = moderate)
        rotationIntensity: how much the book rotates while floating (2 = moderate)
      */}
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={0.2}
        speed={1}
        rotationIntensity={1}
      >
        <Book />
      </Float>

      {/* 
        OrbitControls handles user interaction with the book
        enableDamping: smooth camera movement
        dampingFactor: how smooth the movement is (0.05 = very smooth)
        enableZoom: false = prevents zooming with scroll wheel
        minPolarAngle/maxPolarAngle: restricts vertical rotation angle
        - Math.PI / 4 = 45 degrees (minimum tilt)
        - Math.PI / 2 = 90 degrees (maximum tilt)
        
        Click vs Drag detection:
        - enablePan: false = prevents accidental panning
        - mouseButtons: Only allow rotation with left mouse button
        - touches: Configure touch controls for mobile
      */}
      <OrbitControls 
        enableDamping
        dampingFactor={0.05}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        mouseButtons={{
          LEFT: 0, // THREE.MOUSE.ROTATE
          MIDDLE: undefined, // Disable middle mouse
          RIGHT: undefined // Disable right mouse
        }}
        touches={{
          ONE: 0, // THREE.TOUCH.ROTATE
          TWO: undefined // Disable two-finger gestures
        }}
        // Increase rotation speed to make dragging feel more responsive
        rotateSpeed={0.8}
        // Make click detection more lenient by increasing the threshold
        // for what constitutes a "drag" vs a "click"
        minDistance={0}
        maxDistance={Infinity}
      />

      {/* Studio environment lighting for realistic shadows and reflections */}
      <Environment preset="studio" />

      {/* 
        Main directional light for shadows
        position: [2, 5, 2] = light comes from top-right
        intensity: 2.5 = moderate brightness
        shadow settings control shadow quality
      */}
      <directionalLight
        position={[-5, 20, 2]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* 
        Ground plane for shadows
        position-y: -1.5 = slightly below the book
        rotation-x: -Math.PI / 2 = flat on the ground
        shadowMaterial: semi-transparent shadow
      */}
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.05} />
      </mesh>
    </Suspense>
  );
}; 