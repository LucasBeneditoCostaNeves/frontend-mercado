import { StyledHeader } from "./style";
import club from "../../assents/clube.png";
import input from "../../assents/lupa.png";
import card from "../../assents/carrinho.png";
import logo from "../../assents/logo.png";
import onda from "../../assents/onda2.png";
import { Input } from "../input";
import { useContext } from "react";
import { Context } from "../../context/FullContext";

export const Header = () => {
  const { setSearch, search } = useContext(Context);
  const test = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <>
      <StyledHeader>
        <div className="top-header">
          <img className="club" src={club} />
          <div className="div-images">
            <img className="card" src={card} />
          </div>
        </div>
        <div className="search">
          <img className="logo" src={logo} alt="" srcset="" />
          <div className="input-search">
            <h1>CiberMarket</h1>
            <h2>na palma da sua mão</h2>
            <div className="flex">
              <input onChange={test} />
              <img className="button-search" src={input} />
            </div>
          </div>
        </div>
      </StyledHeader>
      <img className="onda" src={onda} alt="" srcset="" />
    </>
  );
};
