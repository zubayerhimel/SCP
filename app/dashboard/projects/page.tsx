import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import PageWrapper from '@/components/ui/page-wrapper';
import ProjectCard from '@/app/dashboard/projects/_component/project-card';

const Projects = () => {
  return (
    <PageWrapper>
      <div className='flex justify-end mb-6 ml-auto'>
        <Link href='/dashboard/projects/new-project' className={buttonVariants({ variant: 'default' })}>
          Create New Project
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
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

export default Projects;
