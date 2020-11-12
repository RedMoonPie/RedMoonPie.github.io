const API = 'https://run.mocky.io/v3/b435571f-a1ef-4a78-8020-2f1c0a1bac6b';
const ul = document.getElementById('to_append');
const tp = document.getElementById('Third_page')
const div = document.createElement('div');
div.classList.add('description')
div.id = "description";

const GetSlides =  () => {

    fetch(API)
        .then (res => res.json())
        .then (data => {

            const slideInfo = data.slides.mylist;
             slideInfo.map(slide => {
            Slide = GenerateSlide(slide);
            ul.appendChild(Slide);
        });
        slideInfo.map(description => {
            const d_div= document.createElement('div');
            d_div.classList.add('description_item');
            const p = document.createElement('p');
            const p2 = document.createElement('p');
            p2.classList.add("title_slide");
            p2.innerHTML = `${description.title}`;
            p.innerHTML = `/> ${description.description} < /`;
            
            d_div.appendChild(p);
            d_div.appendChild(p2);
            div.appendChild(d_div);
            tp.appendChild(div);
        })


        })
        .then (() => {
            initV();
        })
           
           
}   

GetSlides();