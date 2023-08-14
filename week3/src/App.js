import './App.css';
import NavBar from "./components/NavBar"

function App() {
    const seperator = <p>**************************************</p>

  return (
    <div className="App">
      <h1>Welcome to Week 3</h1> {seperator}
      <NavBar />
    </div>
  );
}

export default App;
