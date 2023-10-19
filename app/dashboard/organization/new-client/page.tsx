import PageWrapper from '@/components/ui/page-wrapper';
import { Separator } from '@/components/ui/separator';
import ClientCreateForm from '../_component/client-create-form';

const NewClient = () => {
  return (
    <PageWrapper>
      <div className='container max-w-4xl'>
        <div className='flex flex-col items-center justify-center max-w-xs mx-auto mb-10 space-y-2'>
          <span className='font-semibold'>Client Information</span>
          <Separator />
        </div>
        <ClientCreateForm />
      </div>
    </PageWrapper>
  );
};

export default NewClient;
