import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './router/Router'
import { ProviderContext } from './context/providerContext'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

  <ProviderContext>
    <RouterProvider router={route}/>

  </ProviderContext>
    
    </>
  )
}

export default App
