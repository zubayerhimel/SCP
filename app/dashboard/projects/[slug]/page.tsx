import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/ui/page-wrapper';

const ProjectDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <PageWrapper>
      <div className='flex justify-end mb-6 ml-auto'>
        <Button>Create New Project</Button>
      </div>
      <div className='grid grid-cols-1'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </PageWrapper>
  );
};

export default ProjectDetails;
