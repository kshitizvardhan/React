import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count count={count} setCount={setCount}/>
    </>
  )
}

const Count = ({count, setCount}) => {
  return (
    <div>
      {count}
      <Buttons count={count} setCount={setCount}/>
    </div>
    // Assume for this, all state variables are defined in App
    // So the tree structure here is like
    // App --> Count --> Button
    // Button needs a state variable setCount...
    // So the variable need to be passed with the help of count as a prop...
    // The count will act as mediator who will pass the prop to Buttons
    // and then the buttons shall use it to update state..
    // But passing props can become highly verbose and inconvenient when you need to pass some prop deeply through the tree
    // The nearest common ancestor could be far away from the component that needs data, and lifting state up that high can lead to
    // situation called "prop drilling"
    // Example- (Component=C)
    // App --> C1 --> C3 --> C4 --> C5
    //          | 
    //          C2 --> C6 --> C7 --> C8 --> C9 --> C10 --> C11 --> C12
    // C1 is the lowest common ancestor possible as C5 and C12 uses same state variable..
    // C1 is the component where the state is defined.
    // So C12 demands a state variable defined...as you can see C1 is way farther 
    // So the prop shall be mediated through C2,C6,C7,C8,C9,C10,C11 to C12
    // So this is called "PROP DRILLING", this makes the code highly unreadable and verbose
    // To help in this, Context API's comes into the picture, also state management libraries like redux, recoil etc.
  )
}

const Buttons = ({count, setCount}) => {
  return (
    <div>
      <button onClick={()=> {setCount(count+1)}}>Increase</button>
      <button onClick={()=> {setCount(count-1)}}>Decrease</button>
    </div>
  )
}

export default App
