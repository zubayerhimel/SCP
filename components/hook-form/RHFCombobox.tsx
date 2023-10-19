import { cn } from '@/lib/utils';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '../ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput } from '../ui/command';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

type RHFInputFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  children: ReactNode;
  required?: boolean;
};

const RHFCombobox = ({ name, label, children, required }: RHFInputFieldProps) => {
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
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button variant='outline' role='combobox' className={cn('w-full justify-between', !field.value && 'text-muted-foreground')}>
                  <CaretSortIcon className='w-4 h-4 ml-2 opacity-50 shrink-0' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-full p-0'>
              <Command>
                <CommandInput placeholder='Search framework...' className='h-9' />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>{children}</CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFCombobox;
