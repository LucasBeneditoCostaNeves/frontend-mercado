import { styled } from "styled-components";

export const CategoryStyle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  font-size: 13px;

  img {
    width: 65px;
    cursor: pointer;
  }

  .width150 {
    width: 85px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  }

  .special {
    position: relative;
    top: -8px;
  }

  .special-span {
    position: absolute;
    bottom: 0px;
    left: 5px;
  }

  span {
    cursor: pointer;
    font-weight: 600;
    color: var(--gray-0);
  }

  @media (min-width: 750px) {
    div {
      margin-right: 20px;
    }
    img {
      width: 80px;
      margin-right: 40px;
      margin: 0px auto;
    }

    .width150 {
      width: 110px;
    }

    .special-span {
      bottom: 8px;
      left: 17px;
    }

    span {
      font-size: 18px;
    }
  }
`;
