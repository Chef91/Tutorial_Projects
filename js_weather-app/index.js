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
    weatherIcon.src = "/images/cloud.png"
  }else if(data.weather[0].main === "Rain"){
    weatherIcon.src = "/images/rain.png"
  }else if(data.weather[0].main === "Rain"){
    weatherIcon.src = "/images/rain.png"
  }else if(data.weather[0].main === "Rain"){
    weatherIcon.src = "/images/rain.png"
  }else if(data.weather[0].main === "Rain"){
    weatherIcon.src = "/images/rain.png"
  }else if(data.weather[0].main === "Rain"){
    weatherIcon.src = "/images/rain.png"
  }else{
    weatherIcon.src = "/images/rain.png"
  }
}

// Search Location Using checkWeather Function
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})

