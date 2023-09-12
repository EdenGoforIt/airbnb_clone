'use client';

import useRentModal from '@/app/hooks/useRentModal';
import Modal from './Modal';

const RentModal = () => {
  const rentModal = useRentModal();

  const handleSubmit = () => {
    return {};
  };
  return (
    <Modal
      disabled={false}
      isOpen={rentModal.isOpen}
      title="Airbnb your home!"
      actionLabel={'test'}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit}
    />
  );
};

export default RentModal;
