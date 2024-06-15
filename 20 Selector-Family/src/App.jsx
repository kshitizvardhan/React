import react from "react";
import { useRecoilValue } from 'recoil'
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
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return(
    <>
      <h1>{currentTodo.title}</h1>
      <h4>{currentTodo.description}</h4>
    </>
  )
}



export default App
