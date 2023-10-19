import Link from 'next/link';
import { Avatar, AvatarFallback } from '../../../../components/ui/avatar';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import { Card } from '../../../../components/ui/card';
import { PenSquare, Trash } from 'lucide-react';

const ProjectCard = () => {
  return (
    <Card className='p-6 ring-1 ring-purple-200'>
      <div className='flex justify-end gap-2 -mt-2'>
        <PenSquare className='w-4 h-4' />
        <Trash className='w-4 h-4' />
      </div>
      <div className='flex'>
        <div className='flex flex-col justify-between mr-6 border-r-2 border-r-gray-300'>
          <div className='flex pr-3 space-x-3'>
            <Avatar className='w-10 h-10'>
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div>
              <h1 className='text-sm text-purple-600'>Ikhtiar Mohammad</h1>
              <span className='text-[10px]'>Web Developer</span>
            </div>
          </div>
          <div>
            <Button variant='outline'>Contact</Button>
          </div>
        </div>

        <div>
          <h1 className='text-base font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <Badge className='mb-2' variant='secondary' type='info'>
            Pending
          </Badge>

          <div className='flex mt-2 space-x-8'>
            <div className='flex flex-col items-center justify-center'>
              <span>3</span>
              <span>batch</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <span>3</span>
              <span>batch</span>
            </div>
          </div>
          <Link href='/dashboard/projects/project-name'>
            <Button variant='secondary' className='mt-2 font-semibold bg-primary/10 text-primary hover:bg-primary/10'>
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
