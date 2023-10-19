import { buttonVariants } from '@/components/ui/button';
import PageWrapper from '@/components/ui/page-wrapper';
import Link from 'next/link';
import UserCard from '../users/_component/user-card';

const Organization = () => {
  return (
    <PageWrapper>
      <div className='flex justify-end mb-6 ml-auto'>
        <Link href='/dashboard/organization/new-client' className={buttonVariants({ variant: 'default' })}>
          Create New Client
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <UserCard title='Mohammad Ayen Uddin Ahemmed' />
      </div>
    </PageWrapper>
  );
};

export default Organization;
