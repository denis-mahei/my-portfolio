import { useSearchParams } from 'next/navigation';

export const useSelectedTags = () => {
  const searchParams = useSearchParams();
  const tagsString = searchParams.get('tags');
  return tagsString ? tagsString.split(',').filter(Boolean) : [];
};
