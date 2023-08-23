import { useContext } from "react";
import { Context } from "../../context/FullContext";
import { DivStyled } from "./styled";

export const CardCart = (element) => {
  const { cart } = useContext(Context);
  const test = cart.filter((element2) => element2.name == element.name).length;
  return (
    <DivStyled>
      <img src={element.image} />
      <div className="text">
        <h2>{element.name}</h2>
        <h3>{test}</h3>
        <button>Asasaas</button>
      </div>
    </DivStyled>
  );
};
