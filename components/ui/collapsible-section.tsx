'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { RiArrowRightSFill } from '@remixicon/react';

type CollapsibleSectionProps = {
  label: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

function CollapsibleSection({
  label,
  defaultOpen = false,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="lg:border-b lg:border-stroke lg:last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center gap-2 text-heading-foreground bg-slate-700 lg:bg-transparent lg:border-b lg:border-stroke border-stroke border-t first:border-t-0"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <RiArrowRightSFill size={16} />
        </motion.div>
        {label}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="pl-6 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CollapsibleSection;
