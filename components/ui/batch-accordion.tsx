import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Pencil, Trash } from 'lucide-react';
import Image from 'next/image';

import Demo from '@/app/assets/images/demo.png';
import { Button } from './button';

const BatchAccordion = () => {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col'>
              <div className='flex gap-3'>
                <span className='text-sm text-gray-500'>Sub-batch :</span>
                <span className='text-sm'>06</span>
              </div>
              <div className='flex gap-3'>
                <span className='text-sm text-gray-500'>Total File :</span>
                <span className='text-sm'>180</span>
              </div>
            </div>
            <div className='flex flex-col lg:border-l lg:pl-3'>
              <div className='flex gap-3'>
                <span className='text-sm text-gray-500'>Incoming Date :</span>
                <span className='text-sm'>19 Sep 20223</span>
              </div>
              <div className='flex gap-3'>
                <span className='text-sm text-gray-500'>Delivery Date & Time :</span>
                <span className='text-sm'>21 Sep 2023 12:30pm</span>
              </div>
            </div>
            <div className='flex flex-col lg:border-l lg:pl-3'>
              <div className='flex gap-3'>
                <span className='text-sm text-gray-500'>Lock Time :</span>
                <span className='text-sm'>19 Sep 20223</span>
              </div>
              <div className='flex gap-3'>
                <span className='text-sm text-gray-500'>Actual Time :</span>
                <span className='text-sm'>21 Sep 2023 12:30pm</span>
              </div>
            </div>
            <div className='flex flex-col lg:border-l lg:pl-3'>
              <div className='flex gap-3'>
                <span className='text-sm text-gray-500'>Job Type :</span>
                <span className='text-sm'>19 Sep 20223</span>
              </div>
              <div className='flex gap-3'>
                <span className='text-sm text-gray-500'>Status :</span>
                <span className='text-sm'>21 Sep 2023 12:30pm</span>
              </div>
            </div>
          </div>
          <div className='flex justify-end gap-2'>
            <Pencil className='w-4 h-4' />
            <Trash className='w-4 h-4' />
          </div>

          <hr className='my-5' />

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
            <Button size='sm' variant='outline' className='px-12'>
              See More
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default BatchAccordion;
