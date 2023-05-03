import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { withModal } from "../../services/hocs/withModal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { emptyInner, getOrderStatus, sendIngredients } from "../../services/slices/BurgerOrderSlice";
import { getOrderError } from "../../services/slices/BurgerOrderSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllIngredients, selectBun } from "../../services/slices/BurgerConstructorSlice";

const OrderButton = () => {

  const dispatch = useDispatch();
  const dataBurgerInner = useSelector(selectAllIngredients);
  const bun = useSelector(selectBun);

  const makeOrderBtnHandle = () => {
    if(dataBurgerInner.length) {
      const ingredientIds = [
        bun._id,
        ...dataBurgerInner.map((item) => item._id),
        bun._id,
      ];
      dispatch(sendIngredients(ingredientIds));
    } else {
      dispatch(emptyInner())
    }
  };

  return (
    <Button onClick={makeOrderBtnHandle} htmlType="button" type="primary" size="large">
      Оформить заказ
    </Button>
  );
};

export default withModal(OrderButton, OrderDetails, getOrderStatus, getOrderError);
