'use client';

import React, { FC } from 'react';
import { useDropzone, DropzoneRootProps, DropzoneInputProps, FileRejection } from 'react-dropzone';
import BlockContent from './BlockContent';

interface UploadMultiFileProps {
  error?: boolean;
  showPreview?: boolean;
  files: File[];
  onRemove: (file: File) => void;
  onRemoveAll: () => void;
  helperText?: React.ReactNode;
}

const UploadMultiFile: FC<UploadMultiFileProps> = ({ error, showPreview = false, files, onRemove, onRemoveAll, helperText, ...other }) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    ...other,
  });
  return (
    <div className='w-full'>
      <div {...(getRootProps() as DropzoneRootProps)} className='px-1 py-2 bg-gray-100 border-2 border-gray-200 border-dashed rounded-lg outline-none hover:cursor-pointer'>
        <input {...(getInputProps() as DropzoneInputProps)} />
        <BlockContent />
      </div>

      {helperText && helperText}
    </div>
  );
};

export default UploadMultiFile;
