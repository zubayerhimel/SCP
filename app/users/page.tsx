import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/ui/page-wrapper';
import ProjectCard from '@/components/ui/project-card';

const Users = () => {
  return (
    <PageWrapper>
      <div className='flex flex-wrap items-center justify-start gap-6'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </PageWrapper>
  );
};

export default Users;
