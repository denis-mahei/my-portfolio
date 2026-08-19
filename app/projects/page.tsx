import Sidebar from '@/components/projects/sidebar';

type PageProps = {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  console.log(params);
  return (
    <div className="flex flex-col flex-1 lg:grid lg:grid-cols-[24.7%_1fr]">
      <h2 className="p-6 text-heading-foreground text-sm lg:hidden">
        _projects
      </h2>
      <Sidebar />
    </div>
  );
}
export default Page;
