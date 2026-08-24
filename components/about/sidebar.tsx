'use client';

import { cn } from '@/lib/utils';
import { aboutData } from '@/lib/data';
import CollapsibleSection from '@/components/ui/collapsible-section';
import { RiFileCodeFill } from '@remixicon/react';

type SidebarProps = {
  activeFileId: string;
  onFileSelect: (id: string) => void;
};

function Sidebar({ activeFileId, onFileSelect }: SidebarProps) {
  return (
    <aside className="flex flex-col h-full lg:border-r lg:border-stroke">
      {aboutData.map((section) => {
        return (
          <CollapsibleSection
            label={section.label}
            key={section.id}
            defaultOpen={section.id === 'personal-info'}
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
          </CollapsibleSection>
        );
      })}
    </aside>
  );
}

export default Sidebar;
