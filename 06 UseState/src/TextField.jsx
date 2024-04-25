import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hi');
  const [check, setCheckBox] = useState(false);

  function onInput(e){
    setText(e.target.value);
  }

  function onClick(){
    setCount(count + 1);
  }

  function onCheckBox(e){
    setCheckBox(e.target.checked);
  }

  return (
    <div>
      <button onClick={onClick}>You pressed me {count} times</button>
      <br />
      <br />
      <input type="text" onChange={onInput} placeholder={text}/>
      <p>You typed: {text}</p>
      <br />
      <br />
      <label>
        <input type="checkbox" onChange={onCheckBox} checked={check} /> Do you like Me?
      </label>
      <p>{check ? 'I like you' : 'No, i dont like you'}</p>
      
    </div>
  )
}

export default App


/*
React internally keeps track of which state variable corresponds to which state-setting function, so when you call setText, React knows that it should update the text state variable and not otherState or any other state variable.

This separation of concerns is one of the advantages of using React's state management system. You don't have to worry about manually managing updates to different state variables within the component; React takes care of that for you based on which state-setting function you call.
*/
