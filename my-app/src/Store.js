import React from 'react';
function Store() {
  const isOpen = true;
  return (
    <div>
      <h2>Store is {isOpen ? 'Open' : 'Closed'}</h2>
    </div>
  );
}
export default Store;
