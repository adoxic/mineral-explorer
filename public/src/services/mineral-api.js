const BASE_URL = '/api';

export function getMinerals() {  
    const url = `${BASE_URL}/minerals`;

    return fetch(url)
        .then(res => res.json());

}

export function getMineral(name) {  
    const url = `${BASE_URL}/minerals/${name}`;
    return fetch(url)
        .then(response => response.json());
}

export function addMineral(mineral) {
    const url = `${BASE_URL}/minerals`;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mineral)
    })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                return response.json().then(json => {
                    throw json.error;
                });
            }
        });
}

export function getTypes() {
    const url = `${BASE_URL}/types`;
    return fetch(url)
        .then(response => response.json());
}