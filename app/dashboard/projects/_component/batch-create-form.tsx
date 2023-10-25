'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import FormProvider from '@/components/hook-form/FormProvider';
import RHFDatePicker from '@/components/hook-form/RHFDatePicker';
import RHFInputField from '@/components/hook-form/RHFInputField';
import RHFTextAreaField from '@/components/hook-form/RHFTextAreaField';
import RHFSelectField from '@/components/hook-form/RHFSelectField';
import { Button } from '@/components/ui/button';
import { BatchCreateSchema } from '@/utils/SchemaValidation';
import { SelectItem } from '@/components/ui/select';
import { Job_Type, Priority } from '@/utils/Constant';

const BatchCreateForm = () => {
  type TBatchCreateSchema = z.infer<typeof BatchCreateSchema>;

  const methods = useForm<TBatchCreateSchema>({
    resolver: zodResolver(BatchCreateSchema),
    defaultValues: {
      name: '',
      description: '',
      incoming_date: null,
      batch_delivery: null,
      delivery_time: '',
      price_per_image: '',
      total_file: '',
      total_price: '',
      job_type: '',
      lock_time: '',
      priority: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: TBatchCreateSchema) => {
    console.log('form submitted', data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-6'>
        <RHFInputField name='name' label='Name' />
        <RHFTextAreaField name='description' label='Batch Description' />
        <RHFDatePicker name='incoming_date' label='Incoming Date' />
        <RHFDatePicker name='batch_delivery' label='Delivery Date' />
        <RHFInputField type='time' name='delivery_time' label='Delivery Time' />
        <RHFInputField type='time' name='lock_time' label='Lock Time' />
        <RHFInputField name='price_per_image' label='Price Per Image' />
        <RHFInputField name='total_file' label='Total File' />
        <RHFInputField name='total_price' label='Total Price' />
        <RHFSelectField name='job_type' label='Job Type'>
          {Job_Type.map((job) => (
            <SelectItem value={job} key={job}>
              {job}
            </SelectItem>
          ))}
        </RHFSelectField>
        <RHFSelectField name='priority' label='Priority'>
          {Priority.map((priority) => (
            <SelectItem value={priority} key={priority}>
              {priority}
            </SelectItem>
          ))}
        </RHFSelectField>
      </div>
      <Button className='mt-6' type='submit'>
        Create New Batch
      </Button>
    </FormProvider>
  );
};

export default BatchCreateForm;
