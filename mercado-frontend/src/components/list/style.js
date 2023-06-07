import { styled } from "styled-components";

export const ListStyle = styled.div`
  ul {
    margin-left: 20px;
    width: 92%;
    display: flex;
    overflow-x: auto;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 27px;
    font-weight: 600;
    color: var(--gray-0);
    background: var(--main-color);
    padding: 7px 12px;
    width: max-content;
    border-radius: 10px;
    margin: 30px 0px 10px 20px;
  }

  /* Estilizando a barra de rolagem */
  ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  /* Estilizando o indicador da barra de rolagem */
  ::-webkit-scrollbar-thumb {
    background-color: var(--gray-1); /* Cor do indicador */
    border-radius: 4px; /* Raio do indicador */
  }

  /* Estilizando o fundo da barra de rolagem */
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Cor do fundo */
  }
`;
