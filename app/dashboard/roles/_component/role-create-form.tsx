'use client';

import FormProvider from '@/components/hook-form/FormProvider';
import RHFInputField from '@/components/hook-form/RHFInputField';
import RHFSelectField from '@/components/hook-form/RHFSelectField';
import RHFTextAreaField from '@/components/hook-form/RHFTextAreaField';
import { Button } from '@/components/ui/button';
import { SelectItem } from '@/components/ui/select';
import { Role_Types } from '@/utils/Constant';
import { RoleCreateSchema } from '@/utils/SchemaValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type TRoleCreateSchema = z.infer<typeof RoleCreateSchema>;

const RoleCreateFrom = () => {
  const methods = useForm<TRoleCreateSchema>({
    resolver: zodResolver(RoleCreateSchema),
    defaultValues: {
      role_name: '',
      description: '',
      resource_list: '',
      role_type: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: TRoleCreateSchema) => {
    console.log('form submitted', data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-6'>
        <RHFInputField name='role_name' label='Role Name' required />
        <RHFTextAreaField name='description' label='Description' />
        <RHFSelectField name='role_type' label='Role Type'>
          {Role_Types.map((roleType) => (
            <SelectItem value={roleType.id} key={roleType.id}>
              {roleType.value}
            </SelectItem>
          ))}
        </RHFSelectField>
      </div>
      <Button className='mt-6' type='submit'>
        Create New Role
      </Button>
    </FormProvider>
  );
};

export default RoleCreateFrom;
