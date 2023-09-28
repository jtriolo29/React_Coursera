import './App.css';
import GiftCard from './components/GiftCard';
import Goals from './components/Goals';
import Greeting from './components/Greeting';
import Heading from './components/Heading';
import PureImpure from './components/PureImpure';
import RevisitUseState from './components/RevisitUseState';
import ToggleMessage from './components/ToggleMessage';
import WindowWidthDisplay from './components/WindowWidthDisplay';

function App() {
  const seperator = <p>**************************************</p>
  return (
    <div className="App">
      <Heading /> {seperator}
      <ToggleMessage /> {seperator}
      <WindowWidthDisplay /> {seperator}
      <PureImpure /> {seperator}
      <GiftCard /> {seperator}
      <Goals /> {seperator}
      <Greeting /> {seperator}
      <RevisitUseState /> {seperator}
    </div>
  );
}

export default App;
