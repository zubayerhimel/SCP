import PageWrapper from '@/components/ui/page-wrapper';
import RoleCard from './_component/role-card';

const Roles = () => {
  return (
    <PageWrapper>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <RoleCard />
        <RoleCard />
        <RoleCard />
        <RoleCard />
        <RoleCard />
        <RoleCard />
        <RoleCard />
      </div>
    </PageWrapper>
  );
};

export default Roles;
