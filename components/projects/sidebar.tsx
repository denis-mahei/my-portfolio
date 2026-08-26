'use client';

import { availableTags } from '@/components/projects/data';
import { RiCheckLine } from '@remixicon/react';
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useSelectedTags } from '@/lib/hooks/useSelectedTags';
import CollapsibleSection from '@/components/ui/collapsible-section';

function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const selectedTags = useSelectedTags();

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
      <CollapsibleSection label="_filter" defaultOpen>
        {availableTags.map((tag) => {
          const Icon = tag.icon;
          return (
            <label
              key={tag.id}
              className="flex gap-2 py-3 px-4 items-center cursor-pointer group"
            >
              <input
                type="checkbox"
                className="peer sr-only"
                checked={selectedTags.includes(tag.id)}
                onChange={() => handleTagChange(tag.id)}
              />
              <span className="relative w-5 h-5 ring ring-stroke group-hover:ring-zinc-400 rounded-xs peer-checked:bg-slate-500 peer-checked:[&>svg]:opacity-100 transition-colors">
                <RiCheckLine
                  size={14}
                  className="absolute inset-0 m-auto opacity-0 transition-opacity text-slate-50"
                />
              </span>
              <Icon size={24} className="text-slate-500" />
              <span className="text-gray-50">{tag.label}</span>
            </label>
          );
        })}
      </CollapsibleSection>
    </aside>
  );
}
export default Sidebar;
