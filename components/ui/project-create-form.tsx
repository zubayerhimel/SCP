'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import FormProvider from '../hook-form/FormProvider';
import RHFInputField from '../hook-form/RHFInputField';
import { Button } from './button';
import RHFSelectField from '../hook-form/RHFSelectField';
import { SelectItem } from './select';

const ProjectCreateForm = () => {
  const formSchema = z.object({
    email: z.string().min(2, {
      message: 'Email must be at least 2 characters.',
    }),
    country: z.string().refine((value) => value !== '', { message: 'Please select country' }),
  });

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      country: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = () => {
    console.log('form submitted');
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <RHFInputField name='email' label='Email' />
      <RHFSelectField name='country' label='Country'>
        <SelectItem value='Bangladesh'>Bangladesh</SelectItem>
        <SelectItem value='India'>India</SelectItem>
      </RHFSelectField>
      <Button className='mt-6' type='submit'>
        Submit
      </Button>
    </FormProvider>
  );
};

export default ProjectCreateForm;
