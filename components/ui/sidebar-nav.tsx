'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

const SidebarNav = ({ items }: SidebarNavProps) => {
  const pathname = usePathname();

  return (
    <div className='flex flex-col mt-2'>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(buttonVariants({ variant: 'nav' }), pathname === item.href ? 'bg-muted hover:bg-muted font-semibold' : 'hover:bg-transparent hover:underline', 'justify-start')}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default SidebarNav;
