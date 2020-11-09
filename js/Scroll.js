
    var ctd = 1;
    var cti = 0;
    var elements =[];
    var u= document.getElementById("to_append");
    
    function initV(){   
    indexa = 3;
    indexb = 4,
    indexc = 5;
    var Nodelist = document.getElementsByClassName("ele_container");
    elements = [...Nodelist];
    var esize = elements.length;
    elements[0].classList.add('slide1');
    elements[1].classList.add('slide2');
    elements[1].style.top = 16+"px";
    elements[2].classList.add('slide3');

    cloneSlides(elements[0],elements[1],elements[2],elements[esize - 3],elements[esize - 2],elements[esize - 1]);
   

    }

    function cloneSlides(f1,f2,f3,l1,l2,l3){

        //clonar 3 primeras slides 
        firstslideclone = f1.cloneNode(true);
        firstslideclone.classList.remove('slide1');
        firstslideclone.classList.add('animation');
        

        secondslideclone = f2.cloneNode(true);
        secondslideclone.classList.remove('slide2');
        secondslideclone.classList.add('animation');
        secondslideclone.style.top = 0+"px";

        thirdslideclone = f3.cloneNode(true);
        thirdslideclone.classList.remove('slide3');
        thirdslideclone.classList.add('animation');
      
        u.appendChild(firstslideclone);
        u.appendChild(secondslideclone);
        u.appendChild(thirdslideclone);

        //clonar 3 ultimos slides
        
        lastslideclone = l1.cloneNode(true);
        lastslideclone.classList.add('animation');
        lastslide2clone = l2.cloneNode(true);
        lastslide2clone.classList.add('animation');
        lastslide3clone = l3.cloneNode(true);
        lastslide3clone.classList.add('animation');
        lastslide3clone.style.left = -48+"px";
         
        u.insertBefore(lastslide3clone,f1);
        u.insertBefore(lastslide2clone,lastslide3clone);
        u.insertBefore(lastslideclone,lastslide2clone);
        Nodelist = document.getElementsByClassName("ele_container")
        elements.forEach(element => element.classList.add('animation'));
    }
    

    function changeSlide(direction)  {

        

        
        elements = [...Nodelist],
        slideSize = elements[2].offsetWidth;

        

        if(direction == 1){
            
            
            elements[indexa].classList.remove('slide1');
            
    
            elements[indexa].style.left = (ctd*-slideSize)-48 + "px"
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
        
        
        checkindex();
     
        
    }
    function checkindex() { 
       
            if (indexa == 0 && indexb == 1 && indexc == 2){
                elements.forEach(element => element.classList.remove('animation'));       
               
                for (let index = 0; index < elements.length-6; index++) {
                    changeSlide(1);
                }
         
                elements.forEach(element => element.classList.add('animation'));
                
            }
            
            if (indexa == 9 && indexb == 10 && indexc == 11){
                elements.forEach(element => element.classList.remove('animation'));       
                for (let index = 0; index < elements.length-6; index++) {
                    changeSlide(-1);
                }  
                elements.forEach(element => element.classList.add('animation'));                     
            }



     }

