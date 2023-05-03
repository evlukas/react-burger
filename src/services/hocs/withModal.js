import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import { useSelector } from "react-redux";
import Spiner from "../../components/spiners/Spiner";

export function withModal(ComponentToWrap, ModalContent, status, error) {
  return () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalStatus = status ? useSelector(status) : false;
    const modalError = error ? useSelector(error) : false;

    useEffect(() => {
      if (modalStatus === "succeeded" || modalError) {
        setIsModalOpen(true);
      }
    }, [modalStatus, modalError]);

    return (
      <>
        <ComponentToWrap />
        {modalStatus === "loading" && <Spiner />}
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
            <ModalContent />
          </Modal>
        )}
      </>
    );
  };
}
