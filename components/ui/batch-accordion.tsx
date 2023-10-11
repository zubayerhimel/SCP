import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';

import Demo from '@/app/assets/images/demo_img1.jpeg';
import Link from 'next/link';
import { Button } from './button';
import ProjectDetailsInfo from './project-details-info';
import { Separator } from './separator';

const BatchAccordion = () => {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <ProjectDetailsInfo />

          <Separator className='my-4' />

          <div className='flex flex-wrap items-center justify-start gap-8'>
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
            <Image className='w-[302px] h-[202px] object-cover' alt='product' src={Demo} />
          </div>
          <div className='flex justify-center mt-12'>
            <Link href='/dashboard/projects/project-name/batch'>
              <Button size='sm' variant='outline' className='px-12'>
                See More
              </Button>
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default BatchAccordion;
