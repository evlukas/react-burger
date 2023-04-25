import React, { useState, useMemo, useCallback } from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./BurgerConstructor.module.css";
import BurgerInnerList from "../BurgerInnerList/BurgerInnerList";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import Spiner from "../spiners/Spiner";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  reorderIngredients,
  selectAllIngredients,
} from "../../services/slices/BurgerConstructorSlice";
import {
  getOrderError,
  getOrderStatus,
  selectOrderDetails,
  sendIngredients,
} from "../../services/slices/BurgerOrderSlice";
import { useDrop } from "react-dnd";
import { incrementItem } from "../../services/slices/BurgeringredientsSlice";

function BurgerConstructor() {

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(dropIngr) {
      onDropHandler(dropIngr);
    },
  });

  const onDropHandler = (dropIngr) => {
    const ingr = {...dropIngr, id: new Date().getTime() + '-' + Math.floor(Math.random() * 100000)}
    dispatch(incrementItem(ingr._id));
    dispatch(addIngredient(ingr));
  };

  const dispatch = useDispatch();
  const burgerIngredients = useSelector(selectAllIngredients);

  const orderdetails = useSelector(selectOrderDetails);
  const orderStatus = useSelector(getOrderStatus);
  const orderError = useSelector(getOrderError);

  const [modalVisible, setModalVisible] = useState(false);
  useMemo(() => {
    if (orderStatus !== "loading" && orderStatus !== "idle") {
      setModalVisible(true);
    }
  }, [orderStatus]);

  const makeOrderBtnHandle = () => {
    const ingredientIds = [
      bun._id,
      ...dataBurgerInner.map((item) => item._id),
      bun._id,
    ];
    dispatch(sendIngredients(ingredientIds));
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

  const onMove = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = dataBurgerInner[dragIndex];
      const newDataBurgerInner = [...dataBurgerInner];
      newDataBurgerInner.splice(dragIndex, 1);
      newDataBurgerInner.splice(hoverIndex, 0, dragItem);

      dispatch(reorderIngredients(newDataBurgerInner));
    },
    [dataBurgerInner, dispatch]
  );

  return (
    <section ref={dropTarget} className={cls.burgerConstructor}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${bun?.name} (верх)`}
        price={bunPrice}
        thumbnail={bun?.image_mobile}
      />

      <ul className={cls.listBurgerIngr}>
        {dataBurgerInner.length === 0 && (
          <p>Перетащите сюда ингредиенты из левой секции</p>
        )}
        {dataBurgerInner.map((item, index) => {
          return (
            <BurgerInnerList
              index={index}
              onMove={onMove}
              key={item.id}
              innerId={item.id}
              ingrId={item._id}
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

      {orderStatus === "loading" && <Spiner />}
      {modalVisible && (
        <Modal setModalVisible={setModalVisible}>
          {orderError || burgerIngredients.length === 1 ? (
            <h1 style={{ padding: 100 }}>
              Что-то пошло не так! Вы уверены, что выбрали ингредиенты?
            </h1>
          ) : (
            <OrderDetails orderData={orderdetails} />
          )}
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
