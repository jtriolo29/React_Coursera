import './App.css';
import ChildrenDemo from './components/ChildrenDemo';
import Heading from "./components/Heading"

function App() {
  const seperator = <p>**************************************</p>
  return (
    <div className="App">
      <Heading /> {seperator}
      <ChildrenDemo /> {seperator}
    </div>
  );
}

export default App;
