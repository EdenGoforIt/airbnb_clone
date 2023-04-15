'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => {};
  onSubmit: () => {};
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 3000);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl: w-2/5 my-6 mx-auto h-full lg:h-auto md: h-auto">
        {/* Contents */}
        <div
          className={`translate duration-3000 h-full ${
            showModal ? 'translate-y-0' : ' translate-y-full'
          } 
          ${showModal ? 'opacity-100' : 'opacity-0'}
        }`}
        >
          {/* Modal */}
          <div
            className="translate h-full lg:h-auto md:h-auto 
                    border-0 rounded-md shadow-lg relative 
                    flex flex-col w-full bg-white 
                    p-2
                    outline-none focus:outline-none"
          >
            {/* Header */}
            <div className="flex items-center p-6 rounded-t justify-center relative border-b-1px">
              <button
                onClick={handleClose}
                className="p-1 border-0 hover:opacity-70 transition absolute right-5"
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-xl font-bold">{title}</div>
            </div>
            {/* Body */}
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
