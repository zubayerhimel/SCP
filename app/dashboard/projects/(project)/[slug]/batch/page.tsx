'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectDetailsInfo from '@/app/dashboard/projects/_component/project-details-info';
import PageWrapper from '@/components/ui/page-wrapper';
import CheckImage from '../../../_component/check-image';
// import UploadButton from '../../../_component/upload-button';

import Demo from '@/assets/images/demo_img1.jpeg';

export type ImageProps = {
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
  const [batchImages, setBatchImages] = useState<ImageProps[]>(IMAGES);
  const [selectedItems, setSelectedItems] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);

  const updateSelectedItems = (images: ImageProps[]) => images.filter((el) => el.checked === true).length;

  const onImageCheck = (value: ImageProps) => {
    const updatedBatchImages = batchImages.map((image) => (image.id === value.id ? { ...image, checked: !image.checked } : image));
    setBatchImages(updatedBatchImages);
    setSelectedItems(updateSelectedItems(updatedBatchImages));
  };

  const onSelectAll = () => {
    const updatedBatchImages = batchImages.map((image) => ({ ...image, checked: true }));
    setBatchImages(updatedBatchImages);
    setSelectedItems(updateSelectedItems(updatedBatchImages));
  };

  const onUnselectAll = () => {
    const updatedBatchImages = batchImages.map((image) => ({ ...image, checked: false }));
    setBatchImages(updatedBatchImages);
    setSelectedItems(updateSelectedItems(updatedBatchImages));
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
          {/* <UploadButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
          {batchImages.map((image) => (
            <CheckImage key={image.id} image={image} onImageCheck={onImageCheck} />
          ))}
        </div>
      </div>

      {/* add image modal */}
    </PageWrapper>
  );
};

export default ProjectBatch;
