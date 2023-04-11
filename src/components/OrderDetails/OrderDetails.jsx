import React from "react";
import cls from "./OrderDetails.module.css";
import orderDoneIcon from "../../images/done.png";
import PropTypes from "prop-types";

function OrderDetails({ orderData }) {
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

OrderDetails.propTypes = {
  orderData: PropTypes.shape({
    name: PropTypes.number.isRequired,
    order: PropTypes.objectOf(PropTypes.number).isRequired,
    success: PropTypes.bool.isRequired,
  }).isRequired,
};

export default OrderDetails;
