import React from 'react';
import { Card, CardContent } from './card';
import { Avatar, AvatarFallback } from './avatar';
import { Button } from './button';

const ProjectCard = () => {
  return (
    <Card className='p-6 border-purple-200'>
      <div className='flex justify-between'>
        <div className='flex flex-col justify-between'>
          <div className='flex pr-6 space-x-3'>
            <Avatar className='w-12 h-12'>
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div>
              <h1 className='text-2xl text-purple-600'>Layla Amora</h1>
              <span>Web Developer</span>
            </div>
          </div>
          <div>
            <Button className='text-purple-600 border-purple-600' variant='outline'>
              Contact
            </Button>
          </div>
        </div>

        <div className='pl-6 border-l-2 border-l-gray-300'>
          <h1 className='text-2xl font-semibold'>Project name</h1>
          <span>description</span>
          <div className='flex mt-2 space-x-8'>
            <div className='flex flex-col items-center justify-center'>
              <h1>3</h1>
              <h1>batch</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1>3</h1>
              <h1>batch</h1>
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