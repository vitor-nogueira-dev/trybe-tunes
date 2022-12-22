import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  color: #fff;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 750px) {
    width: 350px;

    .music--titulo {
      width: 600px;
    }
  }
  audio {
    width: 1000px;
  }
`;

