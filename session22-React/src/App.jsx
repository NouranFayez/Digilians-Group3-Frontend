// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { Layout } from './Layout/layout'
import { Navbar } from './shared/Navbar'
import { CustomRouter } from './Router/Router'

function App() {

  return (
    <>
      <RouterProvider router={CustomRouter}/>
    </>
  )
}

export default App
