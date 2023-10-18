import BatchAccordion from '@/app/dashboard/projects/_component/batch-accordion';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/ui/page-wrapper';

const ProjectDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <PageWrapper>
      <div className='flex justify-end mb-6 ml-auto'>
        <Button>Create New Batch</Button>
      </div>
      <div className='grid grid-cols-1'>
        <BatchAccordion />
      </div>
    </PageWrapper>
  );
};

export default ProjectDetails;
