import { useState, useEffect } from 'react';
import '../App.css';
import InputToDo from '../components/InputToDo';
import ToDoList from '../components/ToDoList';
import useFetch from '../hooks/useFetch';

function Ejercicio4() {

  const [toDos, setToDos] = useState([]);
  const API_TODOS ='https://jsonplaceholder.typicode.com/todos';

  useFetch(API_TODOS, setToDos);
  
  return (
    <div className="container App">
      <h2>ToDo List</h2>
      <InputToDo setToDos={setToDos} />
      <ToDoList toDos={toDos} setToDos={setToDos} />       
    </div>
  );
}

export default Ejercicio4;
