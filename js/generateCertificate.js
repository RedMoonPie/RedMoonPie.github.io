const GenerateCertificate = (Certificate) => {

    const certificate = document.createElement('div');
    certificate.classList.add('certificate_container');
    certificate.innerHTML = `
        <p class="certificate_title" >${Certificate.title}</p>
        <img class="certificate_img" src=${Certificate.cover}>
        
        
    `;
    return certificate;
}