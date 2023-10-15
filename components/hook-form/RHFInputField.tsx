import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

type RHFInputFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
};

const RHFInputField = ({ name, label, placeholder, required, ...others }: RHFInputFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && <span className='text-red-500'>*</span>}
          </FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} {...others} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFInputField;
