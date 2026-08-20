import ProjectsList from '@/components/projects/projects-list';
import Sidebar from '@/components/projects/sidebar';

async function Page() {
  return (
    <div className="flex flex-col flex-1 lg:grid lg:grid-cols-[24.7%_1fr]">
      <h2 className="p-6 text-heading-foreground text-sm lg:hidden">
        _projects
      </h2>
      <Sidebar />
      <ProjectsList />
    </div>
  );
}
export default Page;
