import React from "react";
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

export default BurgerInnerList;
