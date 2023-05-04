import React, { useState, useEffect, useMemo } from "react";
import cls from "./OrderButton.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Spiner from "../spiners/Spiner";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {
  getOrderError,
  getOrderStatus,
  selectOrderDetails,
  sendIngredients,
} from "../../services/slices/BurgerOrderSlice";
import { useDispatch, useSelector } from "react-redux";

const OrderButton = ({ price, burgerInner, bun }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const orderStatus = useSelector(getOrderStatus);
  const orderError = useSelector(getOrderError);
  const orderdetails = useSelector(selectOrderDetails);
  const dispatch = useDispatch();

  const makeOrderBtnHandle = () => {
    const ingredientIds = [
      bun._id,
      ...burgerInner.map((item) => item._id),
      bun._id,
    ];
    dispatch(sendIngredients(ingredientIds));
  };

  const bunPrice = bun?.price || 0;

  const totalPrice = useMemo(() => {
    const ingrPrice = burgerInner.reduce(
      (sum, currentIngr) => sum + currentIngr.price,
      0
    );
    return bunPrice * 2 + ingrPrice;
  }, [burgerInner, bun]);

  useEffect(() => {
    if (orderStatus !== "loading" && orderStatus !== "idle") {
      setModalVisible(true);
    }
  }, [orderStatus]);

  return (
    <>
      <div className={cls.placeOrderWrap}>
        <Button
          onClick={makeOrderBtnHandle}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
        <div className={cls.totalPriceWrap}>
          <span className={cls.totalPrice}>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>

      {orderStatus === "loading" && <Spiner />}
      {modalVisible && (
        <Modal setModalVisible={setModalVisible}>
          {orderError || !burgerInner.length ? (
            <h1 style={{ padding: 100 }}>
              Что-то пошло не так! Вы уверены, что выбрали ингредиенты?
            </h1>
          ) : (
            <OrderDetails orderData={orderdetails} />
          )}
        </Modal>
      )}
    </>
  );
};

export default OrderButton;
