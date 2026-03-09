// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { About } from './about'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let list = ['Nasr city' , 'October' , "Maadi"]
  return (
    <About userName="Zein" age={10} addressList = {list} />
      
  )
}

export default App
