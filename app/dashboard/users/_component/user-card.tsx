import { Pencil, Trash } from 'lucide-react';

import { Avatar, AvatarFallback } from '../../../../components/ui/avatar';
import { Card } from '../../../../components/ui/card';

const UserCard = ({ title }: { title: string }) => {
  return (
    <Card className='relative p-4 ring-1 ring-purple-200'>
      <div className='grid grid-cols-4 gap-3'>
        <div>
          <Avatar className='w-20 h-20'>
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
        <div className='col-span-3 '>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <h1 className='text-base font-medium'>{title}</h1>
              <span className='text-xs text-gray-500'>ayen.uddin@gmail.com</span>
              <span className='text-xs text-gray-500'>Admin</span>
              <span className='text-xs text-gray-500'>0193878737377</span>
            </div>
            <div className='flex gap-3'>
              <Pencil className='w-4 h-4 text-purple-600' />
              <Trash className='w-4 h-4 text-purple-600' />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='absolute flex gap-3 right-3'>
        <Pencil className='w-4 h-4 text-purple-600' />
        <Trash className='w-4 h-4 text-purple-600' />
      </div>
      <div className='flex gap-5'>
        <Avatar className='w-20 h-20'>
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className='flex flex-col'>
          <h1 className='text-base font-medium'>{title}</h1>
          <span className='text-xs text-gray-500'>ayen.uddin@gmail.com</span>
          <span className='text-xs text-gray-500'>Admin</span>
          <span className='text-xs text-gray-500'>0193878737377</span>
        </div>
      </div> */}
    </Card>
  );
};

export default UserCard;
