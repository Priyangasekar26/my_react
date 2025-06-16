import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [op, setOp] = useState('');
  const [result, setResult] = useState('');

  function Calculate() {
    let a = Number(num1);
    let b = Number(num2);

    if (op === '+') setResult(a + b);
    else if (op === '-') setResult(a - b);
    else if (op === '*') setResult(a * b);
    else if (op === '/') setResult(b !== 0 ? a / b : 'Cannot divide by 0');
    else setResult('Invalid');
  }

  function reset() {
    setNum1('');
    setNum2('');
    setOp('');
    setResult('');
  }

  return (
    <>
      <header>
        <h1 style={{ textAlign: "center" }}>Calculator</h1>
      </header>
      <div>
        <input value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Number 1" />
        <input value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Number 2" />
        <input value={op} onChange={(e) => setOp(e.target.value)} placeholder="Operator (+ - * /)" />
        <button onClick={Calculate}>Calculate</button>
        <button onClick={reset}>Reset</button>
        <p>Result: {result}</p>
      </div>
    </>
  );
}

export default Calculator;