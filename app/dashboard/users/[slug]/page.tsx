import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DetailsItem from '@/components/ui/details-item';
import PageWrapper from '@/components/ui/page-wrapper';
import { PenSquare } from 'lucide-react';

const UserDetails = () => {
  return (
    <PageWrapper>
      <Card className='ring-1 ring-primary/30'>
        <CardHeader>
          <CardTitle className='flex gap-4'>
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
              <span className='text-lg font-normal text-primary'>Layla Amora</span>
              <span className='text-sm font-normal'>Company Name</span>
            </div>
            <div>
              <PenSquare className='w-4 h-4 mt-1' />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex flex-col lg:border-l lg:pl-3'>
              <DetailsItem label='Client Code' value='01938' />
              <DetailsItem label='Username' value='layla-amora' />
              <DetailsItem label='Country' value='United States' />
              <DetailsItem label='Timezone' value='UTC+6 Dhaka' />
              <DetailsItem label='Currency' value='$' />
              <DetailsItem label='VAT No.' value='100' />
            </div>
            <div className='flex flex-col lg:border-l lg:pl-3'>
              <DetailsItem label='Contact Number' value='01617000000' />
              <DetailsItem label='Contact Person' value='Zubayer Himel' />
              <DetailsItem label='Billing Email' value='zubayer.alam@v2.ltd' />
              <DetailsItem label='Contact Number' value='01617000000' />
              <DetailsItem label='Website' value='https://v2.ltd' />
              <DetailsItem label='VAT no.' value='100' />
            </div>
            <div className='flex flex-col lg:border-l lg:pl-3'>
              <DetailsItem label='Contact Number' value='01617000000' />
              <DetailsItem label='Contact Person' value='Zubayer Himel' />
              <DetailsItem label='Billing Email' value='zubayer.alam@v2.ltd' />
              <DetailsItem label='Contact Number' value='01617000000' />
              <DetailsItem label='Website' value='https://v2.ltd' />
              <DetailsItem label='VAT no.' value='100' />
            </div>
          </div>
        </CardContent>
      </Card>
    </PageWrapper>
  );
};

export default UserDetails;
