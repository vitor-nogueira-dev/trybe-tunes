import { Div } from "./styles";

import React, { Component } from 'react';
import Header from "../Header/Header";

class NotFound extends Component {
  render() {
    return (
      <Div>
        <img src="https://media1.giphy.com/media/JfWPpXN0Dd4rEjYcH5/giphy.gif?cid=6c09b952a6awe4tv3ew94s01uxrqw4o62m5q5cywxrk5if72&rid=giphy.gif&ct=s" alt="Gif Not Found" />
        <Header/>
      </Div>
    );
  }
}

export default NotFound;