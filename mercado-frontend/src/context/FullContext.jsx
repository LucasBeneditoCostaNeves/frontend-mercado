//Importanto createContext e useState, já vem com o react
import { createContext, useEffect, useState } from "react";
import { api } from "../service";

//Criando nosso contexto
export const Context = createContext({});

//Função que vai englobar nosso contexto
export const ProviderContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [dataUser, setDataUser] = useState([]);
  const [focusProduct, setFocusProduct] = useState({});
  const [openFocusProduct, setOpenFocusProduct] = useState(false);
  const [cart, setCart] = useState([]);
  const [itens, setItem] = useState([]);
  const [focusCart, setFocusCart] = useState(false);
  const token = localStorage.getItem("@Token");
  const id = localStorage.getItem("@Id");

  async function getDataUser() {
    try {
      const response = await api.get("users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataUser(response.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  async function getProducts() {
    try {
      const response = await api.get("products/");
      setProducts(response.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  async function getCartUser() {
    try {
      const response = await api.get("users/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      const filter = data.filter((index) => index.user_id == id);
      setCart(filter);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Context.Provider
      value={{
        getDataUser,
        getProducts,
        products,
        setSearch,
        search,
        cart,
        setCart,
        focusProduct,
        setFocusProduct,
        openFocusProduct,
        setOpenFocusProduct,
        itens,
        setItem,
        getCartUser,
        focusCart,
        setFocusCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
