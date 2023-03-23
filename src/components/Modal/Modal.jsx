import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cls from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

function Modal({ children, setModalVisible }) {
  const modalApp = document.getElementById("App");

  const closeEscapeHandle = (event) => {
    if (event.key === "Escape") {
      closeModalHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeEscapeHandle);
  }, []);

  const closeModalHandler = () => {
    document.removeEventListener("keydown", closeEscapeHandle);
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
  return ReactDOM.createPortal(modal, modalApp);
}

Modal.propsTypes = {
  setModalVisible: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default Modal;
