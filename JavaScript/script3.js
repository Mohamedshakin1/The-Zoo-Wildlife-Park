var adult_ticket=document.querySelector("#adult-ticket")
var child_ticket=document.querySelector("#chilren-ticket")
var total=document.querySelector("#total_amount")

function amount(){
    var value1=adult_ticket.value
    var value2=child_ticket.value
    total.innerHTML="AED " + (value1*25 + value2*15)
}
