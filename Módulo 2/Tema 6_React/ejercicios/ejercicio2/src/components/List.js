/*export default function List(props) {

  return (
    <>
      <h2>{props.categoria}</h2>
      <ul>
        {props.productos.map(product => {
          return (<li>{product.id} {product.producto} {product.marca} {product.modelo}. Price: {product.precio}€</li>)
        })}
      </ul>
    </>
  )
}*/

export default function List(props) {
  const {categoria, productos} = props;

  return (
    <>
      <h2>{categoria}</h2>
      <ul className="list-group">
        {productos.map(({id, producto, marca, modelo, precio}) => {
          return(<li key={id} className="list-group-item">{id} {producto} {marca} {modelo}. Precio: {precio}€</li>)
        })}
      </ul>
    </>
  )
}