import Image from 'next/image';
import Link from 'next/link';

import Demo from '@/assets/images/demo_img1.jpeg';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ProjectDetailsInfo from './project-details-info';
import PriorityCircle from './priority-circle';

const BatchAccordion = () => {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>
          <div className='flex items-center justify-center gap-3'>
            <PriorityCircle type='medium' />
            <span className='text-base'>Sep0423BrandnameBatchnameProjectnameclientcode</span>
            <Badge variant='secondary' type='primary'>
              Ongoing
            </Badge>
          </div>
        </AccordionTrigger>
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
