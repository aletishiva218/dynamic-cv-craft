import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

interface CursorState {
  x: number;
  y: number;
  isMoving: boolean;
  isHovering: boolean;
  velocity: { x: number; y: number };
}

// 3D Person Character Component
const PersonCharacter: React.FC<{ 
  isMoving: boolean; 
  isHovering: boolean;
  velocity: { x: number; y: number };
}> = ({ isMoving, isHovering, velocity }) => {
  const groupRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const headRef = useRef<THREE.Mesh>(null);
  
  const [time, setTime] = useState(0);

  useFrame((state, delta) => {
    setTime(prev => prev + delta);
    
    if (!groupRef.current) return;

    if (isHovering) {
      // Sitting animation - character sits down
      if (leftLegRef.current && rightLegRef.current) {
        leftLegRef.current.rotation.x = Math.PI / 3; // Bend legs
        rightLegRef.current.rotation.x = Math.PI / 3;
      }
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.x = -Math.PI / 6; // Relax arms
        rightArmRef.current.rotation.x = -Math.PI / 6;
      }
      // Lower the whole character
      groupRef.current.position.y = -0.2;
    } else if (isMoving) {
      // Running animation
      const runSpeed = 8;
      const armSwing = Math.sin(time * runSpeed) * 0.5;
      const legSwing = Math.sin(time * runSpeed) * 0.3;
      
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.x = armSwing;
        rightArmRef.current.rotation.x = -armSwing;
      }
      
      if (leftLegRef.current && rightLegRef.current) {
        leftLegRef.current.rotation.x = legSwing;
        rightLegRef.current.rotation.x = -legSwing;
      }
      
      // Bob up and down while running
      groupRef.current.position.y = Math.sin(time * runSpeed * 2) * 0.05;
      
      // Lean forward when running fast
      const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
      groupRef.current.rotation.z = speed * 0.1;
    } else {
      // Sleeping animation - gentle breathing and swaying
      const breathe = Math.sin(time * 2) * 0.02;
      const sway = Math.sin(time * 1.5) * 0.01;
      
      groupRef.current.position.y = breathe;
      groupRef.current.rotation.z = sway;
      
      // Head nods gently
      if (headRef.current) {
        headRef.current.rotation.x = Math.sin(time * 1.2) * 0.1;
      }
      
      // Arms and legs relax
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.x = Math.sin(time * 1.1) * 0.05 - 0.1;
        rightArmRef.current.rotation.x = Math.sin(time * 1.3) * 0.05 - 0.1;
      }
      
      if (leftLegRef.current && rightLegRef.current) {
        leftLegRef.current.rotation.x = 0;
        rightLegRef.current.rotation.x = 0;
      }
    }
  });

  return (
    <group ref={groupRef} scale={0.8}>
      {/* Head */}
      <Sphere 
        ref={headRef}
        args={[0.15]} 
        position={[0, 0.4, 0]}
      >
        <meshStandardMaterial color="hsl(79, 70%, 80%)" />
      </Sphere>
      
      {/* Body */}
      <Cylinder 
        args={[0.1, 0.12, 0.3]} 
        position={[0, 0.1, 0]}
      >
        <meshStandardMaterial color="hsl(79, 70%, 70%)" />
      </Cylinder>
      
      {/* Left Arm */}
      <Cylinder 
        ref={leftArmRef}
        args={[0.03, 0.03, 0.2]} 
        position={[-0.15, 0.15, 0]}
        rotation={[0, 0, Math.PI / 6]}
      >
        <meshStandardMaterial color="hsl(79, 70%, 75%)" />
      </Cylinder>
      
      {/* Right Arm */}
      <Cylinder 
        ref={rightArmRef}
        args={[0.03, 0.03, 0.2]} 
        position={[0.15, 0.15, 0]}
        rotation={[0, 0, -Math.PI / 6]}
      >
        <meshStandardMaterial color="hsl(79, 70%, 75%)" />
      </Cylinder>
      
      {/* Left Leg */}
      <Cylinder 
        ref={leftLegRef}
        args={[0.04, 0.04, 0.25]} 
        position={[-0.06, -0.15, 0]}
      >
        <meshStandardMaterial color="hsl(79, 50%, 60%)" />
      </Cylinder>
      
      {/* Right Leg */}
      <Cylinder 
        ref={rightLegRef}
        args={[0.04, 0.04, 0.25]} 
        position={[0.06, -0.15, 0]}
      >
        <meshStandardMaterial color="hsl(79, 50%, 60%)" />
      </Cylinder>
      
      {/* Simple feet */}
      <Box args={[0.08, 0.03, 0.12]} position={[-0.06, -0.3, 0.03]}>
        <meshStandardMaterial color="hsl(20, 30%, 20%)" />
      </Box>
      <Box args={[0.08, 0.03, 0.12]} position={[0.06, -0.3, 0.03]}>
        <meshStandardMaterial color="hsl(20, 30%, 20%)" />
      </Box>
    </group>
  );
};

// Main 3D Scene for Cursor
const CursorScene: React.FC<CursorState> = ({ isMoving, isHovering, velocity }) => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={0.8} />
      <PersonCharacter 
        isMoving={isMoving} 
        isHovering={isHovering}
        velocity={velocity}
      />
    </>
  );
};

// Main Animated Cursor Component
const AnimatedCursor3D: React.FC = () => {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isMoving: false,
    isHovering: false,
    velocity: { x: 0, y: 0 }
  });

  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [movingTimeout, setMovingTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Calculate velocity
      const velocityX = newX - lastPosition.x;
      const velocityY = newY - lastPosition.y;
      
      setCursorState(prev => ({
        ...prev,
        x: newX,
        y: newY,
        isMoving: true,
        velocity: { x: velocityX, y: velocityY }
      }));
      
      setLastPosition({ x: newX, y: newY });
      
      // Clear previous timeout
      if (movingTimeout) {
        clearTimeout(movingTimeout);
      }
      
      // Set timeout to stop moving animation
      const timeout = setTimeout(() => {
        setCursorState(prev => ({ ...prev, isMoving: false }));
      }, 150);
      
      setMovingTimeout(timeout);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('a, button, [role="button"], input, select, textarea, [onclick], [data-hover]');
      
      if (isInteractive) {
        setCursorState(prev => ({ ...prev, isHovering: true }));
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('a, button, [role="button"], input, select, textarea, [onclick], [data-hover]');
      
      if (isInteractive) {
        setCursorState(prev => ({ ...prev, isHovering: false }));
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    
    // Add custom cursor class to body
    document.body.classList.add('custom-cursor');

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.body.classList.remove('custom-cursor');
      
      if (movingTimeout) {
        clearTimeout(movingTimeout);
      }
    };
  }, [lastPosition, movingTimeout]);

  return (
    <div
      className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${cursorState.x - 32}px, ${cursorState.y - 32}px)`,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 2], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <CursorScene {...cursorState} />
      </Canvas>
    </div>
  );
};

export default AnimatedCursor3D;