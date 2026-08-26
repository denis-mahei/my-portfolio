'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { RiCloseFill, RiMenu3Fill } from '@remixicon/react';
import { useMenuStore } from '@/stores/useMenuStore';

const links = [
  { path: '/', label: '_home' },
  { path: '/about', label: '_about' },
  { path: '/projects', label: '_projects' },
] as const;

const tabClasses =
  "relative py-4 px-6 border-l border-l-stroke after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:content-['']";

function Header() {
  const pathname = usePathname();
  const { isOpen, toggle } = useMenuStore();
  return (
    <>
      <header className="flex justify-between border-b border-stroke">
        <Link href="/" className="px-6 py-4 mr-32 shrink-0">
          denys mahei
        </Link>
        <div className="hidden lg:flex justify-between w-full">
          <div className="flex">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  tabClasses,
                  'last:border-r last:border-r-stroke',
                  pathname === link.path ? 'text-heading-foreground after:bg-primary' : 'after:bg-transparent',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact-me"
            className={cn(
              tabClasses,
              'lg:px-8 lg:py-4 lg:border-l lg:border-l-stroke',
              pathname === '/contact-me' ? 'text-heading-foreground after:bg-primary' : 'after:bg-transparent',
            )}
          >
            _contact-me
          </Link>
        </div>
        <button onClick={toggle} className="p-4 lg:hidden">
          {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </button>
      </header>
    </>
  );
}
export default Header;
