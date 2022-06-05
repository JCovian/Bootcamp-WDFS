export default function ShoppingList(props) {
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