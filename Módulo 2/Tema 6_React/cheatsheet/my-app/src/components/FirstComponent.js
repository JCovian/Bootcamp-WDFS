import { Fragment } from "react";
import PropTypes from 'prop-types';

export default function FirstComponent(props) {
  //console.log(props, typeof props);
  //console.log(props.title);
  //console.log(props.date);

  /*const myFunction = function (evento) {
    console.log(evento);
  }*/

  const myFunction = function (bookID) {
    return function (event) {
      console.log(bookID, event.target);
    };
  };

  const mySimpleFunction = function (event) {
    // Process event
    console.log(event);
  }

  return (
    <Fragment>
      <h3>{props.title}</h3>
      <small>{props.date}</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, qui.</p>
      <button onClick={myFunction(1)}>Eliminar Book1</button>
      <button onClick={myFunction(2)}>Eliminar Book2</button>
      <button onClick={mySimpleFunction}>Eliminar Book2</button>
      {/*<button onClick={() => event => console.log(1,event)}>Toda la gestión inline</button>*/}
    </Fragment>
  )
}

FirstComponent.defaultProps = {
  //title: "Sin título",
  date: "Sin fecha",
  products: [],
}

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  products: PropTypes.array,
}

// export default FirstComponent; // Alternativa
// SOLO se puede un export default por archivo

function SecondComponent() {
  return (
    <>
      <h1>Soy otro componente</h1>
    </>
  )
}

function ThirdComponent() {
  return (
    <div>
      <h1>Soy otro componente más</h1>
    </div>
  )
}

export { SecondComponent, ThirdComponent }