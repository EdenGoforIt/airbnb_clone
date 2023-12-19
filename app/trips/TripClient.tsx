'use client';

import Container from '../components/Container';
import Heading from '../components/Heading';
import { SafeReservation, SafeUser } from '../types';

interface TripClientProps {
  currentUser: SafeUser;
  reservations: SafeReservation[];
}

const TripClient: React.FC<TripClientProps> = ({ currentUser, reservations }) => {
  return (
    <Container>
      <Heading title="Trip" subtitle="Where you've been and where you're going" />
    </Container>
  );
};

export default TripClient;
