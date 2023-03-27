import React, { useState, useEffect } from "react";
import { api } from "../../Api/Api";
import AppHeader from "../Appheader/AppHeader";
import BurgerConstructor from "../Burgerconstructor/BurgerConstructor";
import BurgerIngredients from "../Burgeringredients/BurgerIngredients";
import "./App.css"; 

function App() {

  const [burgerIngredients, setBurgerIngredients] = useState({ 
    productData: [],
    loading: false,
    error: false
  })


useEffect(() => {
  setBurgerIngredients(prevState => ({...prevState, loading: true}));
  api.getIngredients().then(data => {
    setBurgerIngredients(prevState => ({...prevState, loading: false, productData: data.data}))
  }).catch(error => setBurgerIngredients(prevState => ({...prevState, loading: false, error: true})))
}, [])


  return (
    <div className="App" id="App">
      <AppHeader />
      <main className="main">
        <BurgerIngredients burgerIngredients = {burgerIngredients.productData} />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
