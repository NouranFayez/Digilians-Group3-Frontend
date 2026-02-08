// var ele = document.getElementById('div_element')
// var ele = document.querySelector('#div_element')

// ele.style.backgroundColor = "lightgrey"
// ele.style.color = "blue"


// ele.className = "card"

// ele.classList.add("card" , "padding" )
// ele.classList.remove("padding" )
// ele.classList.toggle("bg-light" )


// https://www.w3schools.com/jsref/dom_obj_event.asp


function handleClick() {
    var ele = document.querySelector('#div_element')
    ele.classList.toggle('border')
}


function handleChangeImage(){
    var img = document.getElementsByTagName('img')
    console.log(img)
    img[0].src = "images/2.jpg"

}

// document.querySelector('.div_style a')
// document.querySelectorAll('.div_style a')


function handleMouseEnter(){
    var div = document.querySelector("#custom-card")
    div.style.background = "lightgray"
}
function handleMouseLeave(){
    var div = document.querySelector("#custom-card")
    div.style.background = "teal"
}

function handleChange(type , element){
    // var div = document.querySelector("#custom-card");
    (type == 'mouseenter') ?
    element.style.background = "lightgray" :
    element.style.background = "teal"
}

function handleLink(ele){
    var list = document.querySelectorAll('li')
    list.forEach(item=>{
        item.style.color = "black"
    })
    ele.style.color = "blue"
}

var customInput = document.getElementById('userName')

customInput.addEventListener("input" , ()=>{
    console.log(customInput.value)
})

// var - let const 
