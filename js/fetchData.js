const REQUEST_COMPLETED = 4;
const STATUS_OK = 200;

const fetchData = (api_url) => {
    return new Promise((resolve,reject)=>{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET',api_url,true);
        xhttp.onreadystatechange = ()=>{
            if (xhttp.readyState === REQUEST_COMPLETED){

                (xhttp.status === STATUS_OK)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error'))

            }
        }
        xhttp.send();
    }) 
};

