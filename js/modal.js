var modal = document.getElementById("myModal");
var myCertifications = [];
var ele_myCertifications = [];
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

// Get the <span> element that closes the modal


// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  modal.style.display = "none";
};
