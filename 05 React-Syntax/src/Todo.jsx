
import {useState} from "react";

function Todo() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, ]); 

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map((todo) => {
            return (
            <CreateTodo title={todo.title} description={todo.description}></CreateTodo>
            )
        }
    )}

    </div>
  )
}

// Todo Component
function CreateTodo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default Todo