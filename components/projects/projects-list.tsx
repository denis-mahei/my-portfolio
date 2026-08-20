'use client';

import { useSelectedTags } from '@/lib/hooks/useSelectedTags';
import { filteredProjects } from '@/lib/utils/filtered-projects';
import { projects } from '@/components/projects/data';

function ProjectsList() {
  const selectedTags = useSelectedTags();
  const projectsList = filteredProjects(projects, selectedTags);
  console.log(projectsList);
  return (
    <div className="p-6 lg:p-16">
      <ul className="grid grid-cols-3 gap-2.5">
        {projectsList.length > 0 &&
          projectsList.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        {projectsList.length === 0 && <p>No projects found.</p>}
      </ul>
    </div>
  );
}
export default ProjectsList;
