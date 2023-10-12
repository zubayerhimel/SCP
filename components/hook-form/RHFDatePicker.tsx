import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

type RHFInputFieldProps = {
  name: string;
  label?: string;
};

const RHFDatePicker = ({ name, label }: RHFInputFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button variant={'outline'} className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                  {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                  <CalendarDays className='w-5 h-5 ml-auto' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar mode='single' selected={field.value} onSelect={field.onChange} initialFocus />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFDatePicker;
