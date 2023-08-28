import { useContext, useState } from "react";
import { FocusModalStyled } from "./style";
import { Context } from "../../context/FullContext";
import { api } from "../../service";
import { toast } from "react-toastify";

export const FocusModal = () => {
  const { focusProduct, setOpenFocusProduct, itens, setItem, getCartUser } =
    useContext(Context);
  const [number, setNumber] = useState(1);

  const token = localStorage.getItem("@Token");

  const addCard = async (item) => {
    try {
      for (let i = 0; i < number; i++) {
        await api.post("/users/cart", item, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        getCartUser();
      }

      toast.success("Item Adicionado no Carrinho");
    } catch (error) {
      console.log(error.response);
    }
    setOpenFocusProduct(false);
    setNumber(1);
  };

  return (
    <FocusModalStyled>
      <div className="div-white" onClick={() => {}}>
        <span onClick={() => setOpenFocusProduct(false)}>X</span>
        <img src={focusProduct.image} alt="imagem do produto" />
        <h3>{focusProduct.name}</h3>
        <h4>{focusProduct.category}</h4>
        <div className="div-input">
          <h5
            className="left"
            onClick={() => {
              if (number > 1) {
                setNumber(number - 1);
              }
            }}
          >
            -
          </h5>
          <h6>{number}</h6>
          <h5 className="right" onClick={() => setNumber(number + 1)}>
            +
          </h5>
        </div>
        <button onClick={() => addCard(focusProduct)}>
          Adicionar ao Carrinho
        </button>
      </div>
    </FocusModalStyled>
  );
};
