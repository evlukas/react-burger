import React, { useMemo } from "react";
import data from "../../utils/data";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./BurgerConstructor.module.css";
import BurgerInnerList from "../BurgerInnerList/BurgerInnerList";

function BurgerConstructor() {
  const dataBurgerInner = useMemo(
    () => data.filter((item) => item.type !== "bun"),
    [data]
  );

  const bunPrice = data[0].price;
  let totalPrice = bunPrice;

  return (
    <section className={cls.burgerConstructor}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={bunPrice}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
      />

      <ul className={cls.listBurgerIngr}>
        {dataBurgerInner.map((item) => {
          totalPrice += item.price;
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
        text="Краторная булка N-200i (низ)"
        price={bunPrice}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
      />

      <div className={cls.placeOrderWrap}>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
        <div className={cls.totalPriceWrap}>
          <span className={cls.totalPrice}>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
}

export default BurgerConstructor;
