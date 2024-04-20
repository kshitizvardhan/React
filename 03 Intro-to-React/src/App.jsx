import { useState } from 'react'
// It imports the useState hook from the React library.

import './App.css'
//  imports a CSS file named "App.css"

function App() {
  const [count, setCount] = useState(0) // This initializes the state variable count with an initial value of 0
  // count variable iniitalised ,which will be aggressively looked upon.
  
  // Array syntax used here is called array destructuring.
  // const [count, setCount] = useState(0) does not initialize an array directly.
  // Instead, it initializes two variables (count and setCount) using the values extracted from the array returned by useState(0).

  // The useState hook is a function provided by React that allows functional components to have state. 
  // It returns an array with two elements: the current state value and a function to update that state. 
  // count is the the current state value, setCount is function to UPDATE that state.
  // By calling this function with a new value, React will re-render the component and update it with the new state.

  return (
    <div>
        <button onClick={() => setCount((count) => count+=1)}>
          count is {count}
        </button>
    </div>
  )
}

export default App
