import PageWrapper from '@/components/ui/page-wrapper';
import RoleCard from './_component/role-card';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import UploadMultiFile from '@/components/upload/UploadMultiFile';

const Roles = () => {
  return (
    <PageWrapper>
      <div className='flex justify-end mb-6 ml-auto'>
        <Link href='/dashboard/roles/new-role' className={buttonVariants({ variant: 'default' })}>
          Create New Role
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <RoleCard />
        <RoleCard />
        <RoleCard />
        <RoleCard />
        <RoleCard />
        <RoleCard />
        <RoleCard />
      </div>

      {/* <UploadMultiFile files={[]} error={false} helperText={'lk'} /> */}
    </PageWrapper>
  );
};

export default Roles;
