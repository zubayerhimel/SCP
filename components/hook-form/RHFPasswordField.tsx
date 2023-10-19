import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

type RHFInputFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
};

const RHFPasswordField = ({ name, label, placeholder, required, ...others }: RHFInputFieldProps) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

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
            <div className='relative w-full'>
              <Input type={showPassword ? 'text' : 'password'} placeholder={placeholder} {...field} {...others} />
              {showPassword ? (
                <Eye className='absolute bottom-0 w-4 h-4 top-2.5 right-3 cursor-pointer' onClick={() => setShowPassword((prev) => !prev)} />
              ) : (
                <EyeOff className='absolute bottom-0 w-4 h-4 top-2.5 right-3 cursor-pointer' onClick={() => setShowPassword((prev) => !prev)} />
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFPasswordField;
