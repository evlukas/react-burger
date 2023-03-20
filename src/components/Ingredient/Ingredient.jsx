import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./Ingredient.module.css";
import PropTypes from 'prop-types';

function Ingredient({ingr}) {
  return (
    <li className={cls.ingrCard}>
      <img className="ml-4 mr-4" alt={ingr.name} src={ingr.image} />
      <p className={cls.price}>{ingr.price} <CurrencyIcon type="primary" /></p>
       <p className={cls.name}>{ingr.name}</p>
       <Counter count={1} size="default" extraClass="m-1" />
    </li>
  );
}

Ingredient.propTypes = {
  ingr: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Ingredient;
