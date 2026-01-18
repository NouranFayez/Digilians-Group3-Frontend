console.log('from external')


// var - let - const 


var firstName = "Nouran"

// console.log(firstName)

// dataType ==> string , number , boolean (true / false) , undefined , null
var userAge = 31

var isGraduated = true

var h

// console.log(h)

var m = null

// var p = prompt("enter your name" , "userName")
// var c = ""
// console.log(p)

// Mathematical Operators (+ - / * ** % ++ --)
var n = 20
var m = 30
var sum = n + m
var k = "dfghjkjhgf"
// console.log(m / k) // NaN ==> Not a Number

// console.log(2**2)

// increment ++  decrement --

var b = 20
// console.log(b++) // 20
// console.log(b) // 21
// console.log(++b) // 22

// Comparison Operators (> >= < <= == === != !==)

var k = 20
var m = 20
var n = "20"

// console.log(m > k)
// console.log(m >= k)

// console.log(m == n) // value
// console.log(m === n) // value - data type

// console.log(m != n) //  value 
// console.log(m !== n) // value - data type 

//  logical Operators (&& || !)
var fName = "ali"
var lastName = "ahmed"

// console.log(fName == 'ali') // true
// console.log(lastName == 'Mohamed') // false

// console.log(fName == 'ali' &&  lastName == 'Mohamed' )
// console.log(fName == 'ali' ||  lastName == 'Mohamed' )

// console.log(!(fName == "Zein"))

// if condition

// if(condition/s){
//     true
// }
// else {
//     false
// }

// var p = prompt('enter your name')
// if(p == 'ahmed'){
//     var res = p
//      console.log(res)

// }
//     else{
//         console.log('invalid user')
//     } 



// var job = prompt('enter your Job')
// eng engineer 
// doc doctor
// dev developer

// if(job == 'eng' || job == "engineer"){
//     console.log('engineer')
// }
// else if(job == 'doc' || job == "doctor"){
//     console.log('doctor')
// }
// else if(job == 'dev' || job == "developer"){
//     console.log('developer')
// }
// else console.log('invalid job')



/////////// task 
// var degree = prompt('enter your degree')
// null
// empty String
// 90 - 100 ==> A
// 80 - 90 ==> B 
// 70 - 80 ==> c 
// < 70 ==> F
// > 100 ==> invalid degree


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)



// for(variable ; condition ; increment/decrement){
//     code ...
// }

// 1 - 10
for(var i = 1 ; i <= 10 ; i++ ){
    // console.log('javascript')
    if(i == 8){
        break
    } 
    else if(i == 3) continue
    console.log(i)
}


