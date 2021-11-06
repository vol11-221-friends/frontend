import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import axios from "axios";


function App() {
  const[value,setValue] = React.useState("");
  var obj = {}
  const json = (text) =>{
    setValue(text)
    obj={"name":text}
    console.log(obj)
  }

  const tuusin = () =>{
    const res = axios.post('/user', obj)
    console.log(res);
  }

  return (
    <div className="App">

          <form>
            <input
             value={value}
             onChange = {event => json(event.target.value)}  />
             <input type="button" value="(submit)" onClick={tuusin} /> 
          </form>

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
