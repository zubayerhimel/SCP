import { FileImage, X } from 'lucide-react';
import { Button } from '../ui/button';

const getFileData = (file: File | string) => {
  if (typeof file === 'string') {
    return {
      key: file,
    };
  }
  return {
    key: file.name,
    name: file.name,
    size: file.size,
  };
};

interface IMultiFilePreview {
  files: (File | string)[];
  onRemove?: (file: File) => void;
  onRemoveAll?: () => void;
}

const MultiFilePreview = ({ files, onRemove, onRemoveAll }: IMultiFilePreview) => {
  const hasFile = files?.length > 0;
  console.log(files);

  return (
    <>
      <div>
        {files.map((file) => {
          const { key, name, size } = getFileData(file);

          return (
            <div key={key} className='flex items-center justify-between w-full px-4 py-2 border rounded-lg'>
              <div className='flex items-center gap-4'>
                <FileImage className='w-8 h-8 text-green-500' />
                <div className='flex flex-col'>
                  <span className='text-base font-semibold'>{name}</span>
                  <span className='text-sm text-muted-foreground'>{size} KB</span>
                </div>
              </div>
              <X className='w-5 h-5 cursor-pointer' onClick={() => onRemove && onRemove(file as File)} />
            </div>
          );
        })}
      </div>

      {hasFile && (
        <div className='flex items-center justify-end gap-4'>
          <Button onClick={onRemoveAll}>Remove All</Button>
          <Button>Upload Files</Button>
        </div>
      )}
    </>
  );
};

export default MultiFilePreview;
