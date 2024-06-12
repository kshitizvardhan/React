import React from 'react'


function App() {

  return (
    <div style={{display: "flex"}}>
      <CardWrapper innerComponent={<TextComponent/>} />
      {/* So pass the prop as component and you will get your other component wrapped inside it... this enhances style and keep design consistent*/}
      <CardWrapper innerComponent={<Component2/>} />
      <CardWrapper innerComponent={<Component3/>} />
      <CardWrapper innerComponent={<Component4/>} />
    </div>
  )
}

function CardWrapper({innerComponent}){
  return(
    <div style={{border: "2px Solid Black", height: "2rem", margin: "20px", padding: "10px", width: "fit-content", backgroundColor: "grey"}}>
      {innerComponent}
    </div>
  )
}

function TextComponent(){
  return (
    <div> Hi There !!</div>
  )
}

function Component2(){
  return(
    <div style={{color: "Green"}}>This is Component 2, Example a Notification icon</div>
  )
}
function Component3(){
  return(
    <div style={{color: "Blue"}}>This is Component 3, Example a Follow icon</div>
  )
}
function Component4(){
  return(
    <div style={{color: "Pink"}}>This is Component 4, Example a Settings icon</div>
  )
}

/*

CardWrapper Component: The CardWrapper component receives a prop called innerComponent, which is a JSX element. This component wraps the passed element with additional styles, ensuring a consistent design for all wrapped components.

Passing Components as Props: In the App component, innerComponent is passed as a prop to CardWrapper. This allows different components (TextComponent, Component2, Component3, Component4) to be rendered within the same styled wrapper.

THIS WAS ONE WAY OF DOING IT....BUT THIS IS SYNTAX IS NOT USED COMMONLY SEE THE NEW SYNTAX IN OTHER FOLDER AS PART-2

*/

export default App
