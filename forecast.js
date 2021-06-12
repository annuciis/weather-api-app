class Forecast{
    constructor(){
        this.key = '9C2jy9TXkeaR5ygne7owuigrHqSKd3p7';
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){

        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
    
        return { cityDets, weather }; //object shorthand version cityDets : cityDets, weather : weather
    
    }

    async getCity(city){

        const query = `?apikey=${this.key}&q=${city}`;
    
        const response = await fetch(this.cityURL+query);
        const data = await response.json();
    
       return data[0];

    }

    async getWeather(id){
        
    const query = `${id}?apikey=${this.key}`;

    const response = await fetch(this.weatherURL+query);
    const data = await response.json();

    return data[0];
    }
}


