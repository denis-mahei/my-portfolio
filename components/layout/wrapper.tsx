import React from 'react';

type WrapperProps = {
  title: string;
  children: React.ReactNode;
};

function Wrapper({ title, children }: WrapperProps) {
  return (
    <div className="flex flex-col flex-1 lg:grid lg:grid-cols-[283px_1fr]">
      <h2 className="p-6 text-heading-foreground text-sm lg:hidden">
        {title}
      </h2>
      {children}
    </div>
  );
}
export default Wrapper;
