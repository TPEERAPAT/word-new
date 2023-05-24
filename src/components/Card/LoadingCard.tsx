import Card from '@components/Card/Card';
import type { FC } from 'react';

const LoadingCard: FC = () => {
  return (
    <Card className="flex flex-col gap-6 p-6" shadow>
      <div className="flex flex-row justify-between">
        {/* Name loading */}
        <div className="h-12 w-1/3 animate-pulse rounded-lg bg-greyBorder" />
        <div className="h-12 w-1/2 animate-pulse rounded-lg bg-greyBorder" />
      </div>
      <span className="h-[1px] bg-greyBorder" />
      <div className="h-12 w-3/4 animate-pulse rounded-lg bg-greyBorder" />
      <div className="ml-auto h-12 w-3/4 animate-pulse rounded-lg bg-greyBorder" />
      <div className="h-12 w-3/4 animate-pulse rounded-lg bg-greyBorder" />
    </Card>
  );
};

export default LoadingCard;
