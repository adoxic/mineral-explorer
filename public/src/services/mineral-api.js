const BASE_URL = '/api';

export function getMinerals() {  
    const url = `${BASE_URL}/minerals`;

    return fetch(url)
        .then(res => res.json());

}


export function getMineral(name) {  
    const url = `${URL}/${name}`;
    return fetch(url)
        .then(response => response.json());
}