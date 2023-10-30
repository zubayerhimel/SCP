import Image from 'next/image';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { ImageProps } from '../(project)/[slug]/batch/page';

type CheckImageProps = {
  image: ImageProps;
  onImageCheck: (value: ImageProps) => void;
};

const CheckImage = ({ image, onImageCheck }: CheckImageProps) => {
  return (
    <div className='relative rounded-lg bg-primary/10' key={image.id} onClick={() => onImageCheck(image)}>
      <Checkbox id={`card-${image.id}`} className='absolute w-5 h-5 mt-4 ml-4' checked={image.checked} />
      <Label
        id={`card-${image.id}`}
        className={cn('flex items-center border-4 border-transparent justify-between rounded-lg hover:text-accent-foreground', image.checked && 'border-4 border-primary')}>
        <Image className='w-[298px] h-[198px] object-contain rounded-lg' alt='product' src={image.source} />
      </Label>
    </div>
  );
};

export default CheckImage;
