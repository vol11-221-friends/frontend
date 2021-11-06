import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  const[value,setValue] = React.useState("");

  return (
    <div className="App">

          <form>
            <input
             value={value}
             onChange={event => setValue(event.target.value)} />
          </form>
      <div>
        {value}
      </div>
    </div>
  );
}

export default App;
