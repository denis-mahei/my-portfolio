function GlowBackground() {
  return (
    <>
      <div
        className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-85 h-85 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(0, 213, 190, 0.4)' }}
      />

      <div
        className="absolute top-[10%] left-[60%] -translate-x-1/2 w-85 h-85 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(0, 213, 190, 0.3)' }}
      />

      <div
        className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-62.5 h-62.5 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(97, 95, 255, 0.4)' }}
      />

      <div
        className="absolute bottom-0 left-[65%] -translate-x-3/4 translate-y-2/5 w-85 h-85 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(97, 95, 255, 0.4)' }}
      />
    </>
  );
}
export default GlowBackground;
