import React from 'react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className='flex justify-between mx-6 my-6'>{children}</main>;
};

export default PageWrapper;
