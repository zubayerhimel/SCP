import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva('inline-flex items-center rounded-full border px-5 py-0.3 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', {
  variants: {
    variant: {
      default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
      secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
      outline: 'text-foreground',
    },
    type: {
      primary: 'text-primary bg-primary/10',
      warning: 'text-orange-600 bg-orange-200',
      success: 'text-green-600 bg-green-100',
      error: 'text-rose-600 bg-rose-100',
      info: 'text-cyan-600 bg-cyan-100',
    },
  },
  defaultVariants: {
    variant: 'default',
    type: 'primary',
  },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, type, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, type }), className)} {...props} />;
}

export { Badge, badgeVariants };
