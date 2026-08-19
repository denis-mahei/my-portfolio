'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { availableTags } from '@/components/projects/data';
import { RiArrowRightSFill, RiCheckLine } from '@remixicon/react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <aside className="flex flex-col h-full lg:border-r lg:border-stroke">
      <div className="">
        <button
          onClick={handleToggle}
          className="bg-slate-700 w-full px-4 py-3 flex items-center gap-2 text-heading-foreground"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <RiArrowRightSFill size={16} />
          </motion.div>
          _filter
        </button>
        {availableTags.map((tags) => {
          const Icon = tags.icon;
          return (
            <div key={tags.id} className="py-3 px-4">
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="flex items-center gap-6 overflow-hidden"
                  >
                    <label
                      key={tags.id}
                      className="flex gap-2 items-center relative"
                    >
                      <input
                        type="checkbox"
                        className="peer sr-only"
                      />
                      <span className="ml-0.5 ring ring-stroke rounded-xs w-5 h-5 peer-checked:bg-slate-500 transition-colors"></span>
                      <RiCheckLine
                        size={14}
                        className="opacity-0 peer-checked:opacity-100 transition-opacity absolute left-[5%]"
                      />
                      <Icon size={24} className="text-slate-500" />
                      <span className="text-gray-50">
                        {tags.label}
                      </span>
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
export default Sidebar;
