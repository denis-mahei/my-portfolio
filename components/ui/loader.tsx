import { RiLoader4Fill } from '@remixicon/react';
import { cn } from '@/lib/utils';

type Props = {
  size?: number;
  className?: string;
};

function LoadingSpinner({ size = 32, className }: Props) {
  return (
    <div className="flex items-center justify-center p-8">
      <RiLoader4Fill
        className={cn('animate-spin text-primary', className)}
        size={size}
      />
    </div>
  );
}

export default LoadingSpinner;
