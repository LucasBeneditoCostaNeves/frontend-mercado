import { styled } from "styled-components";

export const DivStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;

  .white {
    background-color: white;
    width: 60%;
    max-height: 80%;
    min-width: 280px;
    max-width: 410px;
    margin: 0 auto;
    padding: 20px 10px;
    border-radius: 4px;
    position: relative;
    overflow-y: auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    width: 95%;
    margin: 3px auto 10px;

    h1 {
      font-weight: 600;
      font-size: 21px;
      color: var(--gray-2);
    }

    span {
      background-color: var(--alert-1);
      padding: 5px 8px;
      border-radius: 300px;
      color: var(--gray-10);
      font-weight: 700;
    }
  }

  .text-null {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .confirm {
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 40px;
    align-items: center;
    border: none;
    border-radius: 8px;
    background-color: var(--green-0);
    color: var(--gray-10);
    font-weight: 600;
    font-size: 16px;
  }
`;
