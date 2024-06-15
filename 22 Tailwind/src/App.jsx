import React from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div className='text-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
        {/* So, tailwind is always mobile first styling */}
        <div className='bg-red-500 '>Hi there !!</div>
        <div className='bg-yellow-500 '>Hi there !!</div>
        <div className='bg-green-500 '>Hi there !!</div>
        <div className='bg-red-500 '>Hi there !!</div>
        <div className='bg-yellow-500 '>Hi there !!</div>
        <div className='bg-green-500 '>Hi there !!</div>
      </div>
    </>
  )
}

export default App
