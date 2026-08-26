'use client';
import GlowBackground from '@/components/home/glow-background';
import { motion } from 'motion/react';
import Screw from '@/components/ui/screw';

function HeroInteractive() {
  return (
    <div className="hidden lg:flex justify-center items-center h-full px-6">
      <motion.div
        initial={{ rotate: 2 }}
        animate={{ rotate: 360 }}
        className="relative w-126.75 h-117.25 border border-stroke rounded-lg backdrop-blur-3xl shadow-[inset_0_2px_0_0_rgba(255,255,255,0.3)] bg-(image:--card-gradient)"
      >
        <GlowBackground />

        <Screw position="absolute top-5 left-5" />

        <Screw position="absolute top-5 right-5" />
        <Screw position="absolute bottom-5 left-5" />
        <Screw position="absolute bottom-5 right-5" />
      </motion.div>
    </div>
  );
}
export default HeroInteractive;
