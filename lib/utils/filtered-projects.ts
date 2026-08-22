import type { Project } from '@/components/projects/data';

export const filteredProjects = (
  projects: Project[],
  selectedTags: string[],
) => {
  if (selectedTags.length === 0) return projects;

  return projects.filter((project) =>
    project.tags.some((tag) => selectedTags.includes(tag)),
  );
};
