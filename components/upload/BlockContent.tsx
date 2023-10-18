import { Image } from 'lucide-react';

const BlockContent = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full text-center'>
      <Image className='w-12 h-12 text-muted-foreground' />

      <div className='p-2'>
        <h1 className='text-xl font-semibold'>Drop or Select file</h1>
        <h2 className='text-base text-muted-foreground'>Drop files here or browse through your machine (image only)</h2>
      </div>
    </div>
  );
};

export default BlockContent;
