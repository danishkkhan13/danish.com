import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
  

ReactDOM.render(
    <>
<BrowserRouter>
<App/>
</BrowserRouter>
</>
,document.getElementById("root"));

// const fullname ={
//     fname:"DANISSH",
//     Lname: "khan",
// }
// const biodata ={
//     id:1,
//     ...fullname,
//      age: 26,
//      gender: 'male',
// }
// console.log(biodata);