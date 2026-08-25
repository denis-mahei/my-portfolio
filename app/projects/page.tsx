import ProjectsList from '@/components/projects/projects-list';
import Sidebar from '@/components/projects/sidebar';
import Wrapper from '@/components/layout/wrapper';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/ui/loader';

async function Page() {
  return (
    <Wrapper title={'_projects'}>
      <Suspense fallback={<LoadingSpinner />}>
        <Sidebar />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ProjectsList />
      </Suspense>
    </Wrapper>
  );
}
export default Page;
