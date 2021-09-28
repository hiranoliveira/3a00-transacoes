import "./style.css";

const ProdCard = ({ item }) => {
  return (
    <>
      <ul className="divCards">
        <li>
          Nome: {item.name}, qtd: {item.quantity}, valor: R$ {item.price}
        </li>
      </ul>
    </>
  );
};

export default ProdCard;
