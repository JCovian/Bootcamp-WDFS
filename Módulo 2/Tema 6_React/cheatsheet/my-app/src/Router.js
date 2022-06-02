import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Record from './pages/Record';
import Error from './pages/Error';

export default function Router() {
  return (
    <div>
        <BrowserRouter>
          <NavLink exact to="/" activeClassName="active">Ir a inicio</NavLink>
          <NavLink to="/dashboard" activeClassName="active">Panel de control</NavLink>
          <NavLink to="/record/5" activeClassName="active">Record</NavLink>

          <Switch>
            
            <Route exact path="/" component={Index} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/record/:user" component={Record} />
            <Route exact path="/record" component={Record} />

            <Route component={Error} />
            
          </Switch>     
        </BrowserRouter>
    </div>
  );
}

