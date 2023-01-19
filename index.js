import React from "react";
import ReactDom from 'react-dom';
import "./index.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Menu from "./Menu";
import Card from "./Card";


function App(){
    return<>
  
   <Menu/>

    </> 
}
ReactDom.render(<App/>,document.getElementById("root"));