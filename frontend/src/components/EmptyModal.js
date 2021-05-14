import React from 'react';
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react';
/**
 * EmptyModal is a generic modal to make a your own modal.
 * @name EmptyModal
 * @component
 * @category Utils
 * @param {Component} children - A children is a component of react.
 * @param {String} title - Set title for modal.
 * @param {String} buttonText - Set text content of button to init modal.
 * @example
 * <EmptyModal title="A new Modal" buttonText="See Modal" >
 *  <h4>Children of Modal</h4>
 * </EmptyModal>
 * @returns Return a component of React.
 */
const EmptyModal = ({ children, title, buttonText }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* Button Show */}
      <Button onClick={onOpen} colorScheme='teal' mr='4'>
        {buttonText}
      </Button>
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EmptyModal;
