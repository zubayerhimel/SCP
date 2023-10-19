'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';

import RHFInputField from '@/components/hook-form/RHFInputField';
import RHFPasswordField from '@/components/hook-form/RHFPasswordField';
import RHFSelectField from '@/components/hook-form/RHFSelectField';
import RHFTextAreaField from '@/components/hook-form/RHFTextAreaField';
import { SelectItem } from '@/components/ui/select';
import { Country, Timezone } from '@/utils/Constant';
import { ClientCreateSchema } from '@/utils/SchemaValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import FormProvider from '../../../../components/hook-form/FormProvider';
import { Button } from '../../../../components/ui/button';
import RHFCombobox from '@/components/hook-form/RHFCombobox';
import { CommandItem } from '@/components/ui/command';
import { CheckIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

const ClientCreateForm = () => {
  type TClientCreateSchema = z.infer<typeof ClientCreateSchema>;

  const methods = useForm<TClientCreateSchema>({
    resolver: zodResolver(ClientCreateSchema),
    defaultValues: {},
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: TClientCreateSchema) => {
    console.log('form submitted', data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className='grid items-baseline grid-cols-1 mb-14 md:grid-cols-4'>
        <h2 className='sticky top-0 mb-4 text-sm font-semibold md:mb-0'>Basic Information</h2>
        <div className='space-y-6 md:col-span-3'>
          <RHFInputField name='name' label='Name' />
          <RHFInputField name='client_code' label='Client Code' />
          <RHFInputField name='username' label='Username' />
          <RHFPasswordField name='password' label='Password' />
          <RHFSelectField name='timezone' label='Timezone'>
            {Timezone.map((zone) => (
              <SelectItem value={zone.text} key={zone.text}>
                {zone.text}
              </SelectItem>
            ))}
          </RHFSelectField>
          <RHFSelectField name='country' label='Country'>
            {Country.map((country) => (
              <SelectItem value={country.code} key={country.code}>
                {country.name}
              </SelectItem>
            ))}
          </RHFSelectField>
          <RHFTextAreaField name='description' label='Description' />
        </div>
      </div>
      <div className='grid items-baseline grid-cols-1 mb-14 md:grid-cols-4'>
        <h2 className='sticky top-0 mb-4 text-sm font-semibold md:mb-0'>Client Information</h2>
        <div className='space-y-6 md:col-span-3'>
          <RHFInputField name='contact_person' label='Contact Person' />
          <RHFInputField name='contact_number' label='Contact Number' />
          <RHFInputField name='website' label='Website' />
          <RHFInputField name='client_type' label='Client Type' />
          <RHFInputField name='marketer_information' label='Marketers Information' />
          <RHFInputField name='working_days' label='Working Days' />
        </div>
      </div>
      <div className='grid items-baseline grid-cols-1 mb-14 md:grid-cols-4'>
        <h2 className='sticky top-0 mb-4 text-sm font-semibold md:mb-0'>Billing Information</h2>
        <div className='space-y-6 md:col-span-3'>
          <RHFInputField name='billing_email' label='Billing Email' />
          <RHFInputField name='vat_no' label='VAT No.' />
          <RHFInputField name='payment_cycle' label='Payment Cycle' />
          <RHFInputField name='currency' label='Currency' />
          <RHFInputField name='bank_name' label='Bank Name' />
          <RHFInputField name='account_no' label='Account No.' />
          <RHFInputField name='routing' label='Routing' />
          <RHFInputField name='account_type' label='Account Type' />
          <RHFInputField name='beneficiary' label='Beneficiary' />
          <RHFTextAreaField name='beneficiary_address' label='Address' />
        </div>
      </div>
      <div className='flex justify-end'>
        <Button type='submit'>Create New Client</Button>
      </div>
    </FormProvider>
  );
};

export default ClientCreateForm;
