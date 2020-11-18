//const API_certificates = 'https://run.mocky.io/v3/39d0ff39-0f2e-483c-abc9-7e9e1b694715';
const development = document.querySelector("#development");
const management = document.querySelector("#management");
const design = document.querySelector("#design");
const personal = document.querySelector("#personal");
async function GetCertificate (){
  //if fetching from api

  // fetch(API_certificates)
  //     .then (res => res.json())
  //     .then (data => {

  //         const certInfo = data.certifications.development;
  //          certInfo.map(certificate => {
  //         const Certificate = GenerateCertificate(certificate);
  //         development.appendChild(Certificate);
  //         });

  //     })

  await certifications.development.forEach(certificate => {
        const Certificate = GenerateCertificate(certificate)   
        development.appendChild(Certificate);
  })

  

}   

GetCertificate().then(() => Ready() )