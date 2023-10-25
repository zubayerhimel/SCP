'use client';

import { useState } from 'react';
import Image from 'next/image';

import Demo from '@/assets/images/demo_img1.jpeg';
import AddImageButton from '@/components/ui/add-image-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import PageWrapper from '@/components/ui/page-wrapper';
import ProjectDetailsInfo from '@/app/dashboard/projects/_component/project-details-info';
import { cn } from '@/lib/utils';

type ImageProps = {
  id: number;
  source: any;
  checked: boolean;
};

const IMAGES = [
  {
    id: 1,
    source: Demo,
    checked: false,
  },
  {
    id: 2,
    source: Demo,
    checked: false,
  },
  {
    id: 3,
    source: Demo,
    checked: false,
  },
  {
    id: 4,
    source: Demo,
    checked: false,
  },
];
const ProjectBatch = () => {
  const [batchImages, setBatchImages] = useState(IMAGES);
  const [selectedItems, setSelectedItems] = useState(0);

  const onImageCheck = (value: ImageProps) => {
    const updatedBatchImages = batchImages.map((image) => (image.id === value.id ? { ...image, checked: !image.checked } : image));
    setBatchImages(updatedBatchImages);
    setSelectedItems(updatedBatchImages.filter((el) => el.checked === true).length);
  };

  const onSelectAll = () => {
    const updatedBatchImages = batchImages.map((image) => ({ ...image, checked: true }));
    setBatchImages(updatedBatchImages);
    setSelectedItems(updatedBatchImages.filter((el) => el.checked === true).length);
  };

  const onUnselectAll = () => {
    const updatedBatchImages = batchImages.map((image) => ({ ...image, checked: false }));
    setBatchImages(updatedBatchImages);
    setSelectedItems(updatedBatchImages.filter((el) => el.checked === true).length);
  };

  return (
    <PageWrapper>
      <div className='flex justify-end mb-6 ml-auto'>
        <Button>Create New Sub Batch</Button>
      </div>
      <Card className='shadow-none'>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
        </CardHeader>
        <CardContent>
          <ProjectDetailsInfo />
        </CardContent>
      </Card>

      {/* sub batch information */}
      <div className='mt-12 mb-6'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='text-sm font-semibold'>Sub-Batch 2</span>
          {selectedItems !== 0 && (
            <>
              <span className='mt-1 text-xs'>{selectedItems} items selected</span>
              {IMAGES.length !== selectedItems && (
                <Button className='text-primary hover:text-primary' variant='ghost' onClick={onSelectAll}>
                  Select all
                </Button>
              )}
            </>
          )}

          {IMAGES.length === selectedItems && (
            <Button className='text-primary hover:text-primary' variant='ghost' onClick={onUnselectAll}>
              Unselect all
            </Button>
          )}
        </div>
        <div className='flex flex-wrap items-center justify-start gap-8'>
          <AddImageButton />
          {batchImages.map((image) => (
            <div className='relative rounded-lg bg-primary/10' key={image.id} onClick={() => onImageCheck(image)}>
              <Checkbox id={`card-${image.id}`} className='absolute w-5 h-5 mt-4 ml-4' checked={image.checked} />
              <Label
                id={`card-${image.id}`}
                className={cn('flex items-center border-4 border-transparent justify-between rounded-lg hover:text-accent-foreground', image.checked && 'border-4 border-primary')}>
                <Image className='w-[298px] h-[198px] object-contain rounded-lg' alt='product' src={image.source} />
              </Label>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProjectBatch;
