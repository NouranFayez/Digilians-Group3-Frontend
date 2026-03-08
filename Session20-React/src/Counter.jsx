import { useState } from "react"

export const Counter= ()=>{
    // let count = 0
//   let returnState =   useState(0) // return array [currentValue , setterFunc]
//   let count = returnState[0]
//   let setCount = returnState[1]

  let [count , setCount] = useState(10)
    function increment(){
        // count++
        // console.log(count)
        setCount(count+1)
    }
    return (
        <>
            <h1>Counter {count} </h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}