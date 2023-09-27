'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

interface TopBarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function TopBarNav({ className, items, ...props }: TopBarNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn('flex space-x-2 p-1.5 border-2 rounded-md md:block', className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(buttonVariants({ variant: 'ghost' }), pathname === item.href ? 'bg-slate-100 hover:bg-muted' : 'hover:bg-transparent hover:underline', 'justify-start')}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
