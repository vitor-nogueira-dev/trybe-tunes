import styled from "styled-components";

export const DivBox = styled.div`
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 40px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  width: 400px;

  h2 {
    color: #fff;
    font-size: 50px;
    margin: 0 0 30px;
    padding: 0;
    text-align: center;
  }

  .user-box {
    position: relative;
  }

  input {
    padding: 10px 0;
    background: transparent;
    border: none;
    /* border: 2px solid red; */
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 16px;
    margin-bottom: 30px;
    outline: none;
    width: 100%;
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

  .user-box label {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    padding: 10px 0;
    pointer-events: none;
    transition: 0.5s;
  }

  .user-box input:focus ~ label,
  .user-box input:valid ~ label {
    color: #03e9f4;
    font-size: 14px;
    top: -20px;
    left: 0;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    color: #03e9f4;
    justify-content: center;
    display: flex;
    font-size: 16px;
    justify-content: center;
    letter-spacing: 4px;
    margin-top: 40px;
    overflow: hidden;
    padding: 10px 20px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
  }

  button:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }

  button span {
    position: absolute;
    display: block;
  }

  button span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  button span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  button span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  button span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
  .div-button {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 750px) {
    width: 300px;
    height: 550px;
  }
`;
