import { useState } from "react";
import axios from "axios";

const BASE_URL = 'https://www.metaweather.com/api/location';
// const BASE_URL = 'http://api.weatherstack.com/';
// const ACCESS_KEY = process.env.My_ACCESS_KEY;
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const UseForecast = () =>{
  const [isError, setError] = useState(false);
  const [isLoading, setloading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getWoeid = async(location)=>{
    const {data} = await axios(`${REQUEST_URL}/search`, {params: {query: location}});
    // const response = await axios(`${BASE_URL}/curent? access_key = ${ACCESS_KEY}`, {params: {query: location}});

    if(!data || data.length === 0){
      setloading(false);
      setError("Location not Found: Map does not contain all Locations");
      return;
    };

    return data[0];
  };

  const getForecastData = async (woeid) =>{
    const {data} = await axios(`${REQUEST_URL}/${woeid}`);
    // const response = await axios(`${REQUEST_URL}/${data[0].woeid}`);
    if(!data || data.length === 0){
      setloading(false);
      setError("Something went wrong");
      return;
    }
    return data;
  };
  const submitRequest = async location =>{
    setError(false);
    setloading(true);
    const data = await getWoeid(location);
    if(!data?.woeid) return;
    const forecastData = await getForecastData(data.woeid);
    if(!forecastData) return;
    console.log(forecastData);

  }
return{
    isError,
    isLoading ,
    forecast,
    submitRequest,
}

}

export default UseForecast;