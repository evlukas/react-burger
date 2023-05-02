import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";

export function withModal(ComponentToWrap, ModalContent) {

  return function WrappedComponent(props) {

  const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <ComponentToWrap {...props}  />
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
            <ModalContent />
          </Modal>
        )}
      </>
    );
  };
}