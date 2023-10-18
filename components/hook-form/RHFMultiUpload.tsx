import { Controller, useFormContext } from 'react-hook-form';
import UploadMultiFile from '../upload/UploadMultiFile';

const RHFMultiUpload = ({ name, ...other }: { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && field.value?.length === 0;

        return <UploadMultiFile files={field.value} error={checkError} helperText={checkError && <p className='px-2 text-destructive'>{error?.message}</p>} {...other} />;
      }}
    />
  );
};

export default RHFMultiUpload;
