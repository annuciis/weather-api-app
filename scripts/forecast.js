const key = '9C2jy9TXkeaR5ygne7owuigrHqSKd3p7';

const getWeather = async(id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];

}


const getCity = async(city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();

   return data[0];
}


const updateCity = async(city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather }; //object shorthand version cityDets : cityDets, weather : weather

}
