
// useeffect hook
import { useState, useEffect } from 'react';

import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0)

  //useeffect
  //Important: Never manually change the state of any state hook
  useEffect(() => {
    alert('You have changed the counter to ' + counter)
  }, [counter]) // there is a second parameter in useeffect called a dependency array

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
    </div>
  );
}

export default App;
