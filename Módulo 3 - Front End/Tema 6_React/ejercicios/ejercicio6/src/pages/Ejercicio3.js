import '../App.css';
import Agenda from "../components/Agenda";
import Formulario from "../components/Formulario";

function Ejercicio3() {

  return (
    <div className="container">
      <h2 className='my-4'>Agenda</h2>
      <Agenda />
      <h2 className="my-4">Nuevo contacto</h2>
      <Formulario />
    </div>
  );
}

export default Ejercicio3;