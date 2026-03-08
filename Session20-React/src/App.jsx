// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import {Welcome} from './Welcome'
import { Counter } from './Counter'

function App() {
  // javascript + xml

  // return React.createElement("h2" , null , "Welcome React")
  return (
    // React Fragment
    <>
    <Counter/>
    {/* <Welcome></Welcome> */}
    {/* <Welcome/> */}
      {/* <h2>React</h2>
      <div>
        <a href="">React</a>
      </div> */}
    </>

  )

}

export default App
