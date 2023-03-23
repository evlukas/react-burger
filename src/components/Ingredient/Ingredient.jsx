import React, { useState } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./Ingredient.module.css";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

function Ingredient({ ingr }) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const openModalIngrHandle = () => {
    setModalVisible(true);
  };

  return (
    <>
      <li onClick={openModalIngrHandle} className={cls.ingrCard}>
        <img className="ml-4 mr-4" alt={ingr.name} src={ingr.image} />
        <p className={cls.price}>
          {ingr.price} <CurrencyIcon type="primary" />
        </p>
        <p className={cls.name}>{ingr.name}</p>
        <Counter count={1} size="default" extraClass="m-1" />
      </li>
      {modalVisible && (
        <Modal setModalVisible={setModalVisible}>
          <IngredientDetails ingr={ingr} />
        </Modal>
      )}
    </>
  );
}

Ingredient.propTypes = {
  ingr: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Ingredient;
