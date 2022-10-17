import logo from './ToDo.png';
import './App.css';
import TodoForm from "./Components/TodoForm";
// import Todo from "./ToDos/Todo";
import TodoList from "./Components/TodoList";


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        TO DO LIST
          
      </header>
      <TodoList/>
    </div>
  );
}

export default App;
