import { CardStyle } from "./style";

export const Card = (data) => {
  return (
    <CardStyle>
      <img src={data.image} />
      <h3>{data.name}</h3>
      <h5>R$ {data.price}</h5>
      <button>Comprar</button>
    </CardStyle>
  );
};
