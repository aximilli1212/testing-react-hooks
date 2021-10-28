import './App.css';
import {Button} from "./components/button/button";
import {Counter} from  "./components/counter/Counter"
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Button label="Click Me to Run Tests !!!" />
          <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
