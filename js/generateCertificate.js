const GenerateCertificate = (Certificate) => {

    const certificate = document.createElement('div');
    certificate.classList.add('certificate_container');
    certificate.innerHTML = `
        <img class="certificate_img" src=${Certificate.cover}>
        <span class="certificate_title" >${Certificate.title}</span>
        
    `;
    return certificate;
}