import React, { useState } from 'react';

// this is a component of the app
function App() {

  // useState hooks cannot be gated and must always be in order that you want to execute them in, so no IF, Functions or loops
    
  const [count, setCount] = useState(() => {
    console.log("run func, this only gets run once")
    return 4
  });

  const [theme, setTheme] = useState('blue');

  function decrementCount(){
    setCount(prevCount => prevCount - 1)
    setTheme('green');
  }

  function incrementCount(){
    setCount(prevCount => prevCount + 1)
    setTheme('red');
  }

  // when you use a variable within the HTML object your returning, you have to put it inside of {}
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
