const BASE_URL = '/api/minerals';

export function getMinerals() {  
    const url = `${BASE_URL}`;
    return fetch(url)
        .then(response => response.json());

}


export function getMineral(name) {  
    const url = `${URL}/${name}`;
    return fetch(url)
        .then(response => response.json());
}