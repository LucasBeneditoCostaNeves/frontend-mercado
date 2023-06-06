import { styled } from "styled-components";

export const ListStyle = styled.div`
  ul {
    margin-left: 20px;
    width: 93%;
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
`;
