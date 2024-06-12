import { useState } from 'react'
import { useEffect } from 'react'


function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        const {todos} = json;
        setTodos(todos);
      })
  },[])
// Dependency array holds...when you want to again run the logic inside the useEffect 
/*

Dependency Array in useEffect

1) Empty Dependency Array ([]): If the dependency array is empty, the effect runs only once, after the initial render. It is similar to componentDidMount in class components. This is useful for fetching data, setting up subscriptions, or initializing values.

2) Specific Dependencies: If the dependency array contains one or more values, the effect runs every time any of those values change. This is useful for reacting to state or prop changes.

3) No Dependency Array: If you omit the dependency array altogether, the effect runs after every render, which can lead to performance issues if not handled properly.

*/

  return (
    <>
      {todos.map(todo => {
        return (
          <Todos key={todo.id} title={todo.title} description={todo.description}/>
        )
      })}
    </>
     
  )
}

function Todos({title, description}){
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  )
}

export default App
