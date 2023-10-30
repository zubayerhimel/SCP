import { Pencil, Trash } from 'lucide-react';

import { Avatar, AvatarFallback } from '../../../../components/ui/avatar';
import { Card } from '../../../../components/ui/card';
import Link from 'next/link';

const UserCard = ({ title }: { title: string }) => {
  return (
    <Card className='flex gap-4 p-4 ring-1 ring-purple-200'>
      <div className='flex-none'>
        <Avatar className='w-16 h-16'>
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </div>

      <div className='grow'>
        <div className='flex flex-col'>
          <h1 className='text-base font-medium'>{title}</h1>
          <span className='text-xs text-gray-500'>ayen.uddin@gmail.com</span>
          <span className='text-xs text-gray-500'>Admin</span>
          <span className='text-xs text-gray-500'>0193878737377</span>
        </div>
      </div>
      <div className='flex-none'>
        <div className='flex gap-2'>
          <Link href='/dashboard/users/lkdf'>
            <Pencil className='w-4 h-4' role='button' />
          </Link>
          <Trash className='w-4 h-4' role='button' />
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
