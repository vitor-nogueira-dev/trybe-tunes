import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  margin-bottom: 20px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-bottom: 1px solid white;
  border-right: 1px solid white;

  a {
    color: white;
    margin: 15px;
    padding: 8px;
  }
  a:hover {
    background: #03e9f4;
    color: #000;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
  .name {
    border: none;
    border-left: 1px solid white;
    color: #fff;
    font-size: 20px;
    margin-right: 10px;
    margin-top: 18px;
    padding-right: 5px;
    padding-left: 20px;
  }
  img {
    width: 100px;
    margin-bottom: 15px;
    padding: 0;
  }
  .name > img {
    width: 70px;
    border-radius: 50%;
    margin-right: 5px;
  }
  @media (max-width: 750px) {
    display: flex;

    a {
      padding: 3px;
      margin: 0;
    }
    img {
      width: 70px;
      margin-bottom: 15px;
      padding: 0;
    }
  }
`;
