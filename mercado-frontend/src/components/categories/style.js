import { styled } from "styled-components";

export const CategoryStyle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;

  img {
    width: 65px;
    margin-right: 20px;
  }

  .width150 {
    width: 85px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 750px) {
    img {
      width: 80px;
    }

    .width150 {
      width: 110px;
    }
  }
`;
