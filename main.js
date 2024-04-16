const number = "#24";

let user = prompt ("Name");

let surname = prompt ("Surname");

let color = prompt ("Color_Prefer");

let password = user + surname + color + number

document.getElementById("titolo").innerHTML = password 

alert (password);
