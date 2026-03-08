

export const Welcome = ()=>{
    let userName = "Ahmed"
    let num = 20
    let flag = false



    function btnClick (){
        console.log('ay 7aga')
        // userName = "Mohamed"
    }

    return (
        <>
        <h2>Welcome Component</h2>
        <h1>Welcome {userName}</h1>
        <h2>num = {num + 50}</h2>


        {
            flag ? <h1>flag = true</h1> : <h1>flag = false</h1>
        }

        <button onClick={btnClick}>Click Here</button>

        <h2>Counter 0</h2>
        <button>increment </button>
     

        </>
    )
    
}

// export default Welcome