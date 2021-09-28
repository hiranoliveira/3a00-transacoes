import ProdCard from "../ProdCard";

const Sales = ({ products, setAlternate }) => {
  const vendas = products.filter((item) => item.quantity < 0);

  const fruitsSold = Math.abs(
    vendas.reduce((ValorAnterior, valorAtual) => {
      return valorAtual.quantity + ValorAnterior;
    }, 0)
  );

  const totalSaidas = vendas.reduce((acc, actualValue) => {
    return actualValue.price + acc;
  }, 0);
  return (
    <>
      <button onClick={() => setAlternate(false)}>Mostrar entradas</button>
      <h2>Saídas:</h2>
      {vendas.map((item, index) => (
        <ProdCard key={index} item={item} />
      ))}
      <h2>Total de frutas vendidas:</h2>
      <p>{fruitsSold}</p>
      <br />
      <h2>Valor total de saídas:</h2>
      <p>R$: {totalSaidas}</p>
    </>
  );
};

export default Sales;
