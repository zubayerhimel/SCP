import { Pencil, Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageWrapper from '@/components/ui/page-wrapper';
import ProjectDetailsInfo from '@/components/ui/project-details-info';
import AddImageButton from '@/components/ui/add-image-button';

const ProjectBatch = () => {
  return (
    <PageWrapper>
      <div className='flex justify-end mb-6 ml-auto'>
        <Button variant='secondary'>Create New Sub Batch</Button>
      </div>
      <Card className='shadow-none'>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
        </CardHeader>
        <CardContent>
          <ProjectDetailsInfo />
        </CardContent>
      </Card>
      <AddImageButton />
    </PageWrapper>
  );
};

export default ProjectBatch;
