'use client';

import useCountries from '@/app/hooks/useCountry';
import { SafeUser } from '@/app/types';
import Image from 'next/image';
import Heading from '../Heading';
import HeartButton from '../HeartButton';
interface ListingHeadProps {
  id: string;
  locationValue: string;
  imageSrc: string;
  title: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({ currentUser, locationValue, imageSrc, id, title }) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  return (
    <>
      <Heading title={title} subtitle={`${location?.region}, ${location?.label}`} />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image alt="image" src={imageSrc} fill className="object-cover w-full" />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
