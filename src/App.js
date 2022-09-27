import logo from './logo.svg';
import './App.css';

import TaskListComponent from './components/container/task_list';
import { ComponentA } from './components/container/componentA';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA></ComponentA>
      </header>
    </div>
  );
}

export default App;
