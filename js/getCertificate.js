const API_certificates = 'https://run.mocky.io/v3/b435571f-a1ef-4a78-8020-2f1c0a1bac6b';
const fourth_page = document.getElementById("fourth_page");


const GetCertificate =  () => {

    fetch(API_certificates)
        .then (res => res.json())
        .then (data => {

            const slideInfo = data.slides.mylist;
             slideInfo.map(certificate => {
            const Certificate = GenerateCertificate(certificate);
            fourth_page.appendChild(Certificate);
            });

        })
        .then( () => {
            Ready();
        })
       
           
           
}   

GetCertificate();