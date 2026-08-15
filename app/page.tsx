import * as React from 'react';
import HeroContent from '@/components/home/hero-content';
import HeroInteractive from '@/components/home/hero-interactive';

export default function Home() {
  return (
    <div className="flex-1 grid lg:grid-cols-2">
      <HeroContent />
      <HeroInteractive />
    </div>
  );
}
