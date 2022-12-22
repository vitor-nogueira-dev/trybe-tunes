import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  justify-content: center;
  color: #fff;
  margin-bottom: 20px;

  h3 {
  font-family: 'Corinthia', cursive;
  font-size: 60px;
  line-height: unset;
  text-decoration: underline 2px;
  }

  @media (max-width: 750px) {
    h3{
      font-size: 50px;
    }
  }

`;

export const DivInfosAlbum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 10px;

  /* flex-direction: column; */
  padding: 20px;
  /* background-color: #ccc; */
  img {
    width: 200px;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }
  
  h2 {
    font-size: 25px;
    padding: 5px;
    margin-left: 10px;
    text-align: center;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    width: 300px;


    img {
    width: 100px;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }
  
  h2 {
    font-size: 25px;
    padding: 5px;
    margin-left: 10px;
    text-align: center;
    
  }
  }
`;
export const DivMusics = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
`;

