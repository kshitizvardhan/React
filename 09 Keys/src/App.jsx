import React, { useState } from 'react'

let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Buy groceries",
      description: "Need to buy milk, eggs, and bread from the supermarket."
    },
    {
      id: 2,
      title: "Write React component",
      description: "Complete the header component for the new project."
    },
    {
      id: 3,
      title: "Walk the dog",
      description: "Take the dog for a walk in the park in the evening."
    }
  ]);

    function addTodo(){
      setTodos([...todos, {
        id: counter++,
        title: "Buy stationary",
        description: "Need to buy pen, pencil, and glue from the store."
      }])
    }

    return (
      <>
        <button onClick={addTodo}>Click To Add Todo</button>
        {todos.map(todo =>{
          return <Todos key={todo.id} title={todo.title} description={todo.description}></Todos>
          // need to add key, else giving warning on console.
        })}
      </>
    )
  }

const Todos = ({title,description}) => {
  return (
    <div>
      <h1> {title} </h1>
      <h5> {description} </h5>
    </div>
  )
}

export default App
