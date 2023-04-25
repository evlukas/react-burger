import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./BurgerInnerList.module.css";
import { useDispatch } from "react-redux";
import { removeIngredient } from "../../services/slices/BurgerConstructorSlice";
import { useDrag, useDrop } from "react-dnd";
import { decrementItem } from "../../services/slices/BurgeringredientsSlice";

function BurgerInnerList({ name, price, image, innerId, onMove, index, ingrId }) {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const item = {
    id: innerId,
    index,
  };

  //drag, drop для сортировки ингредиентов в конструкторе
  const [{ isDrag }, drag] = useDrag({
    type: "innerIngr",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const [{ isHoverInner }, drop] = useDrop({
    accept: "innerIngr",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    hover: (hoveredItem) => {
      if (item.id !== hoveredItem.id) {
        onMove(item.index, hoveredItem.index);
        index = hoveredItem.index;
      }
    },
  });

  drag(drop(ref));

  const removeItem = (innerId) => {
    dispatch(removeIngredient(innerId));
    dispatch(decrementItem(ingrId));
  }
 
  return (
    <li ref={ref} className={cls.wrapDrag}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => removeItem(innerId)}
      />
    </li>
  );
}

BurgerInnerList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default BurgerInnerList;
