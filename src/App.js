
import { useState,useEffect,useRef } from 'react';
import './App.css';

function App() {
const [input,setinput]=useState("")
const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());


function handler(e){
  setinput(input.concat(e.target.name));
   
  }
  function Clear(){
    setinput("")
  }
 
function Remove(){
  setinput(input.slice(0,-1))
}
 function evaluate() {
  try {
    setinput(eval(input).toString());
  } catch (error) {
    setinput("Error");
  }

  }


  return (
    <div className="border">
    <div className="calc-app">
     <h1> Calculator</h1> 
      <form>
         <input type="text" value={input} ref={inputRef}  />
      </form>
      <div className="keypad">
       <button name="Clear" onClick={Clear}>Clear </button>
       <button name="Backspace" onClick={Remove}>Backspace</button>
       <button name="*" onClick={handler}>*</button>
       <button name="+" onClick={handler}>+</button>
       <button name="/" onClick={handler}>/</button>
       <button name="-" onClick={handler}>-</button>
       <button name="1" onClick={handler}>1</button>
       <button name="2" onClick={handler}>2</button>
       
       <button name="3" onClick={handler}>3</button>
       <button name="4" onClick={handler}>4</button>
       <button name="5" onClick={handler}>5</button>
       <button name="6" onClick={handler}>6</button>
       <button name="7" onClick={handler}>7</button>
       <button name="8" onClick={handler}>8</button>
       <button name="9" onClick={handler}>9</button>
       <button name="0" onClick={handler}>0</button>
       <button name="=" onClick={evaluate}>=</button>
      </div>
    </div>
    </div>
  );
}

export default App;
