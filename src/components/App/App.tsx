import AppHeader from "../Appheader/AppHeader";
import BurgerConstructor from "../Burgerconstructor/BurgerConstructor";
import BurgerIngredients from "../Burgeringredients/BurgerIngredients";
import "./App.css";
import Spiner from "../spiners/Spiner";

function App() {

  return (
    <div className="App" id="App">
      <AppHeader />
      <main className="main">
          <BurgerIngredients />
          <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
