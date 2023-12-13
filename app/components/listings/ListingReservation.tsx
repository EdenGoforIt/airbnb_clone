'use client';
import { Range } from 'react-date-range';

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disbaledDates: Date[];
  disabled?: boolean;
}
const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disbaledDates
}) => {
  return <div></div>;
};

export default ListingReservation;
