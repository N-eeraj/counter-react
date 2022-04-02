import React, {useState} from 'react'

function App() {
  const [count, updateCount] = useState(0);

  function increment() {
    updateCount(prevCount => ++prevCount);
  }
  function decrement() {
    updateCount(prevCount => --prevCount);
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App;
