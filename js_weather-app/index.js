import { weatherKey, weatherUrl } from "./config.js";

// Search Controls
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
// Weather Icon
const weatherIcon = document.querySelector(".weather-icon")

// Right Now - Weather Update
async function checkWeather(city) {
  const response = await fetch(weatherUrl + city + "&appid=" + weatherKey);
  const data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  // Image Change by weather
  if(data.weather[0].main === "Clouds"){
    weatherIcon.src = "/js_weather-app/images/weather/place_penguin_cloud.png"
  } else if(data.weather[0].main === "Rain"){
    weatherIcon.src = "/js_weather-app/images/weather/place_penguin_rain.png"
  } else if(data.weather[0].main === "Thunderstorm"){
    weatherIcon.src = "/js_weather-app/images/weather/place_penguin_thunder.png"
  } else if(data.weather[0].main === "Drizzle"){
    weatherIcon.src = "/js_weather-app/images/weather/place_penguin_drizzle.png"
  } else if(data.weather[0].main === "Snow"){
    weatherIcon.src = "/js_weather-app/images/weather/place_penguin_snow.png"
  } else if(data.weather[0].main === "Extreme"){
    weatherIcon.src = "/js_weather-app/images/weather/place_penguin_tornado.png"
  } else{
    weatherIcon.src = "/js_weather-app/images/weather/place_penguin_clear.png"
  }
}

// Search Location Using checkWeather Function
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})

