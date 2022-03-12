import { useState } from "react";
import axios from "axios";

import currentDayForecast from '../dataprep/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../dataprep/getUpcomingDaysForecast';
import getCurrentDayForecast from '../dataprep/getCurrentDayForecast';


const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const UseForecast = () =>{
  const [isError, setError] = useState(false);
  const [isLoading, setloading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getWoeid = async(location)=>{
    const {data} = await axios(`${REQUEST_URL}/search`, {params: {query: location}});

    if(!data || data.length === 0){
      setloading(false);
      setError("Location not Found: Map does not contain all Locations");
      return;
    };

    return data[0];
  };

  const getForecastData = async (woeid) =>{
    const {data} = await axios(`${REQUEST_URL}/${woeid}`);
    if(!data || data.length === 0){
      setloading(false);
      setError("Something went wrong");
      return;
    }
    return data;
  };
  const gatherForecatData = (data)=>{
    const currDate =  getCurrentDayForecast(data.consolidated_weather[0], data.title);
    const upcomingForecast =  getUpcomingDaysForecast(data.consolidated_weather);
    const currDateDetails =  currentDayForecast(data.consolidated_weather[0]);

    setForecast({currDate, currDateDetails, upcomingForecast});
    setloading(false);

  };
  const submitRequest = async location =>{
    setError(false);
    setloading(true);
    const response = await getWoeid(location);
    if(!response?.woeid) return;
    const data = await getForecastData(response.woeid);
    if(!data) return;
    
    gatherForecatData(data);

  };
  return{
      isError,
      isLoading ,
      forecast,
      submitRequest,
  };
}

export default UseForecast;