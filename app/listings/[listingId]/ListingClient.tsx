import Container from '@/app/components/Container';
import ListingHead from '@/app/components/listings/ListingHead';
import { categories } from '@/app/data-provider/categories';
import { SafeListing, SafeUser } from '@/app/types';
import { Reservation } from '@prisma/client';
import React, { useMemo } from 'react';

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & { user: SafeUser };
  currentUser?: SafeUser | null;
}

const ListClient: React.FC<ListingClientProps> = ({ reservations, listing, currentUser }) => {
  const category = useMemo(() => {
    return categories.find((x) => x.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6"></div>
        </div>
      </div>
    </Container>
  );
};

export default ListClient;
