var modals = document.getElementById("sliderModal");
var scontent_image = document.getElementById("sliderModal__content");

function slideModal() {
      modals.style.display = "flex";
      modals.style.position = "fixed";
      scontent_image.src = this.children[0].src;

}


modals.onclick = function () {
  modals.style.display = "none";
};
