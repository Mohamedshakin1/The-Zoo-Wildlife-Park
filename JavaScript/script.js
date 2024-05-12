//home page

var image1= document.querySelector("#image1")    //It gets element of #image1 from document
var image2= document.querySelector("#image2")    //It gets element of #image2 from document
var image3= document.querySelector("#image3")    //It gets element of #image3 from document
var image4= document.querySelector("#image4")    //It gets element of #image4 from document
var image5= document.querySelector("#image5")    //It gets element of #image5 from document

//It gets element of #text1 from document, when mouse is over the #image1 then text of #text1 appears
image1.addEventListener("mouseover", function(){
    text1=document.querySelector("#text1")
    text1.style.display="block"
})

//It gets element of #text1 from document, when mouse is away from the #image1 then text of #text1 disapears
image1.addEventListener("mouseout", function(){
    text1=document.querySelector("#text1")
    text1.style.display="none"
})

//It gets element of #text2 from document, when mouse is over the #image2 then text of #text2 appears
image2.addEventListener("mouseover", function(){
    text2=document.querySelector("#text2")
    text2.style.display="block"
})

//It gets element of #text2 from document, when mouse is away from the #image2 then text of #text2 disapears
image2.addEventListener("mouseout", function(){
    text2=document.querySelector("#text2")
    text2.style.display="none"
})

//It gets element of #text3 from document, when mouse is over the #image3 then text of #text3 appears
image3.addEventListener("mouseover", function(){
    text3=document.querySelector("#text3")
    text3.style.display="block"
})

//It gets element of #text3 from document, when mouse is away from the #image3 then text of #text3 disapears
image3.addEventListener("mouseout", function(){
    text3=document.querySelector("#text3")
    text3.style.display="none"
})

//It gets element of #text4 from document, when mouse is over the #image4 then text of #text4 appears
image4.addEventListener("mouseover", function(){
    text4=document.querySelector("#text4")
    text4.style.display="block"
})

//It gets element of #text4 from document, when mouse is away from the #image4 then text of #text4 disapears
image4.addEventListener("mouseout", function(){
    text4=document.querySelector("#text4")
    text4.style.display="none"
})

//It gets element of #text5 from document, when mouse is over the #image5 then text of #text5 appears
image5.addEventListener("mouseover", function(){
    text5=document.querySelector("#text5")
    text5.style.display="block"
})

//It gets element of #text5 from document, when mouse is away from the #image5 then text of #text5 disapears
image5.addEventListener("mouseout", function(){
    text5=document.querySelector("#text5")
    text5.style.display="none"
})

