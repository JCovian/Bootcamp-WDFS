import { useState } from "react";

export default function InputToDo({setToDos}) {

  const [newTodo, setNewToDo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setToDos(currentTodos => [{title: newTodo, completed: false},...currentTodos]);

    setNewToDo("");
  }

  return (
    <form onSubmit={handleSubmit} className="my-4 mx-4">
         <input type="text" 
            className="form-control" 
            placeholder="Introduce un nuevo To-Do" 
            aria-label="Username" aria-describedby="basic-addon1" 
            onChange={e => setNewToDo(e.target.value)} 
            value={newTodo}
          />
    </form>
  )
}
