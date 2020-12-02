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

    slide.innerHTML = `
        <img class="elements" src=${Slide.cover}>
        <p class="slide_title" >${Slide.title}</p>
        <a href=""> <img src="../assets/icons/github.png" class = "slide_programmingIcon"/></a>
        <img src="${src}" class = "slide_githubIcon"/> 
    `;
    return slide;
}