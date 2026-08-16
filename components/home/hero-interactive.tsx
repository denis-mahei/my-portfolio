import GlowBackground from '@/components/home/glow-background';

function HeroInteractive() {
  return (
    <div className="hidden lg:flex justify-center items-center h-full px-6">
      <div className="relative w-126.75 h-117.25 border border-stroke rounded-lg backdrop-blur-3xl shadow-[inset_0_2px_0_0_rgba(255,255,255,0.3)] bg-(image:--card-gradient)">
        <GlowBackground />
        Card
      </div>
    </div>
  );
}
export default HeroInteractive;
