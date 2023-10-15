import { useFormContext } from 'react-hook-form';
import { ReactNode } from 'react';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { RadioGroup } from '../ui/radio-group';

type RHFInputFieldProps = {
  name: string;
  label?: string;
  children: ReactNode;
  required?: boolean;
};

const RHFRadiogroup = ({ name, label, children, required }: RHFInputFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>
            {label}
            {required && <span className='text-red-500'>*</span>}
          </FormLabel>
          <FormControl>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className='flex flex-col space-y-1'>
              {children}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFRadiogroup;
