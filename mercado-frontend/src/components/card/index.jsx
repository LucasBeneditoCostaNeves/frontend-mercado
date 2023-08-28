import { useContext } from "react";
import { CardStyle } from "./style";
import { Context } from "../../context/FullContext";

export const Card = (data) => {
  const { setFocusProduct, setOpenFocusProduct } = useContext(Context);
  return (
    <CardStyle>
      <img src={data.image} />
      <h3>{data.name}</h3>
      <h5>R$ {data.price}</h5>
      <button
        onClick={() => {
          setFocusProduct(data);
          setOpenFocusProduct(true);
        }}
      >
        Comprar
      </button>
    </CardStyle>
  );
};
