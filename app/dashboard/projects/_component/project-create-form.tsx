'use client';

import RHFInputField from '@/components/hook-form/RHFInputField';
import { ProjectCreateSchema } from '@/utils/SchemaValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import FormProvider from '../../../../components/hook-form/FormProvider';
import RHFDatePicker from '../../../../components/hook-form/RHFDatePicker';
import RHFTextAreaField from '../../../../components/hook-form/RHFTextAreaField';
import { Button } from '../../../../components/ui/button';

const ProjectCreateForm = () => {
  type TProjectCreateSchema = z.infer<typeof ProjectCreateSchema>;

  const methods = useForm<TProjectCreateSchema>({
    resolver: zodResolver(ProjectCreateSchema),
    defaultValues: {
      avatarUrl: '',
      email: '',
      description: '',
      start_date: null,
      delivery_date: null,
      name: '',
      client_code: '',
      total_file: '',
      project_cost: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: TProjectCreateSchema) => {
    console.log('form submitted', data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-6'>
        <RHFInputField name='email' label='Email' required />
        <RHFTextAreaField name='description' label='Project Description' />
        <RHFDatePicker name='start_date' label='Start Date' />
        <RHFDatePicker name='delivery_date' label='Delivery Date' />
        <RHFInputField name='name' label='Client Name' />
        <RHFInputField name='client_code' label='Client Code' />
        <RHFInputField name='total_file' label='Total File' />
        <RHFInputField name='project_cost' label='Cost of the Project' />
      </div>
      <Button className='mt-6' type='submit'>
        Create New Project
      </Button>
    </FormProvider>
  );
};

export default ProjectCreateForm;
