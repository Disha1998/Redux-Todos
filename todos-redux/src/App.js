
import './App.css';
import Addtodo from './Components/AddTodo/Addtodo';
import TodoList from './Components/TodoList/TodoList';
function App() {
  return (
    <div>
      <h1> Redux todos</h1>
      <Addtodo />
      <TodoList />
    </div>
  );
}

export default App;
