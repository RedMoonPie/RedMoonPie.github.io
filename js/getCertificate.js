//const API_certificates = 'https://run.mocky.io/v3/39d0ff39-0f2e-483c-abc9-7e9e1b694715';
const development = document.querySelector("#development");
const management = document.querySelector("#management");
const design = document.querySelector("#design");
const personal = document.querySelector("#personal");
async function GetCertificate (){

  for await(const certificate of certifications.development) {
    const Certificate = GenerateCertificate(certificate);
    development.appendChild(Certificate);
  }

 for await(const certificate of certifications.management) {
  const Certificate = GenerateCertificate(certificate);
  management.appendChild(Certificate);
}

  for await(const certificate of certifications.design) {
    const Certificate = GenerateCertificate(certificate);
    design.appendChild(Certificate);
  }

  for await(const certificate of certifications.personal) {
    const Certificate = GenerateCertificate(certificate);
    personal.appendChild(Certificate);
  }
  

}   

GetCertificate().then(() => Ready() )

