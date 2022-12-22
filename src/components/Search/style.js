import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: #fff;
    text-align: center;
    justify-content: center;
    font-family: "Corinthia", cursive;
    font-size: 50px;
  }
`;

export const Div = styled.div`
  color: white;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;

  input {
    width: 85%;
    height: 60px;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
    padding-left: 10px;
    outline: none;
    background: transparent;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: white !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  button {
    cursor: pointer;
    justify-content: center;
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 4px;
  }
  button:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
  h2 {
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    font-size: 20px;
  }
`;
