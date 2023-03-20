import React, { useState } from "react";
import PropTypes from 'prop-types';
import cls from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ListIngredients from "../ListIngredients/ListIngredients";
import data from "../../utils/data";

function BurgerIngredients() {
  const [current, setCurrent] = useState("one");

  const buns = data.filter((ingredient) => ingredient.type === "bun");
  const meals = data.filter((ingredient) => ingredient.type === "main");
  const sauces = data.filter((ingredient) => ingredient.type === "sauce");

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

export default BurgerIngredients;
