import { PlusCircle } from 'lucide-react';
import React from 'react';

const AddImageButton = () => {
  return (
    <div>
      <PlusCircle />
      <span className='text-base text-primary'>Add New Image</span>
    </div>
  );
};

export default AddImageButton;
