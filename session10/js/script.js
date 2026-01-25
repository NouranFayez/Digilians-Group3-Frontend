var ids = [3, 5, 10, 6]
// for(var i = 0 ; i< ids.length ; i++){
//     console.log(ids[i])
// }
// ids.forEach((item , i , arr)=>{
//     // console.log(item)
//     // console.log(i)
//     // console.log(arr)
//     if(item > 6) console.log(item > 6)
// })

// ()=>{

// }
// var ids = [3 , 5, 10 , 20 ,  6]

// var element = ids.find((ele , ind , arr)=>{
//     return ele > 6
// })

// var element = ids.find((ele)=> ele > 6)
// var element = ids.find((ele)=> ele > 60) // undefined


// var index = ids.findIndex((ele)=> ele > 6)
// // var index = ids.findIndex((ele)=> ele > 60) // -1

// var newArray = ids.filter(item => item > 6)
// var newArray = ids.filter(item => item > 60) // []

// console.log(newArray)
// map ==> search

// var user = 
// ["Ahmed" , "Mohamed" , "Fayez" , "nasr city" , "October" , 70]

// var userObj = {
//     firstName : 'Ahmed' , 
//     lastName : 'Mohamed' ,
//     homeAddress : "Nasr city",
//     age : 70
// }

// console.log(userObj)
// console.log(userObj.age)
// console.log(userObj['age'])

// var user = 
// ["Ahmed" , "Mohamed" , "Fayez" , "nasr city" , "October" , 70]

// console.log(user[2])



var userObj = {
    firstName: 'Ahmed',
    lastName: 'Mohamed',
    fullName: function () {
        //   return userObj.firstName + " " + userObj.lastName
        // template string / literal
        return `${this.firstName} ${this.lastName}`
    },
    homeAddress: "Nasr city",
    age: 70,
    addressList: function (address) {
        // console.log(address)
        return {
            homeAddress: address,
            officeAddress: 'October'
        }
    }
}

// console.log(userObj.fullName());

// console.log(userObj.addressList("ay 7aga").officeAddress)
// console.log(userObj.addressList("ay 7aga").homeAddress)

// console.log(userObj.addressList('ay 7aga').homeAddress)



var user1 = {
    fName: 'Marwa',
    lName: "Ahmed",
    age: 20
}
var user2 = {
    fName: 'Nouran',
    lName: "Ahmed",
    age: 32
}

var users = [
    {
        fName: 'Marwa',
        lName: "Ahmed",
        age: 20
    },
    {
        fName: 'Nouran',
        lName: "Ahmed",
        age: 32
    }
]
var result = users.find((item)=> item.age == 20)
var ind = users.findIndex((item)=> item.age == 20)
console.log(result.age)
console.log(ind)

result.age = 50

users[ind].age = 100

console.table(users) // apply for array



// addUser() => name id balance
// editUserBalanceByID () ==> id , newBalance
// deleteUserById() ==> id