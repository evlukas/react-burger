import { DndProvider } from "react-dnd";
import AppHeader from "../Appheader/AppHeader";
import BurgerConstructor from "../Burgerconstructor/BurgerConstructor";
import BurgerIngredients from "../Burgeringredients/BurgerIngredients";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";

function App() {

  return (
    <div className="App" id="App">
      <AppHeader />
      <main className="main">
      <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
      </DndProvider>
      </main>
    </div>
  );
}

export default App;
