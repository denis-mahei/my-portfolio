'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { RiArrowRightSFill, RiFileCodeFill } from '@remixicon/react';
import { cn } from '@/lib/utils';
import { aboutData } from '@/lib/data';

type SidebarProps = {
  activeFileId: string;
  onFileSelect: (id: string) => void;
};

function Sidebar({ activeFileId, onFileSelect }: SidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>([
    'personal-info',
  ]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id],
    );
  };

  return (
    <aside className="flex flex-col h-ful gap-1">
      {aboutData.map((section) => {
        const isOpen = openSections.includes(section.id);

        return (
          <div key={section.id}>
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-4 py-3 flex items-center gap-2 text-heading-foreground bg-slate-700"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <RiArrowRightSFill size={16} />
              </motion.div>
              {section.label}
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="pl-6 overflow-hidden"
                >
                  {section.type === 'files'
                    ? section.children.map((file) => (
                        <button
                          key={file.id}
                          onClick={() => onFileSelect(file.id)}
                          className={cn(
                            'w-full text-left px-4 py-2 transition-colors flex' +
                              ' items-center gap-1 ',
                            activeFileId === file.id
                              ? 'text-heading-foreground'
                              : 'text-foreground hover:text-heading-foreground',
                          )}
                        >
                          <RiFileCodeFill />
                          {file.label}
                        </button>
                      ))
                    : section.children.map((link) => (
                        <div key={link.id} className="flex flex-col">
                          <a
                            href={link.href}
                            target={
                              link.href.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              link.href.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                            className="flex items-center py-2 px-4 gap-1 text-teal-400"
                          >
                            <link.icon
                              size={16}
                              className="text-heading-foreground"
                            />
                            {link.label}
                          </a>
                        </div>
                      ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </aside>
  );
}

export default Sidebar;
