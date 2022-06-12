import { createContext, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import './App.css';
import Ejercicio1 from  "./pages/Ejercicio1";
import Ejercicio2 from  "./pages/Ejercicio2";
import Ejercicio3 from  "./pages/Ejercicio3";
import Ejercicio4 from  "./pages/Ejercicio4";

export const GlobalContext = createContext();

function App() {

  const initialContactState= [
    {name: "Jose", lastName: "Covián Ornia", address: "Laviada 10", city: "Oviedo", postalCode: 33011, phoneNumber: 615186914},      
    {name: "Javier", lastName: "Alvariño Mesa", address: "Lg Granas", city: "Villayón", postalCode: 33472, phoneNumber: 640572819},
    {name: "Felipe", lastName: "Borbón y Grecia", address: "Palacio de la Zarzuela", city: "Madrid", postalCode: 28001, phoneNumber: 654321123},
  ];

  const [contacts, setContacts] = useState(initialContactState);

  const [toDos, setToDos] = useState([]);

  const API_TODOS ='https://jsonplaceholder.typicode.com/todos';

  useFetch(API_TODOS, setToDos, 20);

  return (
    <div className="App">

      <BrowserRouter>
        <nav className="navbar px-5 py-3 bg-dark">
          <NavLink exact to="/" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio 1</NavLink>
          <NavLink to="/ejercicio2" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio 2</NavLink>
          <NavLink to="/ejercicio3" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio 3</NavLink>
          <NavLink to="/ejercicio4" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio 4</NavLink>
        </nav>
        
        <GlobalContext.Provider value={{contacts, setContacts, toDos, setToDos}}>
          <Switch>
            <Route exact path="/" component={Ejercicio1} />
            <Route path="/ejercicio2" component={Ejercicio2} />
            <Route path="/ejercicio3" component={Ejercicio3} />
            <Route path="/ejercicio4" component={Ejercicio4} />
          </Switch>
        </GlobalContext.Provider>  
      </BrowserRouter>

    </div>
  );
}

export default App;
