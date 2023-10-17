import PageWrapper from '@/components/ui/page-wrapper';
import UserCard from '@/app/dashboard/users/_component/user-card';

const Users = () => {
  return (
    <PageWrapper>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        <UserCard title='Mohammad Ayen Uddin Ahemmed' />
        <UserCard title='Ikhtiar Udding Mohammad Bokhtiar Kholji' />
        <UserCard title='Ayen Udding Mohammad ' />
        <UserCard title='Ayen Udding Mohammad ' />
        <UserCard title='Ayen Udding Mohammad ' />
      </div>
    </PageWrapper>
  );
};

export default Users;
