import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({ products, setProducts }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    quantity: yup.number().required("Campo obrigatório"),
    price: yup.number().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    setProducts([...products, data]);
  };

  return (
    <>
      <div>
        <h2>Cadastro entrada/saída</h2>
        <form onSubmit={handleSubmit(handleForm)}>
          <input placeholder="Fruta" {...register("name")} />
          {errors.name?.message}
          <br />
          <input
            placeholder="Qtd saída/entrada ex: 20 / -20"
            {...register("quantity")}
          />
          {errors.fruit?.message}
          <br />
          <input placeholder="Preço" {...register("price")} />
          {errors.fruit?.message}
          <br />
          <button type="submit">cadastrar</button>
        </form>
      </div>
    </>
  );
};

export default Form;
