

    var elements = document.querySelectorAll('.ele_container'),

    slideLength = elements.length,
    slideSize = elements[2].offsetWidth,
    firstSlide = elements[0],
    lastSlide = elements[slideLength - 1],
    indexa = 0,
    indexb = 1,
    indexc = 2,
    indexm = 3,
  
    clonefirst = firstSlide.cloneNode(true),
    clonelast = lastSlide.cloneNode(true);
    var i = -48;
    var ct = 1
      
    elements[0].classList.add('slide1');
    elements[1].classList.add('slide2');
    elements[indexb].style.top = 16+"px";
    elements[2].classList.add('slide3')

    
    var posInitiala = elements[0].offsetLeft;
        console.log(posInitiala)
    var posInitialb = elements[1].offsetLeft;
        console.log(posInitialb)
    var posInitialc = elements[2].offsetLeft;
        console.log(posInitialc)

    
    function changeSlide(direction)  {
        

        elements.forEach(element => element.classList.add('animation'))
        
        if(direction == 1){
            elements[indexa].classList.remove('slide1');
           
            elements[indexa].style.left = ct*((i - posInitiala-slideSize) ) + "px"
            indexa++
            elements[indexa].classList.add('slide1');

            elements[indexa].classList.remove('slide2');
            elements[indexb].style.top = 0+"px";
            elements[indexa].style.left = ct*( i - posInitialb) + "px"
            

            indexb++
            elements[indexb].style.left = ct*( i - posInitialb)-48 + "px"
            elements[indexb].classList.add('slide2');
            elements[indexb].style.top = 16+"px";

            indexc++
            elements[indexb].classList.remove('slide3');
            elements[indexc].style.left = ct*(i - posInitialb)-96 + "px"
            elements[indexc].classList.add('slide3');
            ct++;
        }
       /* if(direction == -1){
            elements[indexa].classList.remove("slide1");
            indexa--;
            elements[indexa].classList.add("slide1");
    
            elements[indexb].classList.remove("slide2");
            indexb--;
            elements[indexb].classList.add("slide2");

            elements[indexc].classList.remove("slide3");
            indexc--;
            elements[indexc].classList.add("slide3");

        }*/
        
    }