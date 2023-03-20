import React from "react";
import data from "../../utils/data";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./BurgerConstructor.module.css";
import BurgerInnerList from "../BurgerInnerList/BurgerInnerList";

function BurgerConstructor() {
  const dataBurgerInner = data.filter((item) => item.type !== "bun");

  return (
    <section className={cls.burgerConstructor}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
      />

      <ul className={cls.listBurgerIngr}>
        {dataBurgerInner.map((item) => (
          <BurgerInnerList
            key={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </ul>

      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
      />

      <div className={cls.placeOrderWrap}>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
        <div className={cls.totalPriceWrap}>
          <span className={cls.totalPrice}>610</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
}

export default BurgerConstructor;
