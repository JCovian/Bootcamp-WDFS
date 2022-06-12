import Card from "../components/Card";

function Ejercicio1() {
  return (
    <div className="row">
      <Card 
        title="Título 1"
        paragraph="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsun dolor"
        href="https://covian.es"
        linkText="Más información"
        imgURL="https://i.stack.imgur.com/y9DpT.jpg"
      />
      <Card 
        title="Otro título"
        paragraph="Lorem ipsun dolor"
        href="https://google.com"
        linkText="Más información"
        imgURL="https://i.stack.imgur.com/y9DpT.jpg"
      />
    </div>
  );
}

export default Ejercicio1;