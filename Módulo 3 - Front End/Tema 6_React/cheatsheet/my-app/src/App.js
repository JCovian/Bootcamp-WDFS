import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
import Counter from "./components/Counter";

import UseEffectComponet from './components/UseEffectComponet';
import UseContextComponent from './components/UseContextComponent';
import { createContext, useState } from 'react';

import Router from './Router';

export const GlobalContext = createContext();

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <Router />

      {/* 
      {show && <UseEffectComponet />}
      <button onClick={() => setShow(!show)}>Show</button>
      <Counter />

      
      <h1>Hola, mundo</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, tempore?</p>
      <FirstComponent title="Título enviado desde el padre" date="16 de agosto de 2025"></FirstComponent>
      <FirstComponent title="Otro título"/>
      <SecondComponent />
      <ThirdComponent />

      <GlobalContext.Provider value = "Soy un string guardado en un contexto">
          <UseContextComponent />
      </GlobalContext.Provider> 
      */}
    </div>
  );
}

export default App;
