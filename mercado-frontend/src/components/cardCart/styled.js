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
    display: -webkit-box;

    text-overflow: ellipsis;

    overflow: hidden;

    -webkit-line-clamp: 2;

    -webkit-box-orient: vertical;
  }

  h3 {
    margin-top: 8px;
    font-size: 17px;
    font-weight: 600;
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
