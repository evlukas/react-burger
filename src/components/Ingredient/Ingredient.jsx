import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./Ingredient.module.css";

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

export default Ingredient;
