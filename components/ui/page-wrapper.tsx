import React from 'react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className='mx-6 my-6'>{children}</main>;
};

export default PageWrapper;
