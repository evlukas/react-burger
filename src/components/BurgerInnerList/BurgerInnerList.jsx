import React from "react";
import PropTypes from 'prop-types';
import {
    ConstructorElement,
    DragIcon,
  } from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./BurgerInnerList.module.css";

function BurgerInnerList({name, price, image}) {
  return (
    <li className={cls.wrapDrag}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
      />
    </li>
  );
}

BurgerInnerList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,  
};

export default BurgerInnerList;
