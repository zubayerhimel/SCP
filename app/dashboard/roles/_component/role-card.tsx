import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Pencil, Trash } from 'lucide-react';

const RoleCard = () => {
  return (
    <Card className='ring-1 ring-primary/30'>
      <CardHeader>
        <CardTitle>
          <div className='flex items-center justify-between'>
            <Label className='text-2xl' htmlFor='role'>
              Admin
            </Label>
            <div className='flex items-center gap-2'>
              <Switch id='role' />
              <Pencil className='w-4 h-4' role='button' />
              <Trash className='w-4 h-4' role='button' />
            </div>
          </div>
        </CardTitle>
        <CardDescription>Organization</CardDescription>
        <CardDescription>This is a role for Admin of this organization</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default RoleCard;
