import { styled } from "styled-components";

export const CardStyle = styled.li`
  width: 180px;
  min-width: 180px;
  border: solid #c3b4b4 1px;
  padding: 20px 10px;
  margin-right: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  img {
    width: 100px;
    display: flex;
    margin: 0px auto 10px;
    cursor: pointer;
  }

  button {
    border: none;
    background: rgba(0, 189, 19, 0.75);
    border-radius: 10px;
    padding: 12px 45px;
    margin: 0 auto;
    display: flex;
    color: var(--gray-9);
  }

  h3 {
    font-size: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 auto 10px;
    font-weight: 600;
    color: var(--gray-0);
  }

  h5 {
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: 700;
    color: var(--gray-0);
  }
`;
