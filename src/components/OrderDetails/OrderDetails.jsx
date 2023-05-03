import React from "react";
import cls from "./OrderDetails.module.css";
import orderDoneIcon from "../../images/done.png";
import { useSelector } from "react-redux";
import { selectOrderDetails } from "../../services/slices/BurgerOrderSlice";

function OrderDetails() {
  const orderData = useSelector(selectOrderDetails);
  return (
    <div className={cls.order}>
      <p className={cls.orderNumber}>{orderData.order.number}</p>
      <p className={cls.orderDesc}>идентификатор заказа</p>
      <img className={cls.orderDoneIcon} src={orderDoneIcon} alt="Готово" />
      <p className={cls.orderTextBottom}>
        Ваш заказ начали готовить
        <span>Дождитесь готовности на орбитальной станции</span>
      </p>
    </div>
  );
}

export default OrderDetails;
