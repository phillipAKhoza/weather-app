import { useState } from "react";
import axios from "axios";

const BASE_URL = 'https://www.metaweather.com/api/location';
// const BASE_URL = 'http://api.weatherstack.com/';
// const ACCESS_KEY = process.env.My_ACCESS_KEY;
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const UseForecast = () =>{
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const submitRequest = async location =>{
      const response = await axios(`${REQUEST_URL}/search`, {params: {query: location}});
      // const response = await axios(`${BASE_URL}/curent? access_key = ${ACCESS_KEY}`, {params: {query: location}});
      console.log(response);
  }
return{
    isError,
    isLoading ,
    forecast,
    submitRequest,
}

}

export default UseForecast;