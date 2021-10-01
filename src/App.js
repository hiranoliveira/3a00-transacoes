import { useState } from "react";
import "./App.css";
import AllProds from "./components/AllProds";
import Buys from "./components/Buys";
import Form from "./components/Form";
import Sales from "./components/Sales";

function App() {
  const [products, setProducts] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  const [alternate, setAlternate] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Display</h2>
        {alternate ? (
          <Buys products={products} setAlternate={setAlternate} />
        ) : (
          <Sales products={products} setAlternate={setAlternate} />
        )}
        <Form
          products={products}
          setProducts={setProducts}
          name={name}
          setName={setName}
          quantity={quantity}
          setQuantity={setQuantity}
          price={price}
          setPrice={setPrice}
        />
        <AllProds products={products} />
      </header>
    </div>
  );
}

export default App;
