import React from "react";
import AppHeader from "./components/Appheader/AppHeader";
import BurgerConstructor from "./components/Burgerconstructor/BurgerConstructor";
import BurgerIngredients from "./components/Burgeringredients/BurgerIngredients";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className="main">
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
