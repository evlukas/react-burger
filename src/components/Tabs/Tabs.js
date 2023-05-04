import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const Tabs = (props) => {

  return (
    <div style={{ display: "flex" }}>
      <Tab
        value="one"
        active={props.current === "one"}
        onClick={() => props.handleTabClick("one", props.refBun)}
      >
        Булки
      </Tab>
      <Tab
        value="two"
        active={props.current === "two"}
        onClick={() => props.handleTabClick("two", props.refMain)}
      >
        Соусы
      </Tab>
      <Tab
        value="three"
        active={props.current === "three"}
        onClick={() => props.handleTabClick("three", props.refSauce)}
      >
        Начинки
      </Tab>
    </div>
  );
};

export default Tabs;
