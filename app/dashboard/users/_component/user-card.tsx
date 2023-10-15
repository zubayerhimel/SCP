import { Pencil, Trash } from 'lucide-react';

import { Avatar, AvatarFallback } from '../../../../components/ui/avatar';
import { Card } from '../../../../components/ui/card';

const UserCard = () => {
  return (
    <Card className='relative p-6 ring-1 ring-purple-200'>
      <div className='absolute flex gap-3 right-3'>
        <Pencil className='w-4 h-4 text-purple-600' />
        <Trash className='w-4 h-4 text-purple-600' />
      </div>
      <div className='flex gap-5'>
        <Avatar className='w-20 h-20'>
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className='flex flex-col'>
          <h1 className='text-base font-medium'>Mohammd Ayen Uddin Ahemmed</h1>
          <span className='text-xs text-gray-500'>ayen.uddin@gmail.com</span>
          <span className='text-xs text-gray-500'>Admin</span>
          <span className='text-xs text-gray-500'>0193878737377</span>
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
