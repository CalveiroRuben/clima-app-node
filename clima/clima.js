const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a97cbfdc01836a92d8de0a563ce01355&units=metric`)
    return resp.data.main.temp;

}


module.exports = {
    getClima
}