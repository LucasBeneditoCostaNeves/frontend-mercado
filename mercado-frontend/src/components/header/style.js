import { styled } from "styled-components";

export const StyledHeader = styled.div`
  background-color: var(--main-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .club {
    width: 80px;
  }

  .profile {
    width: 38px;
  }

  .card {
    width: 44px;
    margin: 0px 10px 0px 10px;
  }

  .logo {
    width: 150px;
    margin-top: 7px;
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 25px;
    font-weight: 600;
    color: var(--gray-0);
  }

  h2 {
    color: var(--gray-0);
    font-weight: 700;
    font-size: 16px;
  }

  .input-search {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flex {
    display: flex;
    margin-top: 10px;
  }

  input {
    min-width: 140px;
    width: 40%;
    margin: none;
    border: none;
    height: 20px;
    border-radius: 4px;
  }

  input:focus {
    outline: none;
  }

  input:hover {
    border: none;
    cursor: pointer;
  }

  .input-component {
    margin-right: -15px;
  }

  .button-search {
    border: none;
    border-radius: 0px 6px 6px 0px;
    background-color: #18e02c;
    width: 25px;
    height: 23px;
    cursor: pointer;
  }

  @media (min-width: 530px) {
    .club {
      position: absolute;
      top: 0;
    }

    .div-images {
      position: absolute;
      top: 12px;
      right: 4px;
    }

    .logo {
      width: 170px;
    }

    .search {
      margin-top: 13px;
    }

    input {
      width: 190px;
      height: 27px;
    }

    .button-search {
      height: 30px;
      width: 32px;
    }

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 19px;
    }
  }
`;
