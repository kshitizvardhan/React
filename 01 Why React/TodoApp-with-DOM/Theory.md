# Why was React needed ?

## DOM Manipulation with Primitives: 
Before the advent of modern frontend frameworks like React, developers used to manipulate the Document Object Model (DOM) directly using primitive methods such as getElementById, createElement, appendChild, etc. While this approach works, it can become cumbersome and hard to maintain, especially for complex and dynamic web applications.

## Introduction of React: 
React was introduced to simplify the process of building dynamic user interfaces by abstracting away the complexities of direct DOM manipulation. React provides a declarative and component-based approach, where developers define UI components using JSX (a syntax extension for JavaScript), and React takes care of efficiently updating the DOM as needed.

## DOM Manipulation Under the Hood: 
Despite the abstraction provided by React, it's important to understand that React still ultimately manipulates the DOM. However, it does so in a more efficient and optimized manner compared to manual DOM manipulation. React uses a virtual DOM, which is an in-memory representation of the actual DOM, to minimize unnecessary re-renders and optimize updates.

## Syntax and Ease of Use: 
One of the key benefits of React is its intuitive syntax and ease of use. By providing a component-based architecture and leveraging JSX, React simplifies the process of building and maintaining complex UIs. Developers can focus more on writing declarative and reusable components, rather than worrying about low-level DOM operations.

In summary, React simplifies the process of building dynamic web applications by providing a higher-level abstraction over DOM manipulation, while still leveraging the underlying DOM manipulation for efficient rendering and updates. 