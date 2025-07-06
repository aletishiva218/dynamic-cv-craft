import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface SkillData {
  name: string;
  value: number;
}

interface Chart3DProps {
  title: string;
  data: SkillData[];
  icon: React.ReactNode;
  delay?: number;
}

// Individual 3D Bar Component
const Bar3D: React.FC<{
  position: [number, number, number];
  height: number;
  color: string;
  label: string;
  value: number;
  delay: number;
}> = ({ position, height, color, label, value, delay }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [animatedHeight, setAnimatedHeight] = useState(0);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Animate height growth
      setAnimatedHeight(prev => {
        const target = height;
        const diff = target - prev;
        if (Math.abs(diff) < 0.01) return target;
        return prev + diff * delta * 3;
      });

      // Update scale
      meshRef.current.scale.y = animatedHeight;
      
      // Hover effect
      if (hovered) {
        meshRef.current.scale.x = 1.1;
        meshRef.current.scale.z = 1.1;
      } else {
        meshRef.current.scale.x = 1;
        meshRef.current.scale.z = 1;
      }
      
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.02;
    }
  });

  return (
    <group>
      {/* Main Bar */}
      <Box
        ref={meshRef}
        args={[0.8, 1, 0.8]}
        position={[position[0], position[1] + 0.5, position[2]]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={color} 
          metalness={0.3}
          roughness={0.4}
        />
      </Box>
      
      {/* Value Label */}
      <Text
        position={[position[0], position[1] + height + 0.5, position[2] + 0.5]}
        fontSize={0.15}
        color="hsl(79, 70%, 229)"
        anchorX="center"
        anchorY="middle"
      >
        {value}%
      </Text>
      
      {/* Skill Name */}
      <Text
        position={[position[0], position[1] - 0.8, position[2] + 0.5]}
        fontSize={0.12}
        color="hsl(18, 21%, 33)"
        anchorX="center"
        anchorY="middle"
        maxWidth={1}
      >
        {label}
      </Text>
    </group>
  );
};

// 3D Scene Component
const Chart3DScene: React.FC<{ data: SkillData[]; delay: number }> = ({ data, delay }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation animation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const colors = [
    'hsl(79, 70%, 229)',   // Primary purple
    'hsl(34, 197%, 94)',   // Success green  
    'hsl(59, 130%, 246)',  // Blue
    'hsl(245, 158%, 11)',  // Warning amber
    'hsl(239, 68%, 68)'    // Destructive red
  ];

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} />
      
      {data.map((item, index) => (
        <Bar3D
          key={item.name}
          position={[
            (index - (data.length - 1) / 2) * 1.2, 
            0, 
            0
          ]}
          height={item.value / 100 * 2} // Scale height based on percentage
          color={colors[index % colors.length]}
          label={item.name}
          value={item.value}
          delay={delay + index * 0.2}
        />
      ))}
      
      {/* Base Platform */}
      <Box
        args={[data.length * 1.2 + 1, 0.1, 2]}
        position={[0, -0.6, 0]}
      >
        <meshStandardMaterial 
          color="hsl(243, 244%, 246)"
          metalness={0.1}
          roughness={0.8}
        />
      </Box>
    </group>
  );
};

// Main 3D Chart Component
const Chart3D: React.FC<Chart3DProps> = ({ title, data, icon, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      className="card-professional element-3d"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <motion.div 
        className="flex items-center gap-3 mb-6"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="text-primary"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </motion.div>

      {/* 3D Chart Canvas */}
      <div className="h-64 w-full mb-4 rounded-lg overflow-hidden bg-muted/20">
        {isVisible && (
          <Canvas
            camera={{ position: [0, 2, 5], fov: 50 }}
            style={{ width: '100%', height: '100%' }}
          >
            <Chart3DScene data={data} delay={delay} />
            <OrbitControls 
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              maxPolarAngle={Math.PI / 2}
              minDistance={3}
              maxDistance={8}
            />
          </Canvas>
        )}
      </div>

      {/* Legend */}
      <div className="space-y-2">
        {data.map((skill, index) => {
          const colors = [
            'hsl(79, 70%, 229)',
            'hsl(34, 197%, 94)', 
            'hsl(59, 130%, 246)',
            'hsl(245, 158%, 11)',
            'hsl(239, 68%, 68)'
          ];
          
          return (
            <motion.div 
              key={skill.name}
              className="flex items-center justify-between"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.3 + index * 0.1, duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full shadow-sm" 
                  style={{ backgroundColor: colors[index % colors.length] }}
                />
                <span className="text-sm text-foreground/80">{skill.name}</span>
              </div>
              <span className="text-sm font-medium text-primary">{skill.value}%</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Chart3D;