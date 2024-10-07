import React, { useState, useEffect } from 'react';

function Fetcher() {
  const [user, setUser] = useState(''); 
  const [count, setCount] = useState(0); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });

    return () => {
      console.log('Component unmounted.');
    };
  }, []); 

 
  useEffect(() => {
    if (count > 0) {
      console.log(`Counter updated: ${count}`);
    }
  }, [count]); 

  return (
    <div style={{ padding: '20px' }}>
      <h1></h1>
      {user && user.map((user) => (
          <div key={user.id}>
            <p>{user.username}</p>
        </div>
            ))}
      
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
}

export default Fetcher;
