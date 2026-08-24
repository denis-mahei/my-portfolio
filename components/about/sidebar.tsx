'use client';

import { cn } from '@/lib/utils';
import { aboutData } from '@/components/about/data';
import CollapsibleSection from '@/components/ui/collapsible-section';
import { RiFileCodeFill } from '@remixicon/react';
import ContactsList from '../contacts/contacts-list';

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
            {section.children.map((file) => {
              return (
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
              );
            })}
          </CollapsibleSection>
        );
      })}
      <CollapsibleSection label="contacts">
        <ContactsList />
      </CollapsibleSection>
    </aside>
  );
}

export default Sidebar;
