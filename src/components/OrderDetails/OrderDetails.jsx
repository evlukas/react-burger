import React from "react";
import PropTypes from "prop-types";
import cls from "./OrderDetails.module.css";
import orderDoneIcon from "../../images/done.png";

function OrderDetails() {
  return (
    <div className={cls.order}>
      <p className={cls.orderNumber}>034536</p>
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
