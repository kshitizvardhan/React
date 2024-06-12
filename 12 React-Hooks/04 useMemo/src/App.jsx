import { useEffect, useMemo, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState()

  const sum = useMemo(() => {
      let total = 0;
      for (let i = 1; i <= num; i++) {
        total += i;
      }
      return total;
  }, [num])

  return (
    <div>
      <input type="number" placeholder='Enter Number' onChange={(e)=>{setNum(e.target.value)}} />
      <div>The sum is {sum}</div>
      <button onClick={()=>{setCount(count+1)}}>Counter ({count})</button>
    </div>
    // useMemo comes in picture here that when we click on button whole App re-renders and so the for loop runs again...which is expensive operation to perform...so we can store it/ cache the previous output given and not computing it again and again on re-renders
  )
}

/*

Memoization with useMemo: useMemo takes two arguments: a function that returns a value, and a dependency array. The function is only re-executed when one of the dependencies changes. This helps in optimizing performance by avoiding expensive recalculations on every render.

Expensive Operation: Without useMemo, every change in state (like updating count) would cause the entire component to re-render, including recalculating the sum, which is unnecessary if num hasn't changed.

Why useEffect isn't ideal here:
In your initial implementation, you used useEffect to set the sum whenever num changes. This causes an extra render because setting state inside useEffect triggers a re-render. Using useMemo avoids this extra render by memoizing the result directly within the render process.

By using useMemo, you ensure that the sum calculation is performed efficiently, improving the performance of your component when dealing with potentially expensive operations.

*/

export default App
