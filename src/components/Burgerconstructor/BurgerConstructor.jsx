import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./BurgerConstructor.module.css";
import BurgerInnerList from "../BurgerInnerList/BurgerInnerList";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  reorderIngredients,
  selectAllIngredients,
  selectBun,
} from "../../services/slices/BurgerConstructorSlice";

import { useDrop } from "react-dnd";
import {
  getLoadingIngredientsStatus,
  incrementItem,
} from "../../services/slices/BurgeringredientsSlice";
import ScrollToBottom from "../ScrollToBottom/ScrollToBottom";
import OrderButton from "../OrderButton/OrderButton";
import { OrderTotal } from "../OrderTotal/OrderTotal";

function BurgerConstructor() {
  const ingrLoadingStatus = useSelector(getLoadingIngredientsStatus);
  const dispatch = useDispatch();
  const scrollRef = useRef();

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(dropIngr) {
      onDropHandler(dropIngr);
    },
  });

  const onDropHandler = (dropIngr) => {
    const ingr = {
      ...dropIngr,
      id: new Date().getTime() + "-" + Math.floor(Math.random() * 100000),
    };
    dispatch(incrementItem(ingr._id));
    dispatch(addIngredient(ingr));
  };

  const dataBurgerInner = useSelector(selectAllIngredients);
  const bun = useSelector(selectBun);

  useEffect(() => {
    if (ingrLoadingStatus === "succeeded") {
      onDropHandler(bun);
    }
  }, [ingrLoadingStatus]);

  const bunPrice = bun?.price || 0;
  const totalPrice = useMemo(() => {
    const ingrPrice = dataBurgerInner.reduce(
      (sum, currentIngr) => sum + currentIngr.price,
      0
    );
    return bunPrice * 2 + ingrPrice;
  }, [dataBurgerInner, bun]);

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
    <>
      <section ref={dropTarget} className={cls.burgerConstructor}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun?.name} (верх)`}
          price={bunPrice}
          thumbnail={bun?.image_mobile}
        />

        <ul ref={scrollRef} className={cls.listBurgerIngr}>
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
          <OrderButton />
          <OrderTotal price={totalPrice} />
        </div>
      </section>
      <ScrollToBottom containerRef={scrollRef} />
    </>
  );
}

export default BurgerConstructor;
