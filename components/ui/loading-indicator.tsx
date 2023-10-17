import { Loader } from 'lucide-react';

const LoadingIndicator = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-full'>
      <Loader className='w-5 h-5 animate-spin' />
      <h1>Loading content. Please wait...</h1>
    </div>
  );
};

export default LoadingIndicator;
