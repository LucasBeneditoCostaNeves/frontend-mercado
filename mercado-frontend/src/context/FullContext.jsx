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

  async function getDataUser() {
    const token = localStorage.getItem("@Token");
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
      console.log(response.data);
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
