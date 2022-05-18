import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <h1>Hola, mundo</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, tempore?</p>
      <FirstComponent title="Título enviado desde el padre" date="16 de agosto de 2025"></FirstComponent>
      <FirstComponent title="Otro título"/>
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

export default App;
