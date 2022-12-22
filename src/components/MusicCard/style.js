import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 800px;
  text-align: center;
  padding: 10px;

  .card-music {
    margin-bottom: 20px;
  }

  :hover {
    background: #03e9f4;
    color: #000;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 20px #03e9f4,
      0 0 60px #03e9f4;
  }
  @media (max-width: 750px) {
    width: 350px;
    .music--titulo {
      width: 600px;
      font-size: 15px;
    }
    .name--artist {
      display: none;
    }
    audio {
      width: 200px;
    }
  }
  audio {
    width: 1000px;
  }
  `;
