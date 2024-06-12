import React from "react"
import { useState } from "react"


function App() {
  const [title, setTitle] = useState("Kshitiz")
  // So whenever setTile() triggers then the parent component re-renders...which here is App
  // So App re-renders, with it it children components also re-renders

  return (
    <div>
      <button onClick={() => setTitle(Math.random().toString())}>Click Here to Change Title</button>
      <Header title={title}></Header>
      <Header title="Dummy"></Header>
      <Header title="Dummy"></Header>
      <Header title="Dummy"></Header>
      <Header title="Dummy"></Header>
      <Header title="Dummy"></Header>
    </div>
  )
}

const Header = React.memo(({title}) => {
  return (
    <div>
      My Name is {title}
    </div>
  )
})
// So now only dynamic Header is re-rendering, while other remains same as their props are unchanged.
// But STILL the App re-renders, as state is defined there....

export default App

/*

State and Rendering in React:
The useState hook is used to create a state variable (title) and a function to update it (setTitle).
Initially, title is set to "Kshitiz".
The setTitle function is used to update the title state.

Component Re-rendering:
When setTitle is called, it updates the title state with a new value (a random number converted to a string in this case).
Updating the state with setTitle triggers a re-render of the App component.
When the App component re-renders, all of its child components (Header components) also re-render. This is a key concept in React: state changes trigger re-renders, and re-renders propagate down the component tree.

Button Click Event:
The button in the App component has an onClick event handler that calls setTitle with a new random number.
When the button is clicked, setTitle is invoked, updating the title state and causing a re-render of the App component and all its children.

Rendering Header Components:
Each Header component receives a title prop.
The first Header component displays the dynamic title state.
The subsequent Header components display the static string "Dummy".

So we can prevent this unnecsessary re-rendering of static components with these further methods:
1) Can make a Separate Component, like DynamicHeader....and introduce the state variable there...so that only DynamicHeader component Re-Renders, and the App does'nt.
2) Use React.memo and put your component logic in that


Preventing Unnecessary Re-renders:

- Using React.memo:
Wrapping the Header component with React.memo optimizes rendering.
React.memo is a higher-order component that memoizes the component. It prevents re-renders if the props haven't changed.
In this case, only the Header with the dynamic title will re-render when title changes. The others won't re-render because their props remain unchanged.

- App Component:
The App component will still re-render because its state changes, but the static Header components will not re-render unnecessarily.

*/