import React, { useState } from "react";
import PropTypes from 'prop-types';
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

ListIngredients.propTypes = {
  nameIngredient: PropTypes.string.isRequired,
  listIngr: PropTypes.arrayOf(PropTypes.object)
};

export default ListIngredients;
