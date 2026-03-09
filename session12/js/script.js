// var obj = {
//     fName : "Nouran",
//     lName : "Fayez",
//     getFullName : function(){
//         return `${this.fName} ${this.lName}` // return obj
//     },
//     getNames : ()=>{
//          return `${this.fName} ${this.lName}` // return window
//     }
// }

// console.log(obj.getNames());

// function test(){
//     console.log(this);
    
// }
// test()


// var a = 5
// b = "10" 
// console.log(a + parseInt(b))
// console.log(a - b)

// console.log(b / "5");

// DOM ==> document object model



console.log(document.getElementsByTagName("h2")); // return HTMLCOLLECTION 

console.log(document.getElementById('h1-element').innerText); // return element

var h1 = document.getElementById('h1-element')
h1.innerText = "Javascript"

var classElement = document.getElementsByClassName('text-blue') // retun HTMLcollection

console.log(classElement);

for (var i = 0; i < classElement.length; i++) {
    classElement[i].innerText = "Javascript "
    
}

var selector = document.querySelector(".bg-light a")
var selectors = document.querySelectorAll(".bg-light a") // Nodelist 
console.log(selectors)

selectors.forEach((item , i , arr)=>{
    item.innerText = "Ay 7aga"
})


async function test(){
return 5;
}
console.log(test());



