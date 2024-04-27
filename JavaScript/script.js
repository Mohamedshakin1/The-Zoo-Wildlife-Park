//home page

var image1= document.querySelector("#image1")
var image2= document.querySelector("#image2")
var image3= document.querySelector("#image3")
var image4= document.querySelector("#image4")
var image5= document.querySelector("#image5")
var button1=document.querySelector("#button1")
var FAQ=document.querySelector("#FAQ")

image1.addEventListener("mouseover", function(){
    text1=document.querySelector("#text1")
    text1.style.display="block"
})

image1.addEventListener("mouseout", function(){
    text1=document.querySelector("#text1")
    text1.style.display="none"
})

image2.addEventListener("mouseover", function(){
    text2=document.querySelector("#text2")
    text2.style.display="block"
})

image2.addEventListener("mouseout", function(){
    text2=document.querySelector("#text2")
    text2.style.display="none"
})

image3.addEventListener("mouseover", function(){
    text3=document.querySelector("#text3")
    text3.style.display="block"
})

image3.addEventListener("mouseout", function(){
    text3=document.querySelector("#text3")
    text3.style.display="none"
})

image4.addEventListener("mouseover", function(){
    text4=document.querySelector("#text4")
    text4.style.display="block"
})

image4.addEventListener("mouseout", function(){
    text4=document.querySelector("#text4")
    text4.style.display="none"
})

image5.addEventListener("mouseover", function(){
    text5=document.querySelector("#text5")
    text5.style.display="block"
})

image5.addEventListener("mouseout", function(){
    text5=document.querySelector("#text5")
    text5.style.display="none"
})


function prevent(event) {
    event.preventDefault()
}

