import React from 'react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className='flex justify-between max-w-screen-xl px-2 mx-auto'>{children}</main>;
};

export default PageWrapper;
