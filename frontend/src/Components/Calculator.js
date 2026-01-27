import React, { useState } from 'react';
import { evaluate } from 'mathjs'; 
import "../../Components/Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => setInput(input + value); // conntecting buttons to input

  const calculate = () => {  //calulation function
    try {
      setResult(evaluate(input)); 
      setInput(""); 
    } catch {
      alert("Invalid expression");
    }
  };

  const clear = () => {  //refresh function
    setInput("");
    setResult(null);
  };

  return (
    <div>
      <h1 className="calculator-container">Calculator</h1>

      <div className="display">
        <p>Enter Number: {input || "0"}</p>
        <p>Result: {result !== null ? result : "-"}</p>
      </div>
      

      {/* Number pad */}
      <div className="button-grid">
        {[1,2,3,4,5,6,7,8,9,0].map(num => (
          <button key={num} className='number' onClick={() => handleClick(num.toString())}>{num}</button>
        ))}

      {/* Operators */}
        {["+", "-", "*", "/"].map(op => (
          <button key={op} className='operator' onClick={() => handleClick(op)}>{op}</button>
        ))}

      {/* Action buttons */}
      <button className='action' onClick={calculate}>=</button>
      <button className='action-c' onClick={clear}>Clear</button>
    </div>
    </div>
  );
}

export default Calculator;
