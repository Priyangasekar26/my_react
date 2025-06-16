import React, { useState } from 'react';

function LoginControl() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ name: 'User' });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
export default LoginControl; 
