import ProdCard from "../ProdCard";

const AllProds = ({ products }) => {
  return (
    <>
      <h2>Todas as movimentações:</h2>
      {products.map((item, index) => (
        <ProdCard key={index} item={item} />
      ))}
    </>
  );
};

export default AllProds;
