import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import type { Metadata } from 'next';
import { Athiti } from 'next/font/google';

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { TopBarNav } from '@/components/ui/topbar-nav';
import { UserNav } from '@/components/ui/user-nav';
import './globals.css';
import SidebarNav from '@/components/ui/sidebar-nav';

const inter = Athiti({ weight: ['500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const sidebarNavItems = [
  {
    title: 'User',
    href: '/users',
  },
  {
    title: 'Role',
    href: '/roles',
  },
  {
    title: 'Organization',
    href: '/organization',
  },
  {
    title: 'Invoice',
    href: '/invoices',
  },
  {
    title: 'Project',
    href: '/projects',
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex items-center justify-between max-w-screen-xl px-2 mx-auto my-3'>
          <div>
            <TopBarNav items={sidebarNavItems} className='hidden md:flex' />
            <Sheet>
              <SheetTrigger>
                <HamburgerMenuIcon className='flex md:hidden' />
              </SheetTrigger>
              <SheetContent className='w-[300px]' side='left'>
                <SidebarNav items={sidebarNavItems} />
              </SheetContent>
            </Sheet>
          </div>
          <h1 className='text-2xl text-center md:-mt-4'>Skill</h1>

          <UserNav />
        </div>
        {children}
      </body>
    </html>
  );
}
