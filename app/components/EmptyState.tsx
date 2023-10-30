'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Button from './Button';
import Heading from './Heading';

interface EmptyStateProps {
  title?: string;
  subTitle: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Exact Match',
  subTitle = 'Try changing or removing filters',
  showReset
}) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subTitle} />
      <div className="w-48 mt-4">
        {showReset && <Button outline label="Remove all filters" onClick={() => router.push('/')}></Button>}
      </div>
    </div>
  );
};

export default EmptyState;
