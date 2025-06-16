import React, { useState } from 'react';

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const style = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
    height: '100vh',
    padding: '20px',
    transition: '0.3s',
  };

  return (
    <div style={style}>
      <h2>{darkMode ? 'Dark Mode' : 'Light Mode'}</h2>
      <button onClick={toggleMode}>
        Toggle Mode
      </button>
    </div>
  );
};

export default Toggle;

