import { weatherKey, weatherUrl } from "./config.js";


async function checkWeather(city) {
  const response = await fetch(weatherUrl + city + "&appid=" + weatherKey);
  const data = await response.json();
  console.log(data) 
}

checkWeather("Orlando");
