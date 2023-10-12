import "./App.css";
import ChildrenDemo from "./components/ChildrenDemo";
import CursorPosition from "./components/CursorPosition";
import DataRender from "./components/DataRender";
import Heading from "./components/Heading";
import LiveOrders from "./components/LiveOrders";
import RadioButtonLab from "./components/RadioButtonLab";
import RenderProps from "./components/RenderProps";
import SpreadOperator from "./components/SpreadOperator";
// import './App.css';

function App() {
  const seperator = <p>**************************************</p>;
  return (
    <div className="App">
      <Heading /> {seperator}
      <RenderProps /> {seperator}
      <DataRender /> {seperator}
      <CursorPosition /> {seperator}
      <SpreadOperator /> {seperator}
      <RadioButtonLab /> {seperator}
      <LiveOrders /> {seperator}
      <ChildrenDemo /> {seperator}
    </div>
  );
}

export default App;
