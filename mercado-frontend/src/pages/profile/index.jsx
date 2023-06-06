import { useContext, useEffect } from "react";
import { ProfileStyle } from "./style";
import { Context } from "../../context/FullContext";
import { Header } from "../../components/header";
import { List } from "../../components/list";

export const ProfilePage = () => {
  const { getDataUser } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      getDataUser();
    }, 1000);
  }, []);

  return (
    <ProfileStyle>
      <Header />
      <List title="🍔 Alimenticio" category="Alimenticio" />
      <List title="🍹 Bebidas" category="Bebidas" />
      <List title="🧼 Limpeza" category="Limpeza" />
      <List title="🧽 Higiene Pessoal" category="Higiene Pessoal" />
      <List title="🍖 Frios" category="Frios" />
      <List title="🥕 Hortifruit" category="Hortifruti" />
    </ProfileStyle>
  );
};
