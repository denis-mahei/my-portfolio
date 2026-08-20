'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { availableTags } from '@/components/projects/data';
import { RiArrowRightSFill, RiCheckLine } from '@remixicon/react';
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useSelectedTags } from '@/lib/hooks/useSelectedTags';

function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const selectedTags = useSelectedTags();

  const handleToggle = () => setIsOpen(!isOpen);

  const handleTagChange = (tagId: string) => {
    let newTags;
    if (selectedTags.includes(tagId)) {
      newTags = selectedTags.filter((t) => t !== tagId);
    } else {
      newTags = [...selectedTags, tagId];
    }
    const params = new URLSearchParams(searchParams.toString());
    if (newTags.length) {
      params.set('tags', newTags.join(','));
    } else {
      params.delete('tags');
    }
    const queryString = params.toString();
    const newUrl = queryString
      ? `${pathname}?${queryString}`
      : pathname;
    router.replace(newUrl, { scroll: false });
  };

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
        {availableTags.map((tag) => {
          const Icon = tag.icon;
          return (
            <div key={tag.id}>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="flex items-center gap-6 overflow-hidden py-3 px-4"
                  >
                    <label
                      key={tag.id}
                      className="flex gap-2 items-center relative"
                    >
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={selectedTags.includes(tag.id)}
                        onChange={() => handleTagChange(tag.id)}
                      />
                      <span className="ml-0.5 ring ring-stroke rounded-xs w-5 h-5 peer-checked:bg-slate-500 transition-colors"></span>
                      <RiCheckLine
                        size={14}
                        className="opacity-0 peer-checked:opacity-100 transition-opacity absolute left-[5%] text-slate-50"
                      />
                      <Icon size={24} className="text-slate-500" />
                      <span className="text-gray-50">
                        {tag.label}
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
