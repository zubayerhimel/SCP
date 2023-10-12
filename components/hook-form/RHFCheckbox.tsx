import { useFormContext } from 'react-hook-form';

import { Checkbox } from '../ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

type RHFInputFieldProps = {
  name: string;
  label?: string;
};

const RHFCheckbox = ({ name, label }: RHFInputFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFCheckbox;
