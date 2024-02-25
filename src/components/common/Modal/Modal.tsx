import React from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { ModalCloseButton } from './Modal.styled';

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

Modal.setAppElement('#root');

export const ModalWindow: React.FC<ModalWindowProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: '1000',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(0.8)',

          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          width: 'fit-content',
          height: 'fit-content',
          padding: '40px',

          transition: 'transform 0.3s ease',
        },
      }}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <ModalCloseButton onClick={onClose}>
        <MdClose fontSize={24} />
      </ModalCloseButton>
      {children}
    </Modal>
  );
};
