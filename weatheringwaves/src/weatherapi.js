const API_URL = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58";

async function getweather () {
    
    const response = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58")
    const data = await response.json();

    return data;
}

export { getweather };