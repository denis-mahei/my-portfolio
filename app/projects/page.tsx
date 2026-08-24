import ProjectsList from '@/components/projects/projects-list';
import Sidebar from '@/components/projects/sidebar';
import Wrapper from '@/components/layout/wrapper';

async function Page() {
  return (
    <Wrapper title={'_projects'}>
      <Sidebar />
      <ProjectsList />
    </Wrapper>
  );
}
export default Page;
