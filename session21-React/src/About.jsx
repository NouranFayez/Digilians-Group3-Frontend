

export const About = ({ userName, age, addressList }) => {
    // console.log(props)
    // let userName = props.userName
    // let age = props.age
    console.log(addressList)

    // let {userName , age} = props 
    return (
        <>
            <h2>Welcome {userName}</h2>
            <h2>age {age}</h2>
            <ul>
                {
                    // addressList.map((item)=>{
                    //   return   <li>{item}</li>
                    // })
                    addressList.map((item , i) => 
                        (<li key={i}>{item}</li>) 
                    )

                }

                {/* <li>October</li>
                <li>Maadi</li> */}
            </ul>

        </>
    )
}