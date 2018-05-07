var axios = require('axios');

function request(url) {
    return axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
}

module.exports = request;

