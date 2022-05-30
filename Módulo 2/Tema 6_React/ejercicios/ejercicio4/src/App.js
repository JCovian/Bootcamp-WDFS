import './App.css';
import InputToDo from './components/InputToDo';
import ToDoList from './components/ToDoList';

function App() {

  const initialToDList = [];


  return (
    <div className="container App">
      <h2>ToDo List</h2>
      <InputToDo />
      <ToDoList />
        
    </div>
  );
}

export default App;
