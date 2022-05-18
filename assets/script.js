/*****     use of prompt       *****/

let datafill = document.getElementById("list");
let input = prompt("Entre Your Name ?");
var card = document.createElement("div")
card.className = "text";
{
    if (input) {
        card.innerText = "Happy Birtday " + input;
    }
    else{
        card.innerText = "It's Not Your Bithday";
    }
    list.appendChild(card);
    }