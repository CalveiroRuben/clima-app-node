const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json`,
        params: { 'access_token': 'pk.eyJ1IjoicnViZW4tYXJpZWwiLCJhIjoiY2tnNmk1Zm53MDA2NTJ0bGIyenc2emswcyJ9.1-kIHVf3zDaEPUe3VOIQMQ' }
    });

    const resp = await instance.get();
    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lat = data.center[1];
    const lng = data.center[0];



    return {
        direccion,
        lat,
        lng,
    }

}

module.exports = {
    getLugarLatLng
}