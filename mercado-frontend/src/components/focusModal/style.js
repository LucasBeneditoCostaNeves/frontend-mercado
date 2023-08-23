import { styled } from "styled-components";

export const FocusModalStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;

  .div-white {
    background-color: white;
    width: 60%;
    min-width: 280px;
    max-width: 500px;
    margin: 0 auto;
    height: max-content;
    padding: 20px 10px;
    border-radius: 4px;
    position: relative;
  }

  img {
    width: 200px;
    height: 200px;

    display: flex;
    margin: 0 auto;
  }

  span {
    position: absolute;
    top: 18px;
    right: 18px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    background: var(--alert-1);
    padding: 5px 8px;
    border-radius: 30px;
    color: white;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    color: var(--gray-0);
    display: flex;
    text-align: center;
    margin: 0 auto;
    width: 80%;
  }

  h4 {
    display: flex;
    margin: 10px auto;
    justify-content: center;
    color: #bfbf09;
    font-size: 18px;
  }

  .left {
    border-radius: 6px 0px 0px 6px;
  }

  .right {
    border-radius: 0px 6px 6px 0px;
  }

  button {
    border: none;
    background-color: rgba(0, 189, 19, 0.75);
    color: var(--gray-6);
    padding: 13px 21px;
    width: 60%;
    max-width: 278px;
    margin: 10px auto;
    justify-content: center;
    display: flex;
    border-radius: 4px;
    min-width: 213px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .div-input {
    display: flex;
    justify-content: center;

    h5 {
      font-size: 20px;
      align-items: center;
      display: flex;
      padding: 0px 15px;
      background-color: var(--gray-5);
      border: solid 1px var(--gray-3);
      cursor: pointer;
    }

    h6 {
      padding: 10px 0px;
      background-color: #e2e2e2;
      width: 40%;
      max-width: 300px;
      display: flex;
      justify-content: center;
      font-size: 18px;
      font-weight: 600;
      border: solid 1px var(--gray-3);
    }
  }
`;
