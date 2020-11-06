    indexa = 0,
    indexb = 1,
    indexc = 2;
    var Nodelist = document.getElementsByClassName("ele_container")
    elements = [...Nodelist];
    elements[0].classList.add('slide1');
    elements[1].classList.add('slide2');
    elements[1].style.top = 16+"px";
    elements[2].classList.add('slide3')
    var ctd = 1
    var cti = 0
    
    function changeSlide(direction)  {
        

        var Nodelist = document.getElementsByClassName("ele_container")
        var wrapper = document.getElementById('wrapper'),
        elements = [...Nodelist],
        slideLength = elements.length,
        slideSize = elements[2].offsetWidth;

        elements.forEach(element => element.classList.add('animation'));
        
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
        
        }
        if(direction == -1){
            ctd--
            cti--
            
            
            elements[indexa].style.left = (cti*-slideSize) - 48+ "px"
            elements[indexa].style.top = 16+"px";
            
           
            elements[indexa].classList.remove('slide1');
            
            indexa--
            elements[indexa].style.left = (cti*-slideSize)  + "px"
            elements[indexa].classList.add('slide1');

            
            elements[indexb].style.top = 0+"px";
            elements[indexb].style.left = (cti*-slideSize)-96 + "px"
            elements[indexb].classList.remove('slide2');
            indexb--
            
            elements[indexb].classList.add('slide2');
            
            
            elements[indexc].style.left = (cti*-slideSize) +96 + "px"
            
            elements[indexc].classList.remove('slide3');
            indexc--
            elements[indexc].classList.add('slide3');
            
           
        }
        
     
        
    }
    function checkindex() { 
            if (indexa < 3 && indexb == 3 && indexc == 4){
                indexa = 3;
                indexb = 4;
                indexc = 5;
                ctd = 1;
                cti = 0;

            }
            



     }

