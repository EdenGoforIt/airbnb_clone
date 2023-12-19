import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import TripClient from './TripClient';

const TripPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subTitle="please login" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ authorId: currentUser.id });
  console.log('🚀 ~ file: page.tsx:19 ~ TripPage ~ reservations:', reservations);

  if (!reservations?.length) {
    return (
      <ClientOnly>
        <EmptyState title="No Trip Found" subTitle="Looks like you haven't reserved any trips yet."></EmptyState>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TripPage;
