import { StyledHeader } from "./style";
import club from "../../assents/clube.png";
import profile from "../../assents/perfil.png";
import card from "../../assents/carrinho.png";
import logo from "../../assents/logo.png";
import onda from "../../assents/onda2.png";
import { Input } from "../input";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="top-header">
          <img className="club" src={club} />
          <div className="div-images">
            <img className="profile" src={profile} />
            <img className="card" src={card} />
          </div>
        </div>
        <div className="search">
          <img className="logo" src={logo} alt="" srcset="" />
          <div className="input-search">
            <h1>CiberMarket</h1>
            <h2>na palma da sua mão</h2>
            <div className="flex">
              <Input />
              <button className="button-search">0</button>
            </div>
          </div>
        </div>
      </StyledHeader>
      <img className="onda" src={onda} alt="" srcset="" />
    </>
  );
};
