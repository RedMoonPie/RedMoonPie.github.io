
const button =document.getElementById("toggleButton");

button.addEventListener("click",toggleButton);

function toggleButton() {
    console.log("jolasd")
    var linked = document.querySelector(".linked");
    linked.classList.toggle("hideBtn")
}