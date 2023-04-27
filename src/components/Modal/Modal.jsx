import React, { useEffect } from "react";
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import cls from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

function Modal({ children, setModalVisible }) {
  const modalApp = document.getElementById("react-modals");

  const closeEscapeHandle = (event) => {
    if (event.key === "Escape") {
      closeModalHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeEscapeHandle);
    return () => document.removeEventListener("keydown", closeEscapeHandle);
  }, []);

  const closeModalHandler = () => {
    setModalVisible(false);
  };

  const modal = (
    <div className={cls.modalWrapp}>
      <ModalOverlay closeModalHandler={closeModalHandler} />
      <div className={cls.modalOverlayContent}>
        {children}
        <button
          onClick={closeModalHandler}
          aria-label="close"
          type="button"
          className={cls.modalClose}
        ></button>
      </div>
    </div>
  );
  return createPortal(modal, modalApp);
}

Modal.propsTypes = {
  setModalVisible: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default Modal;
