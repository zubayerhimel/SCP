// import { Loader } from 'lucide-react';

// const LoadingIndicator = () => {
//   return (
//     <div className='flex flex-col items-center justify-center h-full'>
//       <Loader className='w-5 h-5 animate-spin' />
//       <h1>Loading content. Please wait...</h1>
//     </div>
//   );
// };

// export default LoadingIndicator;

import { Loader } from 'lucide-react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const SpinnerVariants = cva('text-muted-background animate-spin', {
  variants: {
    size: {
      default: 'h-4 w-4',
      sm: 'h-2 w-2',
      lg: 'h-6 w-6',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface SpinnerProps extends VariantProps<typeof SpinnerVariants> {
  loadingText?: string;
}

export const Spinner = ({ size, loadingText }: SpinnerProps) => (
  <>
    <Loader className={cn(SpinnerVariants({ size }))} />
    {loadingText && <h2>{loadingText}</h2>}
  </>
);
