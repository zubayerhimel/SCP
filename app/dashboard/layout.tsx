import type { Metadata } from 'next';
import { AlignLeft, BellRing } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SidebarNav from '@/components/ui/sidebar-nav';
import { TopBarNav } from '@/components/ui/topbar-nav';
import { UserNav } from '@/components/ui/user-nav';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const sidebarNavItems = [
  {
    title: 'User',
    href: '/dashboard/users',
    key: 'users',
  },
  {
    title: 'Role',
    href: '/dashboard/roles',
    key: 'roles',
  },
  {
    title: 'Organization',
    href: '/dashboard/organization',
    key: 'organization',
  },
  {
    title: 'Invoice',
    href: '/dashboard/invoices',
    key: 'invoices',
  },
  {
    title: 'Project',
    href: '/dashboard/projects',
    key: 'projects',
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex items-center justify-between mx-6 mt-6 mb-10 max-w-screen'>
        <div className='flex item-center'>
          <TopBarNav items={sidebarNavItems} className='hidden md:block' />
          <Sheet>
            <SheetTrigger asChild>
              <AlignLeft className='block md:hidden' />
            </SheetTrigger>
            <SheetContent className='w-[300px]' side='left'>
              <SidebarNav items={sidebarNavItems} />
            </SheetContent>
          </Sheet>
        </div>
        <h1 className='text-2xl text-center'>Skill</h1>
        <div className='flex items-center gap-3'>
          <BellRing className='w-5 h-5' />
          <UserNav />
        </div>
      </div>
      {children}
    </>
  );
}
