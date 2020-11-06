const API = 'https://run.mocky.io/v3/c17bb680-0f95-4a0d-9cc5-8949e83d142c';
const ul = document.getElementById('to_append');
const wrapper = document.getElementById('wrapper');
const div = document.createElement('div');
div.classList.add('description')

const GetSlides =  async () => {
    const data = await fetchData(API)

    const slideInfo = data.slides.mylist

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
        wrapper.appendChild(div);

    })
    
    
   
           
}   
GetSlides()

