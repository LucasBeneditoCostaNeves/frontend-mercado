import { styled } from "styled-components";

export const RegisterStyle = styled.div`
  img {
    display: flex;
    margin: 0 auto;
    width: 190px;
  }

  h1 {
    display: flex;
    justify-content: center;
  }

  h2 {
    display: flex;
    justify-content: center;
  }

  form {
    background-color: #ffffff;
    width: 60%;
    max-width: 215px;
    margin: 10px auto 50px;
    padding: 20px 35px;
    border-radius: 8px;
  }

  form > div {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  label {
    display: flex;
    position: absolute;
    top: 13px;
    left: 10px;
    background: var(--gray-9);
  }

  input {
    height: 40px;
    border-radius: 8px;
    border: solid 1px var(--gray-3);
    margin-top: 20px;
  }

  h1 {
    font-weight: 600;
  }

  h2 {
    font-size: 13px;
  }

  .button {
    display: block;
    margin: 0px auto 16px;
    height: 50px;
    width: 100%;
    margin-bottom: 16px;
    border: none;
    background: var(--main-color);
    color: var(--cinza-1);
    border-radius: 8px;
    margin-top: 10px;
    font-size: 16px;
  }

  a {
    margin-bottom: 10px;
    text-decoration: none;
    color: var(--cinza-4);
    font-size: 14px;
    font-weight: 600;
  }

  span {
    margin: 0 auto;
    color: var(--alert-1);
  }
`;
