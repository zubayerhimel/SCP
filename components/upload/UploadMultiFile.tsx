'use client';

import React, { FC } from 'react';
import { useDropzone, DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';
import BlockContent from './BlockContent';
import { cn } from '@/lib/utils';
import RejectionFiles from './RejectionFiles';
import MultiFilePreview from './MultiFilePreview';

interface UploadMultiFileProps {
  error?: boolean;
  showPreview?: boolean;
  files: File[];
  onRemove?: (file: File) => void;
  onRemoveAll?: () => void;
  helperText?: React.ReactNode;
}

const UploadMultiFile: FC<UploadMultiFileProps> = ({ error, showPreview = false, files, onRemove, onRemoveAll, helperText, ...other }) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    ...other,
    accept: {
      'image/*': [],
    },
  });
  return (
    <div className='w-full'>
      <div
        {...(getRootProps() as DropzoneRootProps)}
        className={cn(
          'px-1 py-2 bg-gray-100 border-2 border-gray-200 border-dashed rounded-lg outline-none hover:cursor-pointer hover:bg-gray-50',
          isDragActive && 'opacity-75',
          isDragReject || (error && 'text-destructive border-red-500 bg-red-100')
        )}>
        <input {...(getInputProps() as DropzoneInputProps)} />
        <BlockContent />
      </div>
      {fileRejections.length > 0 && <RejectionFiles fileRejections={fileRejections} />}
      <MultiFilePreview files={files} onRemove={onRemove} onRemoveAll={onRemoveAll} />

      {helperText && helperText}
    </div>
  );
};

export default UploadMultiFile;
