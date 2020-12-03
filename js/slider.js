
    var ctd = 1;
    var cti = 0;
    var elements =[];
    var description = [];
    var u= document.getElementById("to_append");
    var items_des = [];
    var indexa;
    var indexb;
    var indexc;
    var indexm = 4;
    var Nodelist = [];
    function initV(){   

    indexa = 3;
    indexb = 4,
    indexc = 5;
    Nodelist = document.getElementsByClassName("ele_container");
    elements = [...Nodelist];
    var esize = elements.length;
    var description_items = document.getElementsByClassName("description_item");
    
    items_des= [...description_items];
    
    
    var dsize = items_des.length;

    elements[0].classList.add('slide1');
    elements[0].addEventListener("click", left);
    elements[1].style.top = -20+"px";
    elements[1].classList.add('slide2');
    elements[1].children[0].addEventListener("click", slideModal)
    elements[2].classList.add('slide3');
    elements[2].addEventListener("click", right);

    cloneSlides(elements[0],elements[1],elements[2],elements[esize - 3],elements[esize - 2],elements[esize - 1]);
    clonedescp(items_des[0],items_des[1],items_des[2],items_des[dsize - 3],items_des[dsize - 2],items_des[dsize - 1])

    }
    function clonedescp(f1,f2,f3,l1,l2,l3){
        description = document.getElementById("description");
        firstdclone = f1.cloneNode(true);
        seconddclone = f2.cloneNode(true);
        thirddclone = f3.cloneNode(true);
        
        description.appendChild(firstdclone);
        description.appendChild(seconddclone);
        description.appendChild(thirddclone);



        lastdclone = l1.cloneNode(true);
        lastdclone2 = l2.cloneNode(true);
        lastdclone3 = l3.cloneNode(true);
        
        description.insertBefore(lastdclone3,f1);
        description.insertBefore(lastdclone2,lastdclone3);
        description.insertBefore(lastdclone,lastdclone2);

        description_items = document.getElementsByClassName("description_item");
    
        items_des= [...description_items];

        items_des.forEach(item => {
            item.classList.add('hide');
            item.classList.add('abs');
        });
        items_des[indexm].classList.remove('abs');
        items_des[indexm].classList.remove('hide'); 
      

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
    function left() {
        changeSlide(-1);
    }
    function right() {
        changeSlide(1)
    }

    function changeSlide(direction)  {


        elements = [...Nodelist],
        slideSize = elements[4].offsetWidth;

        if(direction == 1){
            
            elements[indexa].removeEventListener("click", left)
            elements[indexa].classList.remove('slide1');
            elements[indexa].style.left = (ctd*-slideSize)-48 + "px";
            indexa++;
            elements[indexa].classList.add('slide1');
            elements[indexa].addEventListener("click", left)
            
           
            elements[indexa].classList.remove('slide2');
            elements[indexa].children[0].removeEventListener("click", slideModal)
            elements[indexa].style.left = (ctd*-slideSize) + "px";
            elements[indexa].style.top = 0+"px";
            //(i *ctd)  + "px"
            //48

            indexb++;
            
            
            elements[indexb].style.left = (ctd*-slideSize) - 48+"px";//(i *ctd)+ "px"
            elements[indexb].classList.add('slide2');
            elements[indexb].children[0].addEventListener("click", slideModal)
            elements[indexb].style.top = -20+"px";
            
            

            indexc++
            elements[indexb].removeEventListener("click", right)
            elements[indexb].classList.remove('slide3');
            elements[indexc].style.left = (ctd*-slideSize) - 96+"px"//(i *ctd)  + "px"
            elements[indexc].classList.add('slide3');
            elements[indexc].addEventListener("click", right)
            
        
            ctd++
            cti++
        
        }
        if(direction == -1){
            ctd--
            cti--
            
            
            elements[indexa].style.left = (cti*-slideSize) - 48+ "px"
            elements[indexa].style.top = -20+"px";
            
            elements[1].children[0].addEventListener
            elements[indexa].removeEventListener("click", left)
            elements[indexa].classList.remove('slide1');
            
            indexa--
            elements[indexa].style.left = (cti*-slideSize)  + "px"
            elements[indexa].classList.add('slide1');
            elements[indexa].addEventListener("click", left)
            
            
            elements[indexb].style.top = 0+"px";
            elements[indexb].style.left = (cti*-slideSize)-96 + "px"
            elements[indexb].classList.remove('slide2');
            //elements[indexb].removeEventListener("click", slideModal)
            elements[indexb].children[0].removeEventListener("click", slideModal)
            indexb--
            
            elements[indexb].classList.add('slide2');
            //elements[indexb].addEventListener("click", slideModal)
            elements[indexb].children[0].addEventListener("click", slideModal)
            
            elements[indexc].style.left = (cti*-slideSize) +96 + "px"
            
            elements[indexb].removeEventListener("click", right)
            elements[indexc].classList.remove('slide3');
            indexc--
            elements[indexc].classList.add('slide3');
            elements[indexc].addEventListener("click", right)
            
           
        }
        
        
        checkindex();
        changedesc(direction);

        
    }
    function checkindex() { 
       
            if (indexa == 0 && indexb == 1 && indexc == 2){
                elements.forEach(element => element.classList.remove('animation'));       
               
                for (let index = 0; index < elements.length-6; index++) {
                    changeSlide(1);
                }
         
                elements.forEach(element => element.classList.add('animation'));
                
            }
            
            if (indexa == elements.length-5 && indexb == elements.length-4 && indexc == elements.length-3){
                elements.forEach(element => element.classList.remove('animation'));       
                for (let index = 0; index < elements.length-6; index++) {
                    changeSlide(-1);
                }  
                elements.forEach(element => element.classList.add('animation'));                     
            }

            
     }
     function changedesc(direction){
        
        indexm = indexm + direction ;
        if(indexm )
        items_des.forEach(item => {
            item.classList.add('hide');
            item.classList.add('abs');
        });
            items_des[indexm].classList.remove('abs');
            items_des[indexm].classList.remove('hide');   
        

     }

