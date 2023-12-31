import * as z from 'zod';
import { PhoneNumberValidation } from './Regex';
import { isUserAdult } from './Helper';

export const ProjectCreateSchema = z
  .object({
    avatarUrl: z.string(),
    email: z.string().email({ message: 'Invalid email address' }).trim().toLowerCase(),
    description: z.string().trim().min(2, { message: 'Please give a proper description' }),
    start_date: z.nullable(z.date()),
    delivery_date: z.nullable(z.date()),
    name: z.string().trim().min(3, { message: 'Please provide valid name' }),
    client_code: z.string().trim(),
    total_file: z.string().refine(
      (value) => {
        const parsedValue = parseFloat(value);
        return !isNaN(parsedValue) && parsedValue > 0;
      },
      {
        message: 'Total file must be a valid number and greater than 0',
      }
    ),
    project_cost: z.string().refine(
      (value) => {
        const parsedValue = parseFloat(value);
        return !isNaN(parsedValue) && parsedValue > 0;
      },
      {
        message: 'Project cost must be a valid positive number',
      }
    ),
  })
  .refine((data) => data.start_date === null || data.delivery_date === null || data.start_date <= data.delivery_date, {
    message: 'Delivery date must not be earlier than the start date',
    path: ['delivery_date'],
  });

export const RoleCreateSchema = z.object({
  role_name: z.string().min(3, { message: 'Please provide a valid name for role' }).trim(),
  description: z.string().min(4, { message: 'Give a proper description' }).optional(),
  resource_list: z.string().refine((value) => value !== '', {
    message: 'Please select at least one resource',
  }),
  role_type: z.string().refine((value) => value !== '', {
    message: 'Please select role type.',
  }),
});

export const ClientCreateSchema = z.object({
  name: z.string().min(3),
  client_code: z.string().min(3),
  username: z.string().trim().min(3),
  password: z
    .string()
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'), 'One special character')
    .min(8, 'Must be at least 8 characters in length'),
  timezone: z.string().refine((value) => value !== '', {
    message: 'Please select timezone',
  }),
  country: z.string().refine((value) => value !== '', { message: 'Please select country' }),
  description: z.string().optional(),
  contact_person: z.string().trim().min(3),
  contact_number: z.string().min(4),
  website: z.string().url({ message: 'Please provide valid URL' }),
  client_type: z.string().refine((value) => value !== '', { message: 'Please select client type' }),
  marketer_information: z.string(),
  working_days: z.string().min(1),
  billing_email: z.string().trim().email(),
  vat_no: z.number(),
  payment_cycle: z.string(),
  currency: z.string(),
  bank_name: z.string().min(3),
  account_no: z.string().min(3),
  routing: z.string().optional(),
  account_type: z.string().optional(),
  beneficiary: z.string().min(3),
  beneficiary_address: z.string().optional(),
});

export const UserCreateSchema = z.object({
  name: z.string().min(3),
  personal_number: z.string().regex(PhoneNumberValidation, 'Invalid Phone number').optional(),
  official_number: z.string().regex(PhoneNumberValidation, 'Invalid Phone number'),
  email: z.string().email(),
  present_address: z.string().min(6).max(30),
  permanent_address: z.string().min(6).max(30),
  dob: z.nullable(z.date().refine((dob) => isUserAdult(dob), { message: 'User must be at least 18 years old' })),
  gender: z.string().refine((value) => value !== '', { message: 'Please select gender' }),
  blood_group: z.string().refine((value) => value !== '', { message: 'Please select blood group' }),
  religion: z.string().refine((value) => value !== '', { message: 'Please select religion' }),
});

export const BatchCreateSchema = z
  .object({
    name: z.string().min(3),
    description: z.string().min(5),
    incoming_date: z.nullable(z.date()),
    batch_delivery: z.nullable(z.date()),
    delivery_time: z.string().min(4),
    price_per_image: z.string().refine(
      (value) => {
        const parsedValue = parseFloat(value);
        return !isNaN(parsedValue) && parsedValue > 0;
      },
      {
        message: 'Price must be a valid positive number',
      }
    ),
    total_file: z.string().refine((value) => {
      const parsedValue = parseFloat(value);
      return !isNaN(parsedValue) && parsedValue > 0;
    }),
    total_price: z.string().refine(
      (value) => {
        const parsedValue = parseFloat(value);
        return !isNaN(parsedValue) && parsedValue > 0;
      },
      {
        message: 'Price must be a valid positive number',
      }
    ),
    job_type: z.string().refine((value) => value !== ''),
    lock_time: z.string().min(4),
    priority: z.string().refine((value) => value !== ''),
  })
  .refine((data) => data.incoming_date === null || data.batch_delivery === null || data.incoming_date <= data.batch_delivery, {
    message: 'Delivery date must not be earlier than the incoming date',
    path: ['batch_delivery'],
  });
