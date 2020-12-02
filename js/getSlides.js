const ul = document.getElementById('to_append');
const tp = document.getElementById('Third_page')
const div = document.createElement('div');
div.classList.add('description')
div.id = "description";

const  GetSlides = async () => {

        const slideInfo = projects.mylist;

            for await(const slide of slideInfo) {
                Slide = GenerateSlide(slide);
                ul.appendChild(Slide);
            }
           
            for await (const description of slideInfo) {
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
            }

            await initV();

}   

GetSlides();

