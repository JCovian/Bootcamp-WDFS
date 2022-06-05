import { useState, useContext } from 'react';
import { GlobalContext } from '../App';

export default function Formulario() {

  const {setContacts} = useContext(GlobalContext);

  const initialState = {
    name: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    postalCode: '',
    city: '' 
  }

  const [form, setForm] = useState(initialState);

  function handleInput(e) {
    const inputName = e.target.id;
    const newValue = e.target.value;
    setForm({...form, ...{[inputName]: newValue}});
  }

  function submit(e) {
    e.preventDefault();

    setContacts(currentContacts => [...currentContacts, form]);

    setForm(initialState); // Reinicia el formulario
  }

  return (
    <form className='form-group' onSubmit={submit}>
      <input id="name"        className='form-control mb-3'      value={form.name}        type="text" onChange={handleInput} placeholder='Introduce el nombre' />
      <input id="lastName"    className='form-control mb-3'      value={form.lastName}    type="text" onChange={handleInput} placeholder='Introduce los apellidos' />
      <input id="phoneNumber" className='form-control mb-3'      value={form.phoneNumber} type="text" onChange={handleInput} placeholder='Introduce el teléfono' />
      <input id="address"      className='form-control mb-3'      value={form.address}     type="text" onChange={handleInput} placeholder='Introduce la dirección' />
      <input id="postalCode"  className='form-control mb-3'      value={form.postalCode}  type="text" onChange={handleInput} placeholder='Introduce el código postal' />
      <input id="city"        className='form-control mb-3'      value={form.city}        type="text" onChange={handleInput} placeholder='Introduce la ciudad' />
      <input type="submit"    className='btn btn-success ml-auto' value="Registrar" />
    </form>
  )
}