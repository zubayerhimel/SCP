import { FileRejection } from 'react-dropzone';

const RejectionFiles = ({ fileRejections }: { fileRejections: FileRejection[] }) => {
  return (
    <div className='px-2 py-1 mt-3 bg-red-400 border-red-400 outline'>
      {fileRejections.map(({ file, errors }) => {
        const { name, size } = file;
        return (
          <div className='my-2'>
            <h1 className='text-sm'>
              {name} - {size}
            </h1>

            {errors.map((error) => (
              <span key={error.code} className='text-xs uppercase'>
                {error.message}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default RejectionFiles;
