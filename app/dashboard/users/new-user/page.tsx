import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import PageWrapper from '@/components/ui/page-wrapper';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import UserCreateForm from '../_component/user-create-form';

const NewUser = () => {
  return (
    <PageWrapper>
      <div className='container max-w-4xl'>
        <Link href='/dashboard/projects' className={cn(buttonVariants({ variant: 'ghost' }), 'gap-2')}>
          <ChevronLeft /> Back
        </Link>
        <div className='flex flex-col items-center justify-center max-w-xs mx-auto mb-10 space-y-2'>
          <span className='font-semibold'>User Basic Information</span>
          <Separator />
        </div>
        <UserCreateForm />
      </div>
    </PageWrapper>
  );
};

export default NewUser;
