import cls from "./IngredientDetails.module.css";
import PropTypes from "prop-types";
import ingrType from "../../utils/ingrType";

function IngredientDetails({ingr}) {
  return (
    <div className={cls.ingredientCard}>
      <p className={cls.header}>Детали ингредиента</p>
      <img className={cls.ingImg} src={ingr.image_large} alt={ingr.name} />
      <p className={cls.ingrDesc}>{ingr.name}</p>
      <ul className={cls.listCalories}>
        <li>Калории, ккал <span>{ingr.calories}</span></li>
        <li>Белки, г <span>{ingr.proteins}</span></li>
        <li>Жиры, г <span>{ingr.fat}</span></li>
        <li>Углеводы, г <span>{ingr.carbohydrates}</span></li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingr: PropTypes.shape(ingrType.isRequired).isRequired
};


export default IngredientDetails;
