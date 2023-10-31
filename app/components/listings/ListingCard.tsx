import useCountries from '@/app/hooks/useCountry';
import { SafeUser } from '@/app/types';
import { Listing, Reservation } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);
  console.log('location :', location);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totlaPrice;
    }
    return data.price;
  }, [reservation, data.price]);
  return <div>Listing card</div>;
};
export default ListingCard;
