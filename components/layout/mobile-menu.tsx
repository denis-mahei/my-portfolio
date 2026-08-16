'use client';

import { useMenuStore } from '@/stores/useMenuStore';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { path: '/', label: '_home' },
  { path: '/about', label: '_about' },
  { path: '/projects', label: '_projects' },
  { path: '/contact-me', label: '_contact-me' },
] as const;

function MobileMenu() {
  const pathname = usePathname();
  const close = useMenuStore((state) => state.close);
  useEffect(() => {
    close();
  }, [pathname, close]);
  const isOpen = useMenuStore((state) => state.isOpen);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={'mobile-menu'}
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute inset-0 bg-background z-50 lg:hidden py-3"
        >
          <nav className="flex flex-col px-6">
            <p className="py-3"># navigate:</p>
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="py-3 text-heading-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default MobileMenu;
