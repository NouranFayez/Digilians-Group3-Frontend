


// console.log(firstName)
// var firstName = "Nouran"
// var firstName = "Zein"
// console.log(firstName)
// console.log(lastName)
// let lastName = "Ahmed"
// lastName = "fghjklkjh"

// const age = 31
// age = 234567
// console.log(age)





// var ==> global scope & function scope
// let const ==> block scope

// function test(){
//     if(true){
//         var x = 20
//         let y = 100
//     }
//     console.log(x)
//     // console.log(y)
// }

// test()

// var address = "Nasr city"
// let age = 100
// console.log(window)


let myForm = document.querySelector('#myForm')
let tableBody = document.getElementById('tableBody')
myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log('submitting')
    console.log(e.target.elements.customUserEmail.value)
    console.log(e.target.elements.customUserName.value)
    let tr = document.createElement("tr")
    let tdName = document.createElement("td")
    let tdEmail = document.createElement("td")
    let tdAction = document.createElement("td")
    let btn = document.createElement('button')
    btn.innerText = "Edit User"
    tdName.innerText = e.target.elements.customUserName.value
    tdEmail.innerText = e.target.elements.customUserEmail.value

    tdAction.appendChild(btn)

    tr.appendChild(tdName)
    tr.appendChild(tdEmail)
    tr.appendChild(tdAction)

    tableBody.appendChild(tr)

    console.log(tr)
})




