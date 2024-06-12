import { memo } from 'react'
import { useState, useCallback, useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // function inputFunction(){
  //   console.log("Hi there!!")
  // }

  // So instead of above, define like this
  
  const inputFunction = useCallback(()=>{
    console.log("Hi there!!")
  },[]) // Dependency array...change only when the value inside dependency array changed

  // By default react thinks that function declaration may have changed...so it re-renders the component.
  // useCallback is used to memoise functions...so that when its passed to components they know that whether it was changed or not

  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>Counter ({count})</button>
      <Demo inputFunction={inputFunction}></Demo>
      
    </div>
  
  )
}

const Demo = memo(({inputFunction}) => {
  console.log("child render"); // without useCallback you will see..it renders again and again when button is clicked
  // becoz the react thinks that the input function might have changed
  // but the input function is same as it was earlier....
})

export default App
