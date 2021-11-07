import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [value, setValue] = React.useState("");
  const [appeal, setAppeal] = React.useState("");
  const [temp, setTemp] = React.useState("");

  var obj = {};
  const json = (text) => {
    setValue(text);
  };

  const skill = (text) => {
    setAppeal(text);
  };

  const tuusin = () => {
    obj = { gitname: value, appeal: appeal };
    console.log(obj);
    axios.post("http://6997-126-157-115-175.ngrok.io/", obj).then((res) => {
      setTemp(res.data.point);
      console.log(temp);
    });
  };

  return (
   
    <div className="App">
      <header style= {{textAlign:"center", height: 40, padding:20, background:"#CCFFFF"}}>
        <h2 style = {{color: 'black'}}>
        221の下痢ゲリラ
        </h2>
      </header>
      
      <form className="form">
        <div className="appealForm">
          <div>自己アピール</div>
          <textarea
            className="appealtextarea"
            value={value}
            rows="4"
            cols="30"
            onChange={(event) => json(event.target.value)}
          />
        </div>
        <div className="username">
          <div>githubのユーザー名</div>
          <input
            className="inputuser"
            value={appeal}
            onChange={(event) => skill(event.target.value)}
          />
          <input type="button" value="submit" onClick={tuusin} />
        </div>
      </form>
      <h1 className="score"> Score:{temp} </h1>

 
    </div>
  );
}

export default App;

/*function json(value){
  setValue(value)
  var obj = {"name":value}
  var json_str = JSON.stringify(obj)
  console.log(json_str)
}*/
