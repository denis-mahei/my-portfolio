import React from 'react';
import { cn } from '@/lib/utils';

type WrapperProps = {
  layout?: 2 | 3;
  title: string;
  children: React.ReactNode;
};

function Wrapper({ title, layout = 2, children }: WrapperProps) {
  return (
    <div
      className={cn(
        'flex flex-col flex-1 lg:grid',
        layout === 3
          ? 'lg:grid-cols-[283px_1fr_1fr]'
          : 'lg:grid-cols-[283px_1fr]',
      )}
    >
      <h2 className="p-6 text-heading-foreground text-sm lg:hidden">
        {title}
      </h2>
      {children}
    </div>
  );
}
export default Wrapper;
