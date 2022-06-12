import { createContext, useState } from 'react';
import { useFetch } from './hooks/useFetch';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import { UPCOMING_URL } from './settings';
import UpcomingList from './pages/UpcomingList';
import ErrorPage from './pages/ErrorPage';

export const GlobalContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState({ current: 1, total_pages: undefined });

  useFetch(UPCOMING_URL, setMovies, pages, setPages);

  return (
    <div className="App container">
      <BrowserRouter>
        <GlobalContext.Provider value={{movies, setMovies}}>
          <Switch>
            <Route exact path="/" component={UpcomingList} />
            <Route path="/Error" component={ErrorPage} />
          </Switch>
        </GlobalContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
