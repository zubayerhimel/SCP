import * as z from 'zod';

export const ProjectCreateSchema = z
  .object({
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
