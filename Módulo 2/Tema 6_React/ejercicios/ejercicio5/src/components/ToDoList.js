import "./ToDoList.css";
export default function ToDoList({ toDos, setToDos }) {

  const crossItem = (e, index) => {
    if (e.target.tagName !== 'BUTTON') {
      const updateToDos = [...toDos];
      updateToDos[index].completed = !updateToDos[index].completed;
      setToDos(updateToDos);
    }
  }

  const removeToDo = (title) => setToDos(toDos.filter(toDo => toDo.title !== title));

  return (
    <div>
        <ul className="list-group list-group-flush">
            {toDos.map((toDo, index) => {
              return (
                <li className={`list-group-item d-flex justify-content-between ${toDo.completed ? 'completed' : ''}`} 
                  onClick={e => crossItem(e, index)} key={index}>
                  <span>{index}: {toDo.title}</span>
                  <button className="btn btn-danger" onClick={() => removeToDo(toDo.title)}>X</button>
                </li>
              )
            })
            }
        </ul>
    </div>
  )
}
