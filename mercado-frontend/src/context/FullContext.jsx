//Importanto createContext e useState, já vem com o react
import { createContext, useEffect, useState } from "react";
import { api } from "../service";

//Criando nosso contexto
export const Context = createContext({});

//Função que vai englobar nosso contexto
export const ProviderContext = ({ children }) => {
  const [number, setNumber] = useState(0);
  const [products, setProducts] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  async function getDataUser() {
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.get("users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataUser(response.data);
      console.log(response.data);
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
    <Context.Provider value={{ getDataUser, getProducts, products }}>
      {children}
    </Context.Provider>
  );
};
