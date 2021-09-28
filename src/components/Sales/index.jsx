import ProdCard from "../ProdCard";

const Buys = ({ products, setAlternate }) => {
  const compras = products.filter((item) => item.quantity > 0);

  const totalEntry = compras.reduce((valorAnterior, valorAtual) => {
    return valorAtual.quantity + valorAnterior;
  }, 0);
  return (
    <>
      <button onClick={() => setAlternate(true)}>Mostrar saídas</button>
      <h2>Entradas:</h2>
      {compras.map((item, index) => (
        <ProdCard key={index} item={item} />
      ))}
      <h2>Total de entrada de frutas:</h2>
      <p>{totalEntry}</p>
    </>
  );
};

export default Buys;
