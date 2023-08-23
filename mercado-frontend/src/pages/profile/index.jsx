import { useContext, useEffect } from "react";
import { ProfileStyle } from "./style";
import { Context } from "../../context/FullContext";
import { Header } from "../../components/header";
import { List } from "../../components/list";
import { Categories } from "../../components/categories";
import { Card } from "../../components/card";
import { FocusModal } from "../../components/focusModal";
import { ToastContainer } from "react-toastify";
import { FocusCart } from "../../components/focusCart";

export const ProfilePage = () => {
  const {
    getDataUser,
    search,
    products,
    cart,
    openFocusProduct,
    focusProduct,
    getCartUser,
    focusCart,
    setFocusCart,
  } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      getDataUser();
      getCartUser();
    }, 1000);
  }, []);

  const searchValue = products.filter((element) =>
    element.name.includes(search)
  );

  return (
    <ProfileStyle>
      <Header />
      {search == "" && (
        <>
          <Categories />
          <List title="🍔 Alimenticio" category="Alimenticio" />
          <List title="🍹 Bebidas" category="Bebidas" />
          <List title="🧼 Limpeza" category="Limpeza" />
          <List title="🧽 Higiene Pessoal" category="Higiene Pessoal" />
          <List title="🍖 Frios" category="Frios" />
          <List title="🥕 Hortifruit" category="Hortifruti" />
        </>
      )}
      {search !== "" && (
        <div>
          <h4 className="title-search">Resultado das Pesquisas:</h4>
          <div className="divList">
            {searchValue && searchValue.map((element) => Card(element))}
          </div>
        </div>
      )}
      {search !== "" && searchValue && searchValue.lenght === 0 && (
        <>
          <span className="span">Nenhum Resultado Encontrado😥</span>
          <span>Tente pesquisar outra coisa 😎</span>
        </>
      )}
      {openFocusProduct && focusProduct && <FocusModal />}
      {focusCart && <FocusCart />}
      <ToastContainer />
    </ProfileStyle>
  );
};
