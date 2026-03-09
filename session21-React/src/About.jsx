
import { useState } from "react"
import "./About.css"
export const About = ({ userName, age, addressList }) => {
    // console.log(props)
    // let userName = props.userName
    // let age = props.age
    console.log(addressList)
    // let flag = true
   let [flag , setFlag] = useState(true)
    function changeColor(){
        setFlag(!flag)
    }

    // let {userName , age} = props 
    return (
        <>
            <h2 style={{backgroundColor:'lightgray'}}>Welcome {userName}</h2>
            <h2 className={flag ? "text-blue" : "text-red"}>age {age}</h2>
            <button onClick={changeColor}>Change text color</button>
            <ul>
                {
                    // addressList.map((item)=>{
                    //   return   <li>{item}</li>
                    // })
                    addressList.map((item , i) => 
                        (<li className="text-blue" key={i}>{item}
                            
                        </li>) 

                    )

                }

                {/* <li>October</li>
                <li>Maadi</li> */}
            </ul>

        </>
    )
}