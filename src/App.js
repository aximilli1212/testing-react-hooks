import logo from './logo.svg';
import './App.css';
import {Button} from "./components/button/button";
import {Counter} from  "./components/counter/Counter"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <Button label="Click Me to Run Tests !!!" />
      </header>
    </div>
  );
}

export default App;
