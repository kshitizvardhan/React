import { useState } from 'react'
import './App.css'
import { Context } from './context'
import { useContext } from 'react'


function App() {
  const [count, setCount] = useState(0)

  // wrap anyone that wants to use the teleported value inside a .provider with a value u want to keep context of
  return (
    <>
      <Context.Provider value={{count, setCount}}>
        <Count count={count} setCount={setCount}/>
      </Context.Provider>
    </>
  )
}

const Count = () => {
  return (
    <div>
      <CountRenderer/>
      <Buttons/>
    </div>
  )
}

const CountRenderer = () => {
  const {count} = useContext(Context);  // teleported value here
  return (
    <div>
      {count}
    </div>
  )
}

const Buttons = () => {
  const {count, setCount} = useContext(Context);  // teleported value here
  return (
    <div>
      <button onClick={()=> {setCount(count+1)}}>Increase</button>
      <button onClick={()=> {setCount(count-1)}}>Decrease</button>
    </div>
  )
}

// This was that the react had offered... after this state management libraries like redux came into picture
// which provided not only the context part but also optimised overall react 

export default App
