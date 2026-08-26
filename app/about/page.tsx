'use client';

import { useState } from 'react';
import { aboutData } from '@/components/about/data';
import Sidebar from '@/components/about/sidebar';
import Wrapper from '@/components/layout/wrapper';
import BioContent from '@/components/about/bio-content';

function Page() {
  const [activeFileId, setActiveFileId] = useState('bio');

  const activeFile = aboutData
    .flatMap((section) => section.children)
    .find((file) => file.id === activeFileId);

  return (
    <Wrapper title={'_about'}>
      <Sidebar
        activeFileId={activeFileId}
        onFileSelect={setActiveFileId}
      />
      <BioContent content={activeFile?.content as string} />
    </Wrapper>
  );
}
export default Page;
