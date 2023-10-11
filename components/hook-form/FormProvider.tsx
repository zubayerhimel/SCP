import React, { ReactNode } from 'react';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

type FormProviderProps = {
  children: ReactNode;
  methods: UseFormReturn | any;
  onSubmit?: () => void; // You can specify the correct function signature for onSubmit
};

const FormProvider: React.FC<FormProviderProps> = ({ children, onSubmit, methods }) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};

export default FormProvider;
