var modal = document.getElementById("myModal");
var myCertifications = [];
var content_image = document.getElementById("content_img");

function Ready() {
    myCertifications = document.querySelectorAll(".certificate_container");
    myCertifications.forEach((cert) => {

    cert.onclick = function () {
      modal.style.display = "flex";
      modal.style.position = "fixed";
      content_image.src = cert.children[1].src;
      
    };
  });
}


modal.onclick = function () {
  modal.style.display = "none";
};
