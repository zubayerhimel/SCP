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
          <span className='relative flex w-3 h-3'>
            <span className={`absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping  ${typeWiseColor[type]}`}></span>
            <span className={`relative inline-flex w-3 h-3 rounded-full  ${typeWiseColor[type]}`}></span>
          </span>
          {/* <div className={`animate-ping w-4 h-4 ${typeWiseColor[type]} rounded-full`} /> */}
        </TooltipTrigger>
        <TooltipContent className='bg-black'>
          <p>{toTitleCase(type)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PriorityCircle;
