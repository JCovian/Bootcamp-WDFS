import { useState } from "react";
import '../App.css';
import Agenda from "../components/Agenda";
import Formulario from "../components/Formulario";

function App() {

  const initialContactState= [
    {name: "Jose", lastName: "Covián Ornia", address: "Laviada 10", city: "Oviedo", postalCode: 33011, phoneNumber: 615186914},      
    {name: "Javier", lastName: "Alvariño Mesa", address: "Lg Granas", city: "Villayón", postalCode: 33472, phoneNumber: 640572819},
    {name: "Felipe", lastName: "Borbón y Grecia", address: "Palacio de la Zarzuela", city: "Madrid", postalCode: 28001, phoneNumber: 654321123},
  ];

  const [contacts, setContacts] = useState(initialContactState);

  return (
    <div className="container">
      <h2 className='my-4'>Agenda</h2>
      <Agenda contacts = {contacts} setContacts = {setContacts} />
      <h2 className="my-4">Nuevo contacto</h2>
      <Formulario setContacts={setContacts}/>
    </div>
  );
}

export default App;