import { PlusCircle } from 'lucide-react';

const AddImageButton = () => {
  return (
    <div className='w-[302px] h-[202px] flex-shrink-0 rounded-lg bg-primary/10 cursor-pointer flex flex-col justify-center items-center'>
      <PlusCircle className='text-primary h-12 w-12' />
      <span className='text-base text-primary font-semibold'>Add New Image</span>
    </div>
  );
};

export default AddImageButton;
