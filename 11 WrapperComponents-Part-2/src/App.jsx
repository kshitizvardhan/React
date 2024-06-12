import React from 'react'


function App() {

  return (
    <div style={{display: "flex"}}>
      <CardWrapper>
      <div> Hi There !!</div>
      </CardWrapper>
      <CardWrapper>
      <div style={{color: "Green"}}>This is Component 2, Example a Notification icon</div>
      </CardWrapper>
      <CardWrapper>
      <div style={{color: "Blue"}}>This is Component 3, Example a Follow icon</div>
      </CardWrapper>
      <CardWrapper>
      <div style={{color: "Pink"}}>This is Component 4, Example a Settings icon</div>
      </CardWrapper>
    </div>
  )
}

function CardWrapper({children}){
  // children is a variable through which we get access to what's inside the component...so now we can 
  // use <CardWrapper> Hi there! </CardWrapper>
  // get "Hi there!" from children variable and pass this as prop to wrapper to wrap around the content inside the CardWrapper Component
  return(
    <div style={{border: "2px Solid Black", height: "2rem", margin: "20px", padding: "10px", width: "fit-content", backgroundColor: "grey"}}>
      {children}
    </div>
  )
}

// So this is a MORE CLEANER SYNTAX to wrap a component around another component
/*

children Prop:
The children prop is a special prop in React that allows you to pass content between the opening and closing tags of a component.
In the CardWrapper component, children is used to access and render whatever is nested inside the CardWrapper tags.

Using the CardWrapper:
In the App component, various div elements are wrapped inside the CardWrapper component. This means the content inside each CardWrapper (e.g., <div> Hi There !!</div>) is passed to the CardWrapper component as children.
The CardWrapper then renders this content within a styled div, applying consistent styling and layout to all wrapped elements.

Advantages of This Approach:
Cleaner Syntax: This method is more intuitive and readable, especially when dealing with nested components.
Flexibility: The CardWrapper can wrap any type of content, making it versatile and reusable.

*/

export default App
