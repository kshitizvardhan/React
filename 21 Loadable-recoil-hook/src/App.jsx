import react from "react";
import { useRecoilValue, useRecoilValueLoadable, useRecoilStateLoadable } from 'recoil'
import { todosAtomFamily } from "./store/atoms/todos";

function App() {
  return (
    <>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={5}/>
    </>
  )
}

const Todo = ({id}) => {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  // const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  if(todo.state == "loading"){
    return <div>Loading...</div>
  } else if (todo.state == "hasValue"){
    return(
      <>
        <h1>{todo.contents.title}</h1>
        <h4>{todo.contents.description}</h4>
      </>
    )
  } else if (todo.state == "hasError"){
    return <div>Error Occured, SERVER DOWN OR invalid URL, CHECK FOR TYPO </div>
  }

  return
}



export default App
