const API = 'https://run.mocky.io/v3/2ce9ded3-9356-4c9f-9347-eaa2f2a3c34f';
const ul = document.getElementById('to_append');
const tp = document.getElementById('Third_page');
const div = document.createElement('div');
div.classList.add('description')

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
            p.innerHTML = `${description.description}`;
            d_div.appendChild(p);
            div.appendChild(d_div);
            tp.appendChild(div);
        })


        })
        .then (() => {
            initV();
        })
           
           
}   

GetSlides();