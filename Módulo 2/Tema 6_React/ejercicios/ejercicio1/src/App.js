import './App.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card 
        imgURL="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image-300x225.png"
        title="Título 1"
        paragraph="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsun dolor"
        href="https://covian.es"
        linkText="Más información"
      />
    </div>
  );
}

export default App;