import React, { useEffect, useState } from 'react';

function CounterExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count changed:', count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default CounterExample;