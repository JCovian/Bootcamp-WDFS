import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import './App.css';
import Ejercicio1 from  "./pages/Ejercicio1";
import Ejercicio2 from  "./pages/Ejercicio2";
import Ejercicio3 from  "./pages/Ejercicio3";
import Ejercicio4 from  "./pages/Ejercicio4";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <nav className="navbar px-5 py-3 bg-dark">
          <NavLink exact to="/" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio 1</NavLink>
          <NavLink to="/ejercicio2" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio 2</NavLink>
          <NavLink to="/ejercicio3" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio 3</NavLink>
          <NavLink to="/ejercicio4" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio 4</NavLink>
        </nav>
        

        <Switch>
          <Route exact path="/" component={Ejercicio1} />
          <Route path="/ejercicio2" component={Ejercicio2} />
          <Route path="/ejercicio3" component={Ejercicio3} />
          <Route path="/ejercicio4" component={Ejercicio4} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
