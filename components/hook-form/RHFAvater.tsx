import { Controller, useFormContext } from 'react-hook-form';
import UploadAvatar from '../upload/UploadAvatar';

const RHFAvatar = ({ name, ...other }: { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;

        return (
          <div>
            <UploadAvatar error={checkError} {...other} file={field.value} helperText={checkError && <p className='px-2 text-destructive'>{error?.message}</p>} {...other} />
          </div>
        );
      }}
    />
  );
};

export default RHFAvatar;
