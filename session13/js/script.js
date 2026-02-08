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