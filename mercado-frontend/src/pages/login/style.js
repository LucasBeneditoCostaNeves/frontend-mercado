import styled from "styled-components";

export const LoginStyled = styled.div`
  img {
    display: flex;
    margin: 35px auto 12px;
    width: 190px;
  }

  form {
    background-color: var(--gray-9);
    width: 70%;
    max-width: 215px;
    margin: 0 auto;
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
    border: solid 1px var(--gray-2);
    margin-top: 20px;
  }

  h1 {
    font-weight: 600;
    display: flex;
    justify-content: center;
  }

  h2 {
    font-size: 13px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
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
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
  }

  a {
    margin-bottom: 10px;
    text-decoration: none;
    color: var(--gray-1);
    font-size: 14px;
    font-weight: 600;
    display: flex;
    justify-content: center;
  }

  span {
    font-size: 15px;
    display: flex;
    justify-content: center;
    color: var(--toastify-icon-color-error);
  }
`;
