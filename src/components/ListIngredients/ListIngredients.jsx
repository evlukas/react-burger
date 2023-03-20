import React, { useState } from "react";
import Ingredient from "../Ingredient/Ingredient";
import cls from "./ListIngredients.module.css";

function ListIngredients({ nameIngredient, listIngr }) {
  return (
    <>
      <h2 className={cls.header}>{nameIngredient}</h2>
      <ul className={cls.list}>
        {listIngr.map((ingr) => (
          <Ingredient key={ingr._id} ingr={ingr} />
        ))}
      </ul>
    </>
  );
}

export default ListIngredients;
