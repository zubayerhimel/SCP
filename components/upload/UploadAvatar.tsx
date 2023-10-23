'use client';

import { cn } from '@/lib/utils';
import { Camera } from 'lucide-react';
import Image from 'next/image';
import Dropzone, { DropzoneInputProps, FileRejection } from 'react-dropzone';

const UploadAvatar = ({ onDrop }: { onDrop: (acceptedFiles: File[], fileRejections: FileRejection[]) => void }) => {
  return (
    <Dropzone multiple={false} onDrop={(acceptedFiles, fileRejections) => onDrop(acceptedFiles, fileRejections)}>
      {({ getRootProps, isDragActive, getInputProps, isDragReject, acceptedFiles }) => (
        <div {...getRootProps()} className='w-[144px] h-[144px] m-auto rounded-full p-2 border border-dashed border-gray-200'>
          <div className={cn('relative z-0 flex items-center justify-center w-full h-full overflow-hidden rounded-full outline-none hover:z-10 hover:cursor-pointer', isDragActive && 'opacity-75')}>
            <input {...(getInputProps() as DropzoneInputProps)} />
            {acceptedFiles && acceptedFiles[0] ? <Image fill={true} src={URL.createObjectURL(acceptedFiles[0])} alt='avatar' /> : null}
            <div
              className={cn(
                'absolute flex flex-col w-full h-full items-center justify-center text-muted bg-muted hover:opacity-70',
                // file && 'opacity-0 text-gray-900 hover:opacity-[.72px]',
                isDragReject && 'bg-red-200'
              )}>
              <Camera className='w-6 h-6 mb-1 text-zinc-500' />
              <span className='text-xs text-zinc-500'>Update photo</span>
            </div>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default UploadAvatar;
