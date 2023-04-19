import React, { useState, useMemo, useContext } from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./BurgerConstructor.module.css";
import BurgerInnerList from "../BurgerInnerList/BurgerInnerList";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { IngredientsContext } from "../../services/burgerContext";
import Spiner from "../spiners/Spiner";
import { api } from "../../api/api";

function BurgerConstructor() {
  const burgerIngredients = useContext(IngredientsContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [orderdetails, setOrderdetails] = useState({
    orderData: {},
    loading: false,
    error: "",
  });

  const makeOrderBtnHandle = () => {
    let ingredientsId = [bun._id, ...dataBurgerInner.map((item) => item._id), bun._id];
    setOrderdetails((prevState) => ({ ...prevState, loading: true }));
    api
      .createOrder(ingredientsId)
      .then((data) => {
        setOrderdetails((prevState) => ({
          ...prevState,
          loading: false,
          orderData: data,
        }));
        setModalVisible(true);
      })
      .catch(
        (error) => setOrderdetails((prevState) => ({
          ...prevState,
          loading: false,
          error: error,
        }))
      );
  };

  const { bun, dataBurgerInner } = useMemo(() => {
    return {
      bun: burgerIngredients.find((item) => item.type === "bun"),
      dataBurgerInner: burgerIngredients.filter((item) => item.type !== "bun"),
    };
  }, [burgerIngredients]);

  const bunPrice = bun?.price || 0;

  const totalPrice = useMemo(() => {
    const ingrPrice = dataBurgerInner.reduce(
      (sum, currentIngr) => sum + currentIngr.price,
      0
    );
    return bunPrice * 2 + ingrPrice;
  }, [burgerIngredients]);

  return (
    <section className={cls.burgerConstructor}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${bun?.name} (верх)`}
        price={bunPrice}
        thumbnail={bun?.image_mobile}
      />

      <ul className={cls.listBurgerIngr}>
        {dataBurgerInner.map((item) => {
          return (
            <BurgerInnerList
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </ul>

      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${bun?.name} (низ)`}
        price={bunPrice}
        thumbnail={bun?.image_mobile}
      />
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
      {orderdetails.loading && <Spiner />}
      {modalVisible && (
        <Modal setModalVisible={setModalVisible}>
          <OrderDetails orderData={orderdetails.orderData} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
