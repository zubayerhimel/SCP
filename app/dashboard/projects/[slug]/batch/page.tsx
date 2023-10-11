import Demo from '@/assets/images/demo_img1.jpeg';
import AddImageButton from '@/components/ui/add-image-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import PageWrapper from '@/components/ui/page-wrapper';
import ProjectDetailsInfo from '@/components/ui/project-details-info';
import Image from 'next/image';

const ProjectBatch = () => {
  return (
    <PageWrapper>
      <div className='flex justify-end mb-6 ml-auto'>
        <Button variant='secondary'>Create New Sub Batch</Button>
      </div>
      <Card className='shadow-none'>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
        </CardHeader>
        <CardContent>
          <ProjectDetailsInfo />
        </CardContent>
      </Card>
      <div className='mt-12 mb-6'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='text-sm font-semibold'>Sub-Batch 2</span>
          <span className='mt-1 text-xs'>2 items selected</span>
        </div>
        <div className='flex flex-wrap items-center justify-start gap-8'>
          <AddImageButton />
          <div className='relative rounded-lg bg-primary/10'>
            <Checkbox value='card' id='card' className='absolute w-5 h-5 mt-6 ml-6 peer' />
            <Label
              htmlFor='card'
              className='flex items-center border-4 border-transparent justify-between rounded-lg peer-data-[state=checked]:border-4 [&:has([data-state=checked])]:border-4 hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'>
              <Image className='w-[298px] h-[198px] object-contain rounded-lg' alt='product' src={Demo} />
            </Label>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProjectBatch;
