
const button =document.getElementById("toggleButton");

button.addEventListener("click",toggleButton);

function toggleButton() {
    var linked = document.querySelector(".linked");
    linked.classList.toggle("hideBtn")
}