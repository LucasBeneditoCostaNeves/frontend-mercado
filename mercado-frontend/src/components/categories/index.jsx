import img1 from "../../assents/alimenticio.png";
import img2 from "../../assents/higiene.png";
import img3 from "../../assents/limpeza.png";
import img4 from "../../assents/frios.png";
import img5 from "../../assents/bebidas.png";
import img6 from "../../assents/hortifrut.jpeg";
import { CategoryStyle } from "./style";

export const Categories = () => {
  function rolarParaPosicao(id) {
    const posicao = document.getElementById(id);
    posicao.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <CategoryStyle>
      <div className="special" onClick={() => rolarParaPosicao("Alimenticio")}>
        <img className="width150" src={img1} alt="" />
        <span className="position-unique special-span">Alimenticio</span>
      </div>
      <div onClick={() => rolarParaPosicao("Higiene Pessoal")}>
        <img src={img2} alt="4" />
        <span className="position-unique">Higiene Pessoal</span>
      </div>
      <div onClick={() => rolarParaPosicao("Limpeza")}>
        <img src={img3} alt="7" />
        <span>Limpeza</span>
      </div>
      <div onClick={() => rolarParaPosicao("Frios")}>
        <img src={img4} alt="" />
        <span>Frios</span>
      </div>
      <div onClick={() => rolarParaPosicao("Bebidas")}>
        <img src={img5} alt="" />
        <span>Bebidas</span>
      </div>
      <div onClick={() => rolarParaPosicao("Hortifruti")}>
        <img src={img6} alt="" />
        <span>HortiFruit</span>
      </div>
    </CategoryStyle>
  );
};
