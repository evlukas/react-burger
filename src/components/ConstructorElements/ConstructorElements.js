import React, { useRef, useCallback } from "react";
import ScrollToBottom from "../ScrollToBottom/ScrollToBottom";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerInnerList from "../BurgerInnerList/BurgerInnerList";
import { reorderIngredients } from "../../services/slices/BurgerConstructorSlice";
import { useDispatch } from "react-redux";
import cls from "./ConstructorElements.module.css";

const ConstructorElements = ({ burgerInner, bun }) => {
  const dispatch = useDispatch();
  const bunPrice = bun?.price || 0;
  const scrollRef = useRef();

  const onMove = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = burgerInner[dragIndex];
      const newDataBurgerInner = [...burgerInner];
      newDataBurgerInner.splice(dragIndex, 1);
      newDataBurgerInner.splice(hoverIndex, 0, dragItem);

      dispatch(reorderIngredients(newDataBurgerInner));
    },
    [burgerInner, dispatch]
  );

  return (
    <>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${bun?.name} (верх)`}
        price={bunPrice}
        thumbnail={bun?.image_mobile}
      />

      <ul ref={scrollRef} className={cls.listBurgerIngr}>
        {!burgerInner.length && (
          <p>Перетащите сюда ингредиенты из левой секции</p>
        )}
        {burgerInner.map((item, index) => {
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
      <ScrollToBottom containerRef={scrollRef} />
    </>
  );
};

export default ConstructorElements;
