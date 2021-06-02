import './App.css';
import Addtask from './Component/Addtask';
import { Filtre } from './Component/Filtre';
import Tasklist from './Component/Tasklist';

function App() {
  return (
    <div className="App">
    <div className="App_container">
    <h1 className="mytodoapp" style={{fontStyle:"oblique"}}> MY Todo App</h1>
      <Addtask/>
      <Tasklist/>
      <Filtre/> 
      </div>
    </div>
  );
}

export default App;