'use client';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import PageWrapper from '@/components/ui/page-wrapper';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import RoleCreateFrom from '../_component/role-create-form';
import UploadAvatar from '@/components/upload/UploadAvatar';

const CreateRole = () => {
  const onUpload = (value: File[]) => {
    console.log('hello', value);
  };
  return (
    <PageWrapper>
      <div className='container max-w-2xl'>
        <Link href='/dashboard/roles' className={cn(buttonVariants({ variant: 'ghost' }), 'gap-2')}>
          <ChevronLeft /> Back
        </Link>
        <div className='flex flex-col items-center justify-center max-w-xs mx-auto mb-10 space-y-2'>
          <span className='font-semibold'>Role Information</span>
          <Separator />
        </div>
        <RoleCreateFrom />
      </div>

      <UploadAvatar onDrop={onUpload} />
    </PageWrapper>
  );
};

export default CreateRole;
