import React, { useState, useRef, useMemo, useContext } from "react";
import { bun, main, sauce } from "../../utils/constant";
import cls from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ListIngredients from "../ListIngredients/ListIngredients";
import { IngredientsContext } from "../../services/burgerContext";

function BurgerIngredients() {

  const burgerIngredients = useContext(IngredientsContext);

  const [current, setCurrent] = useState("one"); 

  const refBun = useRef(null);
  const refMain = useRef(null);
  const refSauce = useRef(null);

  const handleTabClick = (value, ref) => {
    setCurrent(value);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };



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
        <Tab value="one" active={current === "one"} onClick={() => handleTabClick("one", refBun)}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={() => handleTabClick("two", refMain)}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={() => handleTabClick("three", refSauce)}>
          Начинки
        </Tab>
      </div>
      <div className={cls.content}>
        <ListIngredients listRef={refBun} nameIngredient="Булки" listIngr={buns} />
        <ListIngredients listRef={refMain} nameIngredient="Соусы" listIngr={meals} />
        <ListIngredients listRef={refSauce} nameIngredient="Начинки" listIngr={sauces} />
      </div>
    </section>
  );
}

export default BurgerIngredients;
