import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  width: 500px;
  padding-top: 20px;
  padding: 40px;
  padding-bottom: 20px;
  margin: 0 auto;
  box-shadow: 0 15px 25px rgba(255, 255, 255, 0.5);


  align-items: center;
  margin-top: 20px;
  color: #fff;
  
  .infos-user {
    width: 500px;
    height: 400px;

  }

  img {
    width: 180px;
    border-radius: 20px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    justify-content: center;
    /* position: relative; */
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
    /* margin-top: 40px; */
    letter-spacing: 4px;
    width: max-content;
    margin-top: 20px;
  }
  button:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
  input {
    width: 400px;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  input:focus {
    border-bottom: 1px solid #03e9f4;
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

  .user-box {
    position: relative;
  }

  .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }

  .user-box input:focus ~ label,
  .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
  @media (max-width: 750px) {
    width: 380px;
    text-align: center;

    input {
      width: 280px;
    }
  }
`;

export const DivInfosUser = styled.div`
  align-items: center;
  border: 3px solid transparent;
  border-image: linear-gradient(-180deg,#03e9f4,#141e30);
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 10px;

  h4 {
    margin-top: 20px;
  }

  @media (max-width: 750px) {
    width: 250px;
    text-align: center;
  }
`;
