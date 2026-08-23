'use client';

import { useSelectedTags } from '@/lib/hooks/useSelectedTags';
import { filteredProjects } from '@/lib/utils/filtered-projects';
import { projects } from '@/components/projects/data';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';

function ProjectsList() {
  const selectedTags = useSelectedTags();
  const projectsList = filteredProjects(projects, selectedTags);

  return (
    <div className="p-6 lg:p-16">
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-2.5">
        <AnimatePresence>
          {projectsList.map((project, idx) => (
            <motion.li
              layout
              initial={{ transform: 'translateY(-100px)' }}
              animate={{ transform: 'translateY(0px)' }}
              transition={{ type: 'spring', delay: idx * 0.1 }}
              key={project.id}
              className="perspective-distant"
            >
              <h3 className="font-bold text-indigo-500 mb-4">
                Project {idx + 1}{' '}
                <span className="font-normal text-foreground">
                  &#x2f;&#x2f; {project.displayName}
                </span>
              </h3>
              <article className="border border-slate-800 rounded-2xl flex flex-col overflow-hidden transition-transform duration-300 ease-out hover:rotate-y-8 hover:rotate-x-6 hover:shadow-2xl hover:scale-105">
                <div className="relative h-36">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    fill
                  />
                  <project.icon
                    className="absolute p-1 bg-indigo-300 rounded-md right-2 top-2"
                    size={28}
                    color="slate-900"
                  />
                </div>
                <div className="bg-slate-950 p-4 flex flex-col gap-5 border-t border-t-stroke">
                  <p className="line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={project.codeUrl.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buttons"
                    >
                      view-code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buttons"
                    >
                      view-demo
                    </a>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      {projectsList.length === 0 && <p>No projects found.</p>}
    </div>
  );
}
export default ProjectsList;
