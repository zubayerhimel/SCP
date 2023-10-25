'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/ui/page-wrapper';
import { Separator } from '@/components/ui/separator';
import BatchCreateForm from '../../../_component/batch-create-form';

const NewBatch = () => {
  const router = useRouter();

  return (
    <PageWrapper>
      <div className='container max-w-2xl'>
        <Button variant='ghost' className='gap-2' onClick={() => router.back()}>
          <ChevronLeft /> Back
        </Button>
        <div className='flex flex-col items-center justify-center max-w-xs mx-auto mb-10 space-y-2'>
          <span className='font-semibold'>Batch Information</span>
          <Separator />
        </div>
        <BatchCreateForm />
      </div>
    </PageWrapper>
  );
};

export default NewBatch;
