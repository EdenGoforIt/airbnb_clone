import ClientOnly from '../ClientOnly';
import EmptyState from '../EmptyState';

const ListingPage = async () => {
  return (
    <ClientOnly>
      <EmptyState title="No favorites found" subTitle="Looks like you have no favorite listing"></EmptyState>
    </ClientOnly>
  );
};

export default ListingPage;
