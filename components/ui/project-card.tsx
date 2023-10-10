import { Avatar, AvatarFallback } from './avatar';
import { Badge } from './badge';
import { Button } from './button';
import { Card } from './card';

const ProjectCard = () => {
  return (
    <Card className='p-6 ring-1 ring-purple-200'>
      <Badge className='mb-2' variant='secondary' type='warning'>
        Pending
      </Badge>
      <div className='flex justify-between'>
        <div className='flex flex-col justify-between'>
          <div className='flex pr-6 space-x-3'>
            <Avatar className='w-10 h-10'>
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div>
              <h1 className='text-sm text-purple-600'>Layla Amora</h1>
              <span className='text-[10px]'>Web Developer</span>
            </div>
          </div>
          <div>
            <Button variant='outline'>Contact</Button>
          </div>
        </div>

        <div className='pl-6 border-l-2 border-l-gray-300'>
          <h1 className='text-base font-semibold'>Project name</h1>
          <span className='text-base'>description</span>
          <div className='flex mt-2 space-x-8'>
            <div className='flex flex-col items-center justify-center text-base'>
              <span>3</span>
              <span>batch</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <span>3</span>
              <span>batch</span>
            </div>
          </div>
          <Button variant='secondary' className='mt-2 font-semibold bg-primary/10 text-primary hover:bg-primary/10'>
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
