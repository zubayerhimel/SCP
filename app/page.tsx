import { isAuthenticated } from '@/utils/Auth';
import { redirect } from 'next/navigation';

const GuestHome = () => {
  const isAuth = isAuthenticated;

  if (isAuth) redirect('/dashboard/users');

  return <div>page</div>;
};

export default GuestHome;
