import PageWrapper from '@/components/ui/page-wrapper';
import UserCard from '@/app/dashboard/users/_component/user-card';

const Users = () => {
  return (
    <PageWrapper>
      <div className='grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3'>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </PageWrapper>
  );
};

export default Users;
