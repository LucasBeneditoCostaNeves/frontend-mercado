import { useContext } from "react";
import { Context } from "../../context/FullContext";
import { DivStyled } from "./style";
import { CardCart } from "../cardCart";

export const FocusCart = () => {
  const { cart, setFocusCart } = useContext(Context);
  const arraySemRepeticao = [];
  const nomesVistos = [];

  for (const item of cart) {
    if (!nomesVistos.includes(item.name)) {
      nomesVistos.push(item.name);
      arraySemRepeticao.push(item);
    }
  }
  console.log(arraySemRepeticao);

  return (
    <DivStyled>
      <div className="white">
        <div className="header">
          <h1>Carrinho</h1>
          <span className="close" onClick={() => setFocusCart(false)}>
            X
          </span>
        </div>
        {arraySemRepeticao &&
          arraySemRepeticao.map((element) => CardCart(element))}
      </div>
    </DivStyled>
  );
};
