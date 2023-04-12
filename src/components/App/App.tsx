import React, { useState, useEffect } from "react";
import AppHeader from "../Appheader/AppHeader";
import BurgerConstructor from "../Burgerconstructor/BurgerConstructor";
import BurgerIngredients from "../Burgeringredients/BurgerIngredients";
import "./App.css";
import { IngredientsContext } from "../../services/burgerContext";
import Spiner from "../spiners/Spiner";
import { api } from "../../api/api";

function App() {
  const [burgerIngredients, setBurgerIngredients] = useState({
    productData: [],
    loading: false,
    error: false,
  });

  useEffect(() => {
    setBurgerIngredients((prevState) => ({ ...prevState, loading: true }));
    api
      .getIngredients()
      .then((data) => {
        setBurgerIngredients((prevState) => ({
          ...prevState,
          loading: false,
          productData: data.data,
        }));
      })
      .catch((error) =>
        setBurgerIngredients((prevState) => ({
          ...prevState,
          error: true,
        }))
      )
      .finally(() => {
        setBurgerIngredients((prevState) => ({
          ...prevState,
          loading: false,
        }))
      });
  }, []);

  return (
    <div className="App" id="App">
      <AppHeader />
      <main className="main">
        {burgerIngredients.loading && <Spiner />}
        <IngredientsContext.Provider value={burgerIngredients.productData}>
          <BurgerIngredients />
          <BurgerConstructor />
        </IngredientsContext.Provider>
      </main>
    </div>
  );
}

export default App;
