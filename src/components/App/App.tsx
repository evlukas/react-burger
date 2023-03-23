import React, { useState, useEffect } from "react";
import { api } from "../../Api/Api";
import AppHeader from "../Appheader/AppHeader";
import BurgerConstructor from "../Burgerconstructor/BurgerConstructor";
import BurgerIngredients from "../Burgeringredients/BurgerIngredients";
import "./App.css";

function App() {

const [burgerIngredients, setBurgerIngredients] = useState([]);

useEffect(() => {
  api.getIngredients().then((data) => {
    setBurgerIngredients(data.data);
  }).catch(error => console.log(error.message));
}, [])


  return (
    <div className="App" id="App">
      <AppHeader />
      <main className="main">
        <BurgerIngredients burgerIngredients = {burgerIngredients} />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
