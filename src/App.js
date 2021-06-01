import './App.css';
import Addtask from './Component/Addtask';
import { Filtre } from './Component/Filtre';
import Tasklist from './Component/Tasklist';

function App() {
  return (
    <div className="App">
    <div className="App_container">
      <Addtask/>
      <Tasklist/>
      <Filtre /> 
      </div>
    </div>
  );
}

export default App;