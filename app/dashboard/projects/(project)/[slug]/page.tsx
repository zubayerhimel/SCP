import BatchAccordion from '@/app/dashboard/projects/_component/batch-accordion';
import { buttonVariants } from '@/components/ui/button';
import PageWrapper from '@/components/ui/page-wrapper';
import Link from 'next/link';

const ProjectDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <PageWrapper>
      <div className='flex justify-end mb-6 ml-auto'>
        <Link href={`/dashboard/projects/${params.slug}/new-batch`} className={buttonVariants({ variant: 'default' })}>
          Create New Batch
        </Link>
      </div>
      <div className='grid grid-cols-1'>
        <BatchAccordion />
      </div>
    </PageWrapper>
  );
};

export default ProjectDetails;
