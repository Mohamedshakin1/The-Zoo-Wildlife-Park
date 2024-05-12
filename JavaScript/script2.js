var button1=document.querySelector("#button1")    //It gets element of #button1 from document
var button2=document.querySelector("#button2")    //It gets element of #button2 from document
var button3=document.querySelector("#button3")    //It gets element of #button3 from document
var button4=document.querySelector("#button4")    //It gets element of #button4 from document
var button5=document.querySelector("#button5")    //It gets element of #button5 from document
var button6=document.querySelector("#button6")    //It gets element of #button6 from document

button1.addEventListener("click", function(){
    answer1=document.querySelector("#answer1")   //It gets element of #answer1 from document
    //When button is clicked if the answer is already appears then answer will dissapear and the button turns back to 0 degree and forms "+" button in 2 seconds.
    if (answer1.style.display === "block") {
        answer1.style.display = "none";
        button1.style.transform= "rotate(0deg)"
        button1.style.transition= "2s"
}  
    //When button is clicked if answer is hidden then answer will appear and the button turns into 45 degree and forms "x" button in 2 seconds.
    else { (answer1.style.display === "none") 
        answer1.style.display="block";
        button1.style.transform= "rotate(45deg)"
        button1.style.transition= "2s"
    }
}
)

button2.addEventListener("click", function(){
    answer2=document.querySelector("#answer2")  //It gets element of #answer1 from document
    //When button is clicked if the answer is already appears then answer will dissapear and the button turns back to 0 degree and forms "+" button in 2 seconds.
    if (answer2.style.display === "block") {
        answer2.style.display = "none";
        button2.style.transform= "rotate(0deg)"
        button2.style.transition= "2s"

}  
    //When button is clicked if answer is hidden then answer will appear and the button turns into 45 degree and forms "x" button in 2 seconds.
    else { (answer2.style.display === "none") 
        answer2.style.display="block";
        button2.style.transform= "rotate(45deg)"
        button2.style.transition= "2s"
    }
}
)

button3.addEventListener("click", function(){
    answer3=document.querySelector("#answer3")  //It gets element of #answer1 from document
    //When button is clicked if the answer is already appears then answer will dissapear and the button turns back to 0 degree and forms "+" button in 2 seconds.
    if (answer3.style.display === "block") {
        answer3.style.display = "none";
        button3.style.transform= "rotate(0deg)"
        button3.style.transition= "2s"

}  
    //When button is clicked if answer is hidden then answer will appear and the button turns into 45 degree and forms "x" button in 2 seconds.
    else { (answer3.style.display === "none") 
        answer3.style.display="block";
        button3.style.transform= "rotate(45deg)"
        button3.style.transition= "2s"
    }
}
)

button4.addEventListener("click", function(){
    answer4=document.querySelector("#answer4")  //It gets element of #answer1 from document
    //When button is clicked if the answer is already appears then answer will dissapear and the button turns back to 0 degree and forms "+" button in 2 seconds.
    if (answer4.style.display === "block") {
        answer4.style.display = "none";
        button4.style.transform= "rotate(0deg)"
        button4.style.transition= "2s"

}  
    //When button is clicked if answer is hidden then answer will appear and the button turns into 45 degree and forms "x" button in 2 seconds.
    else { (answer4.style.display === "none") 
        answer4.style.display="block";
        button4.style.transform= "rotate(45deg)"
        button4.style.transition= "2s"
    }
}
)

button5.addEventListener("click", function(){
    answer5=document.querySelector("#answer5")  //It gets element of #answer1 from document
    //When button is clicked if the answer is already appears then answer will dissapear and the button turns back to 0 degree and forms "+" button in 2 seconds.
    if (answer5.style.display === "block") {
        answer5.style.display = "none";
        button5.style.transform= "rotate(0deg)"
        button5.style.transition= "2s"

}  
    //When button is clicked if answer is hidden then answer will appear and the button turns into 45 degree and forms "x" button in 2 seconds.
    else { (answer5.style.display === "none") 
        answer5.style.display="block";
        button5.style.transform= "rotate(45deg)"
        button5.style.transition= "2s"
    }
}
)

button6.addEventListener("click", function(){
    answer=document.querySelector("#answer6")  //It gets element of #answer1 from document
    //When button is clicked if the answer is already appears then answer will dissapear and the button turns back to 0 degree and forms "+" button in 2 seconds.
    if (answer6.style.display === "block") {
        answer6.style.display = "none";
        button6.style.transform= "rotate(0deg)"
        button6.style.transition= "2s"

}  
    //When button is clicked if answer is hidden then answer will appear and the button turns into 45 degree and forms "x" button in 2 seconds.
    else { (answer6.style.display === "none") 
        answer6.style.display="block";
        button6.style.transform= "rotate(45deg)"
        button6.style.transition= "2s"
    }
}
)