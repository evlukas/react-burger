import React, { useState, useMemo } from "react";
import PropTypes from 'prop-types';
import ingrType from "../../utils/ingrType";
import { bun, main, sauce } from "../../utils/constant";
import cls from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ListIngredients from "../ListIngredients/ListIngredients";

function BurgerIngredients({burgerIngredients}) {

  const [current, setCurrent] = useState("one"); 
  const {meals, sauces, buns} = useMemo( () => {
    return {
      meals: burgerIngredients.filter((ingredient) => ingredient.type === main),
      sauces: burgerIngredients.filter((ingredient) => ingredient.type === sauce),
      buns: burgerIngredients.filter((ingredient) => ingredient.type === bun) 
    }
}, [burgerIngredients]);

  return (
    <section className={cls.burgerIngredients}>
      <h1 className={cls.header}>Соберите Бургер</h1>

      <div style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={cls.content}>
        <ListIngredients nameIngredient="Булки" listIngr={buns} />
        <ListIngredients nameIngredient="Соусы" listIngr={meals} />
        <ListIngredients nameIngredient="Начинки" listIngr={sauces} />
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingrType.isRequired)
};

export default BurgerIngredients;
