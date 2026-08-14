import * as React from "react";
import HeroContent from "@/components/home/hero-content";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 h-full">
      <HeroContent />
    </div>
  );
}
