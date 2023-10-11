import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Pencil, Trash } from 'lucide-react';
import Image from 'next/image';

import Demo from '@/app/assets/images/demo.png';
import { Button } from './button';
import Link from 'next/link';
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

          <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
            <Image alt='product' src={Demo} />
            <Image alt='product' src={Demo} />
            <Image alt='product' src={Demo} />
            <Image alt='product' src={Demo} />
            <Image alt='product' src={Demo} />
            <Image alt='product' src={Demo} />
            <Image alt='product' src={Demo} />
            <Image alt='product' src={Demo} />
            <Image alt='product' src={Demo} />
            <Image alt='product' src={Demo} />
            <Image alt='product' src={Demo} />
            <Image alt='product' src={Demo} />
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