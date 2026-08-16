'use client';

import MobileMenu from '@/components/layout/mobile-menu';

function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 flex flex-col relative overflow-hidden">
      <MobileMenu />
      {children}
    </main>
  );
}

export default MainWrapper;
