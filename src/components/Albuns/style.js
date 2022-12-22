import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid white;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
  padding-top: 30px;
  margin-top: 10px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  width: 200px;
  background-color: #1a202c;
  padding: 20px;
  margin: 10px;
  box-shadow: 2px 2px 10px #034078;
  border-radius: 10px;

  img {
    --g: 4px;
    --b: 2px;
    --c: #03e9f4;

    padding: calc(var(--g) + var(--b));
    --_c: #0000 0 25%, var(--c) 0 50%;
    --_g1: repeating-linear-gradient(90deg, var(--_c)) repeat-x;
    --_g2: repeating-linear-gradient(180deg, var(--_c)) repeat-y;
    background: var(--_g1) var(--_p, 25%) 0, var(--_g2) 0 var(--_p, 125%),
      var(--_g1) var(--_p, 125%) 100%, var(--_g2) 100% var(--_p, 25%);
    background-size: 200% var(--b), var(--b) 200%;
    cursor: pointer;
    filter: grayscale(50%);
    transition: 0.3s;
  }
  img:hover {
    --_p: 75%;
    filter: grayscale(0%);
  }
  a {
    text-decoration: none;
    color: white;
    opacity: 1;
  }
  @media (max-width: 750px) {
    width: 175px;
    text-align: center;
  }
`;
