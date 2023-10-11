import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import PageWrapper from '@/components/ui/page-wrapper';
import ProjectCard from '@/components/ui/project-card';

const Projects = () => {
  return (
    <PageWrapper>
      <div className='flex justify-end mb-6 ml-auto'>
        <Link href='/dashboard/projects/new-project' className={buttonVariants({ variant: 'default' })}>
          Create New Project
        </Link>
      </div>
      <div className='flex flex-wrap items-center justify-start gap-8'>
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
