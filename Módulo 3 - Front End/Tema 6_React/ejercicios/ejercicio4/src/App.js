import { useState, useEffect } from 'react';
import './App.css';
import InputToDo from './components/InputToDo';
import ToDoList from './components/ToDoList';
import useFetch from './hooks/useFetch';

function App() {

  const [toDos, setToDos] = useState([]);
  const API_TODOS ='https://jsonplaceholder.typicode.com/todos';

  //useEffect(() => {
  //fetch(API_TODOS)
  //.then(response => response.json())
  //.then(data => setToDos(data.slice(0, 20)));
  //
  //}, [])

  useFetch(API_TODOS, setToDos);
  

  return (
    <div className="container App">
      <h2>ToDo List</h2>
      <InputToDo setToDos={setToDos} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
        
    </div>
  );
}

export default App;
