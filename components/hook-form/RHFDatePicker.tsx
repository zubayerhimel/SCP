import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

type RHFInputFieldProps = {
  name: string;
  label?: string;
  required?: boolean;
};

const RHFDatePicker = ({ name, label, required }: RHFInputFieldProps) => {
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
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                {field.value ? format(field.value, 'PPP') : ''}
                <CalendarDays className='w-4 h-4 ml-auto text-zinc-500' />
              </Button>
            </PopoverTrigger>
            <PopoverContent align='start' className='w-auto p-0 '>
              <Calendar mode='single' captionLayout='dropdown-buttons' selected={field.value} onSelect={field.onChange} initialFocus fromYear={1960} toYear={2030} />
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFDatePicker;
