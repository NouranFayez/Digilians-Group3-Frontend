// false and truthy values
// var test = 10
// var test = 0
// var test = -0
// var test = ""
// var test = "ghjk"
// var test = null
// var t 
// if(t) console.log('correct')
//     else console.log('wrong')


// prompt('enter your name')

// function ==> functionName
//              logic (body)
//              parameters (optional)
//              return value (optional)
//              call()


// function sum(){
//     var num1 = 10
//     var num2 = 30
//     var sumNums = num1 + num2
//     console.log(sumNums)
//     return num1 + num2
// }
// var res = sum()
// console.log(res)


function sum(num1 = 40 , num2 = 120){
    // console.log(num2)
    return num1 + num2
}

// console.log(sum(10 , 60))
// console.log(sum(100 , 60))
// console.log(sum(10 ))
// console.log(sum(10 , 500))

// prompt()


// function statement
function test(){
    return "javascript"
}
var t = test()
// function Expression
var info = function(){
    return 'ay 7aga'
}
// console.log(info())
// arrow function 
var userName = (num)=> num > 10

// console.log(userName(30))


// looping ==> function (startNum , endNum , BreakNum , ContNum)

// looping(1 , 20 , 17 , 4)
// looping(1)



/////////////// Array 

var Fname = "Tamer"
var lName = "Fayez"
var age = 40
var address = "Nasr city"

var userInfo = ["Tamer" , "Fayez" , 40 , "Nasr city" ]

console.log(userInfo[2]) // get item
userInfo[4] = true


console.log(userInfo.length)

userInfo[userInfo.length] = "Developer"


// Methods of Array

userInfo.push('Maadi' , false)
userInfo.unshift("Html")

userInfo.pop()
userInfo.shift()

// splice(index , deletedCount , item/s)
userInfo.splice(3 , 2 ) // remove
userInfo.splice(2 , 0 , "Css" , "Js" ) // add 
userInfo.splice(4 , 1 , 'React' , "html" ) // remove/add



console.log(userInfo)
console.log(userInfo.includes("Angular"))
console.log(userInfo.includes("React"))

var courses = ['Html' , "css" , "js"]