import { styled } from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  position: relative;

  img {
    height: 100px;
    width: 100px;
  }

  h2 {
    width: 185px;
  }

  h3 {
    font-size: 17px;
  }

  button {
    position: absolute;
    bottom: 10px;
    right: 0px;
    background: var(--alert-1);
    padding: 7px 6px;
    border: none;
    border-radius: 6px;
    color: white;
  }

  .text {
    position: relative;
  }
`;
