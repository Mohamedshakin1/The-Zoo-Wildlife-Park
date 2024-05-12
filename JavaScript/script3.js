var adult_ticket=document.querySelector("#adult-ticket")     //It gets element of #adult_ticket from document
var child_ticket=document.querySelector("#chilren-ticket")   //It gets element of #children_ticket from document
var total=document.querySelector("#total_amount")            //It gets element of #total_amount from document

function amount(){
    var value1=adult_ticket.value  //it takes value from variable adult_ticket
    var value2=child_ticket.value  //it takes value from variable child_ticket
    total.innerHTML="AED " + (value1*25 + value2*15) //It calculates and inserts the total sum into the element total in document
}
