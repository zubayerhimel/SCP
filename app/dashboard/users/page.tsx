import PageWrapper from '@/components/ui/page-wrapper';
import UserCard from '@/app/dashboard/users/_component/user-card';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const Users = () => {
  return (
    <PageWrapper>
      <div className='flex justify-end mb-6 ml-auto'>
        <Link href='/dashboard/users/new-user' className={buttonVariants({ variant: 'default' })}>
          Create New User
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <UserCard title='Mohammad Ayen Uddin Ahemmed' />
        <UserCard title='Ikhtiar Udding Mohammad Bokhtiar Kholji' />
        <UserCard title='Ayen Udding Mohammad' />
        <UserCard title='Ayen Udding Mohammad' />
        <UserCard title='Ayen Udding Mohammad' />
      </div>
    </PageWrapper>
  );
};

export default Users;
