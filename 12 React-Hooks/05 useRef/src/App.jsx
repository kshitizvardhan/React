import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(200)
  const mydiv = useRef()

  useEffect(() => {
    setTimeout(() => {
      mydiv.current.innerHTML=" Hi! your count is " + 10    // directly manipulating dom... instead of changing state.
    }, 5000);
  }, [])
  

  return (
    <div ref={mydiv}>
      Hi! your count is {count}
    </div>
  )
}

export default App
