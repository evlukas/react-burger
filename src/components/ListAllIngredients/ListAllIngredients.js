import React, { useMemo, useEffect } from "react";
import ListIngredients from "../ListIngredients/ListIngredients";
import cls from "./ListAllIngredients.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchIngredients,
  selectAllIngredients,
} from "../../services/slices/BurgeringredientsSlice";
import { bun, main, sauce } from "../../utils/constant";

const ListAllIngredients = (props) => {
  const dispatch = useDispatch();
  const burgerIngredients = useSelector(selectAllIngredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const { meals, sauces, buns } = useMemo(() => {
    return {
      meals: burgerIngredients.filter((ingredient) => ingredient.type === main),
      sauces: burgerIngredients.filter(
        (ingredient) => ingredient.type === sauce
      ),
      buns: burgerIngredients.filter((ingredient) => ingredient.type === bun),
    };
  }, [burgerIngredients]);

  return (
    <div ref={props.refIngrContent} className={cls.content}>
      <ListIngredients
        listRef={props.refBun}
        nameIngredient="Булки"
        listIngr={buns}
      />
      <ListIngredients
        listRef={props.refMain}
        nameIngredient="Соусы"
        listIngr={meals}
      />
      <ListIngredients
        listRef={props.refSauce}
        nameIngredient="Начинки"
        listIngr={sauces}
      />
    </div>
  );
};

export default ListAllIngredients;
