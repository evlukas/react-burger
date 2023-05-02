import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import cls from "./OrderTotal.module.css";

export const OrderTotal = ({ price }) => {
  return (
    <div className={cls.totalPriceWrap}>
      <span className={cls.totalPrice}>{price}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
};
