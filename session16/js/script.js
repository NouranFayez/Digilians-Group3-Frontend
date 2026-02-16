let myForm = document.getElementById('myForm')

let handleError = (input , msg = "")=>{
    input.nextElementSibling.innerText = msg
}

let emailValidation = (element)=>{
    let inputValue = element.value
    // console.log(inputValue)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailRegex.test(inputValue))
    if(emailRegex.test(inputValue) == false) handleError(element , "invalid email")
    else handleError(element)

}



myForm.addEventListener('input' , (e)=>{
    // console.log(e)
    if(e.target.name == "userEmail"){
        emailValidation(e.target)
    }
})


let str =  "lorem ipsum dolor sit"

let Reg = /html/


let value = "abc567dfghjhgf123"

let regExp = /\d+/g

// console.log(Reg.test(str))
// console.log(regExp.test(value))

// console.log(value.match(regExp))

let email =  "nouran"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailRegex.test(email))




// username@domain.subdomain