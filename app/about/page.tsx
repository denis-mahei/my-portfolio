'use client';

import { useState } from 'react';
import { aboutData } from '@/lib/data';
import Sidebar from '@/components/about/sidebar';
import Wrapper from '@/components/layout/wrapper';

function Page() {
  const [activeFileId, setActiveFileId] = useState('bio');

  const activeFile = aboutData
    .filter((section) => section.type === 'files')
    .flatMap((section) => section.children)
    .find((file) => file.id === activeFileId);

  return (
    <Wrapper title={'_about'}>
      <Sidebar
        activeFileId={activeFileId}
        onFileSelect={setActiveFileId}
      />
      <p className="p-6">{activeFile?.content}</p>
    </Wrapper>
  );
}
export default Page;
