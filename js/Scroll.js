

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
    var ctd = 1
    var cti = 0
    var acum = 0
      
    elements[0].classList.add('slide1');
    elements[1].classList.add('slide2');
    elements[indexb].style.top = 16+"px";
    elements[2].classList.add('slide3')

    console.log(slideSize);
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
    
            elements[indexa].style.left = (ctd*-slideSize) -48 + "px"
            indexa++
            elements[indexa].classList.add('slide1');


            elements[indexa].classList.remove('slide2');
            elements[indexa].style.top = 0+"px";
            elements[indexa].style.left = (ctd*-slideSize) +"px"//(i *ctd)  + "px"
            //48

            indexb++
            elements[indexb].style.left = (ctd*-slideSize) - 48+"px"//(i *ctd)+ "px"
            elements[indexb].classList.add('slide2');
            elements[indexb].style.top = 16+"px";

            indexc++
            elements[indexb].classList.remove('slide3');
            elements[indexc].style.left = (ctd*-slideSize) - 96+"px"//(i *ctd)  + "px"
            elements[indexc].classList.add('slide3');
            
            
            ctd++
            cti++
            console.log(`ctd+1  = ${ctd}`)
        }
        if(direction == -1){
            ctd--
            cti--
            
            elements[indexa].style.left = (cti*-slideSize) - 48+ "px"
            elements[indexa].style.top = 16+"px";
            
            
            indexa--
            elements[indexa].style.left = (cti*-slideSize)  + "px"
           

            elements[indexb].style.top = 0+"px";
            elements[indexb].style.left = (cti*-slideSize)-96 + "px"
            indexb--
           
            
            
            elements[indexc].style.left = (cti*-slideSize) +96 + "px"
            indexc--
            
            
            
            console.log(`ctd-1  = ${ctd}`)
           
            
            
           
        }
        
    }