import React from "react";
import PropTypes from "prop-types";
import cls from "./ModalOverlay.module.css";

function ModalOverlay({closeModalHandler}) {
  return <div onClick={closeModalHandler} className={cls.modalOverlayCenter}></div>;
}

ModalOverlay.propsTypes = {
  closeModalHandler: PropTypes.func.isRequired,
}

export default ModalOverlay;
