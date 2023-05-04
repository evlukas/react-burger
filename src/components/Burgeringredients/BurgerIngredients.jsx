import React, { useState, useRef, useEffect } from "react";
import cls from "./BurgerIngredients.module.css";
import IngredientHeader from "../IngredientHeader/IngredientHeader";
import Tabs from "../Tabs/Tabs";
import ListAllIngredients from "../ListAllIngredients/ListAllIngredients";

function BurgerIngredients() {
  const [current, setCurrent] = useState("one");
  const refBun = useRef(null);
  const refMain = useRef(null);
  const refSauce = useRef(null);
  const refIngrContent = useRef(null);

  useEffect(() => {
    const currentRef = refIngrContent.current;
    const handleScroll = () => {
      if (currentRef.scrollTop < refMain.current.offsetTop) {
        setCurrent("one");
      } else if (
        currentRef.scrollTop >= refMain.current.offsetTop &&
        currentRef.scrollTop < refSauce.current.offsetTop
      ) {
        setCurrent("two");
      } else if (currentRef.scrollTop >= refSauce.current.offsetTop) {
        setCurrent("three");
      }
    };
    currentRef.addEventListener("scroll", handleScroll);
    return () => {
      currentRef.removeEventListener("scroll", handleScroll);
    };
  }, [refIngrContent]);

  const handleTabClick = (value, ref) => {
    setCurrent(value);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={cls.burgerIngredients}>
      <IngredientHeader />
      <Tabs
        current={current}
        handleTabClick={handleTabClick}
        refBun={refBun}
        refMain={refMain}
        refSauce={refSauce}
      />
      <ListAllIngredients
        refBun={refBun}
        refMain={refMain}
        refSauce={refSauce}
        refIngrContent={refIngrContent}
      />
    </section>
  );
}

export default BurgerIngredients;
