import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useSelector } from "react-redux";
import { withModal } from "../../services/hocs/withModal";
import { getOrderStatus } from "../../services/slices/BurgerOrderSlice";
import OrderDetails from "../OrderDetails/OrderDetails";

const OrderButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} htmlType="button" type="primary" size="large">
      Оформить заказ
    </Button>
  );
};

export default withModal(OrderButton, OrderDetails);
