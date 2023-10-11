import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BatchAccordion = () => {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col'>
              <div className='flex gap-3'>
                <span className='text-xs text-gray-500'>Sub-batch :</span>
                <span className='text-xs'>06</span>
              </div>
              <div className='flex gap-3'>
                <span className='text-xs text-gray-500'>Total File :</span>
                <span className='text-xs'>180</span>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default BatchAccordion;
