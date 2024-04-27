import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const ParentComponent = () => {
     return <ChildComponent name = "Kshitiz" age = {18} />
  }

  const ChildComponent = (bhaiKaData) => {                      // So, the convention is to use "props", still can use anything like bhaiKaData
    return (
      <div>{bhaiKaData.name} is {bhaiKaData.age} years old</div>
    )
  }

  return(
    <div>
      <ParentComponent/>
    </div>
  )
}

export default App
