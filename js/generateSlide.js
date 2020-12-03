const GenerateSlide = (Slide) => {

    const slide = document.createElement('li');
    slide.classList.add('ele_container')
    var src;
  

    if (Slide.type == "python"){
        src = "../assets/icons/python.jpg"
    }
    else if(Slide.type == "c#"){
        src = "../assets/icons/csharp.png"
    }
    else if(Slide.type == "js"){
        src = "../assets/icons/javascript.png"
    }
    else if(Slide.type == "html"){
        src = "../assets/icons/css.png"
    }

    slide.innerHTML = `
        <span class="modal__container">
        <img class="elements" src=${Slide.cover}>
        <p class="slide_title" >${Slide.title}</p>
        </span>
        <a href="${Slide.gitlink}"> <img src="../assets/icons/github.png" class = "slide_programmingIcon"/></a>
        <img src="${src}" class = "slide_githubIcon"/> 
    `;
    return slide;
}