import PropTypes from 'prop-types';
import Ingredient from "../Ingredient/Ingredient";
import cls from "./ListIngredients.module.css";
import ingrType from '../../utils/ingrType';

function ListIngredients({ nameIngredient, listIngr, listRef }) {
  return (
    <>
      <h2 ref={listRef} className={cls.header}>{nameIngredient}</h2>
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
  listIngr: PropTypes.arrayOf(ingrType.isRequired).isRequired,
  listRef: PropTypes.object
};

export default ListIngredients;
