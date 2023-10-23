import * as z from 'zod';

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
    message: 'Delivery data must not be earlier than the start date',
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
