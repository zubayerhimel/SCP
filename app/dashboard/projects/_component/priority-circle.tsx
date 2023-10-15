import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toTitleCase } from '@/utils/Formatter';

type TypeWiseColor = {
  high: 'bg-red-500';
  medium: 'bg-orange-500';
  low: 'bg-yellow-300';
};

const typeWiseColor: TypeWiseColor = {
  high: 'bg-red-500',
  medium: 'bg-orange-500',
  low: 'bg-yellow-300',
};

type PriorityCircleProps = {
  type: keyof TypeWiseColor;
};

const PriorityCircle = ({ type }: PriorityCircleProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`w-4 h-4 ${typeWiseColor[type]} rounded-full`} />
        </TooltipTrigger>
        <TooltipContent className='bg-black'>
          <p>{toTitleCase(type)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PriorityCircle;
