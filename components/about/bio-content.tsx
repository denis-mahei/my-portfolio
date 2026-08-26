import { wrapText } from '@/lib/utils/wrap-text';
import * as React from 'react';
import { formatToJsDoc } from '@/lib/utils/format-to-jsdoc';

type BioContentProps = {
  content: string;
};

function BioContent({ content }: BioContentProps) {
  const lines = wrapText(content, 40);
  const jsDoc = formatToJsDoc(lines);
  return (
    <div className="flex gap-6 font-mono py-3 px-10">
      <div className="flex flex-col gap-1 text-foreground text-right">
        {jsDoc.map((_, idx) => (
          <span key={idx}>{idx + 1}</span>
        ))}
      </div>
      <ul className="flex flex-col gap-1 text-foreground">
        {jsDoc.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
export default BioContent;
