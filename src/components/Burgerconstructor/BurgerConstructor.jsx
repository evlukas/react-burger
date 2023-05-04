import React, { useEffect } from "react";
import cls from "./BurgerConstructor.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient, selectAllIngredients, selectBun } from "../../services/slices/BurgerConstructorSlice";
import { useDrop } from "react-dnd";
import { getLoadingIngredientsStatus, incrementItem } from "../../services/slices/BurgeringredientsSlice";
import OrderButton from "../OrderButton/OrderButton";
import ConstructorElements from "../ConstructorElements/ConstructorElements";

function BurgerConstructor() {

  const dispatch = useDispatch();
  const ingrLoadingStatus = useSelector(getLoadingIngredientsStatus);
  const dataBurgerInner = useSelector(selectAllIngredients);
  const bun = useSelector(selectBun);

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

  useEffect(() => {
    if (ingrLoadingStatus === "succeeded") {
      onDropHandler(bun);
    }
  }, [ingrLoadingStatus]);

  return (
    <section ref={dropTarget} className={cls.burgerConstructor}>
      <ConstructorElements bun={bun} burgerInner={dataBurgerInner} />
      <OrderButton burgerInner={dataBurgerInner} bun={bun} />
    </section>
  );
}

export default BurgerConstructor;
