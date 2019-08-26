require('dotenv').config();
const request = require('superagent');

const BASE_URL = 'api/minerals';


module.exports = {
    getMineralData() {
        const url = `${BASE_URL}`;
        return request 
            .get(url)
            .then(res => {
                console.log(res);
                return res.body;
            });
            
    }
};

