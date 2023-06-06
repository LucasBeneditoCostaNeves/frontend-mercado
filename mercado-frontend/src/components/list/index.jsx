import { useContext, useEffect } from "react";
import { ListStyle } from "./style";
import { Context } from "../../context/FullContext";
import { Card } from "../card";

export const List = ({ title, category }) => {
  const { products } = useContext(Context);

  const filter = products.filter((element) => element.category == category);
  return (
    <ListStyle>
      <h2>{title}</h2>
      {products && <ul>{filter.map((element) => Card(element))}</ul>}
    </ListStyle>
  );
};
