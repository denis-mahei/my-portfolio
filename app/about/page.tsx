'use client';

import { useState } from 'react';
import { aboutData } from '@/lib/data';
import Sidebar from '@/components/about/sidebar';

function Page() {
  const [activeFileId, setActiveFileId] = useState('bio');

  const activeFile = aboutData
    .filter((section) => section.type === 'files')
    .flatMap((section) => section.children)
    .find((file) => file.id === activeFileId);

  return (
    <div className="flex flex-col h-full">
      <h2 className="p-6 text-heading-foreground text-sm">_about</h2>
      <Sidebar
        activeFileId={activeFileId}
        onFileSelect={setActiveFileId}
      />
      <p className="p-6">{activeFile?.content}</p>
    </div>
  );
}
export default Page;
