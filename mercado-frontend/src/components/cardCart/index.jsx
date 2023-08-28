import { useContext } from "react";
import { Context } from "../../context/FullContext";
import { DivStyled } from "./styled";
import { toast } from "react-toastify";
import { api } from "../../service";

export const CardCart = (element) => {
  const { cart, getCartUser } = useContext(Context);
  const token = localStorage.getItem("@Token");

  const numberItem = cart.filter(
    (element2) => element2.name === element.name
  ).length;

  const deleteCard = async (item) => {
    const name = {
      name: item,
    };
    console.log(name);
    try {
      await api.post("/users/cart/test", name);
      toast.success("Item Removido do Carrinho");
      getCartUser();
    } catch (error) {
      toast.error(error.response);
    }
  };

  return (
    <DivStyled>
      <img src={element.image} />
      <div className="text">
        <h2>{element.name}</h2>
        <h3>{numberItem}</h3>
        <button onClick={() => deleteCard(element.name)}>Remover</button>
      </div>
    </DivStyled>
  );
};
