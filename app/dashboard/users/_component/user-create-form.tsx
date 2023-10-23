'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import FormProvider from '@/components/hook-form/FormProvider';
import RHFDatePicker from '@/components/hook-form/RHFDatePicker';
import RHFInputField from '@/components/hook-form/RHFInputField';
import { Button } from '@/components/ui/button';
import { UserCreateSchema } from '@/utils/SchemaValidation';
import RHFSelectField from '@/components/hook-form/RHFSelectField';
import { Blood_Group, Gender, Religion } from '@/utils/Constant';
import { SelectItem } from '@/components/ui/select';
import UploadAvatar from '@/components/upload/UploadAvatar';

const UserCreateForm = () => {
  type TUserCreateSchema = z.infer<typeof UserCreateSchema>;

  const methods = useForm<TUserCreateSchema>({
    resolver: zodResolver(UserCreateSchema),
    defaultValues: {
      name: '',
      personal_number: '',
      official_number: '',
      email: '',
      present_address: '',
      permanent_address: '',
      dob: null,
      gender: '',
      blood_group: '',
      religion: '',
    },
  });

  const { handleSubmit } = methods;

  const handleUpload = (file: File[]) => {
    console.log(file);
  };

  const onSubmit = (data: TUserCreateSchema) => {
    console.log('form submitted', data);
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className='grid md:gap-x-16 md:flex md:justify-between'>
        <div className='mb-4 text-sm font-semibold md:mb-0'>
          <UploadAvatar onDrop={handleUpload} />
          <ul className='font-normal list-disc list-outside text-zinc-500'>
            <li>The image must be clear and recent</li>
            <li>Size must be 4*4</li>
            <li>Size must not exceed 5mb</li>
          </ul>
        </div>
        <div className='w-full space-y-6'>
          <RHFInputField name='name' label='Full Name' />
          <RHFInputField name='email' label='Email' />
          <RHFInputField name='personal_number' label='Personal Number' />
          <RHFInputField name='official_number' label='Official Number' />
          <RHFInputField name='present_address' label='Present Address' />
          <RHFInputField name='permanent_address' label='Permanent Address' />
          <RHFDatePicker name='dob' label='Date of Birth' />
          <RHFSelectField name='gender' label='Gender'>
            {Gender.map((gender) => (
              <SelectItem value={gender} key={gender}>
                {gender}
              </SelectItem>
            ))}
          </RHFSelectField>
          <RHFSelectField name='blood_group' label='Blood Group'>
            {Blood_Group.map((group) => (
              <SelectItem value={group} key={group}>
                {group}
              </SelectItem>
            ))}
          </RHFSelectField>
          <RHFSelectField name='religion' label='Religion'>
            {Religion.map((rel) => (
              <SelectItem value={rel} key={rel}>
                {rel}
              </SelectItem>
            ))}
          </RHFSelectField>
        </div>
      </div>

      <div className='flex justify-end'>
        <Button className='mt-6' type='submit'>
          Create New User
        </Button>
      </div>
    </FormProvider>
  );
};

export default UserCreateForm;
