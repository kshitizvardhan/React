import { useState } from 'react'
import './App.css'

// By this type of state initialisation....react doesnt look at every variable as state variable
// let state = {
//   count: 0
// }

// You have to define it in a certain way, so that i can watch over it...
// Use the hook useState for state initialisation


function App() {
  const [count, setCount] = useState(0);  // so this is how you can make state variables


  function clickHandeler(){
    // could have also done as
    // count = count + 1;
    // But its not the correct way, correct way is to use the state update function, which here is setCount..originally assigned as 
    // 2nd element from the useState() --> array
    setCount(count + 1);    // as we update state variable, react re-renders the button component
  }

  return (
    <div>
      <button onClick={clickHandeler}>Counter {count}</button>
    </div>
  )
}

// npm run build is the command to compile/ transpile all the code to html,css,js
export default App
