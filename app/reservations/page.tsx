import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import ReservationClient from './ReservationClient';

const ReservationPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subTitle="Please Login" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id
  });

  if (!reservations.length) {
    return (
      <ClientOnly>
        <EmptyState title="No rservation found" subTitle="Looks like you have no reservations on your properties" />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationClient reservations={reservations} user={currentUser} />
    </ClientOnly>
  );
};

export default ReservationPage;
