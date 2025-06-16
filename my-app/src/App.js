import React, { createContext,useContext} from 'react';
const UserContext=createContext();
function App(){
  const user={name:'Joe',age :20};
  return(
    <UserContext.Provider value={user}>
      <div>
        <h1>welcome</h1>
        <UserDetails></UserDetails>
      </div>
    </UserContext.Provider>
  );
}
function UserDetails(){
  const user=useContext(UserContext);
  return(
    <div>
      <h2>User Details:</h2>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
    </div>
  );
}
export default App;






