import './App.css';
import {Button} from "./components/button/button";
import {Counter} from  "./components/counter/Counter"
import {HookCounter} from "./components/hookCounter/HookCounter";
function App() {
  return (
    <div className="App">
        <div>
            <HookCounter/>
        </div>

         <Button label="Click Me to Run Tests !!!" />
          <Counter/>
    </div>
  );
}

export default App;
