let btn = document.querySelector(".search button");
let input = document.querySelector(".search input");
let place = document.querySelector(".place");
let temp = document.querySelector(".temp");
let perct_humid = document.querySelector(".perct_humid");
let wind = document.querySelector(".wind_speed");
let weather_img = document.querySelector(".weather_img img");
let error = document.querySelector(".error");
let weather = document.querySelector(".weather");

let Base_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=79403bf32e10ae2eb8715634569c33ca&q=";

btn.addEventListener("click",async()=>{
    place.innerHTML = input.value;
    if(input.value === ""){
        place.innerHTML = "New York";
        input.value = "New York";
    }
    let URL = `${Base_URL}`+`${input.value}`; 
    let response = await fetch(URL);
    let data = await response.json();
    if(data.cod === "404"){
        error.style.display = "block";
        weather.style.display = "none";
    }
    else{
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        perct_humid.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "Km/hr";

        if(data.weather[0].main == "Clouds"){
            weather_img.src = "weather_img/clouds.png" ;
        }
        else if(data.weather[0].main == "Snow"){
            weather_img.src = "weather_img/snow.png" ;
        }
        else if(data.weather[0].main == "Clear"){
            weather_img.src = "weather_img/clear.png" ;
        }
        else if(data.weather[0].main == "Rain"){
            weather_img.src = "weather_img/rain.png" ;
        }
        else if(data.weather[0].main == "Drizzle"){
            weather_img.src = "weather_img/drizzle.png" ;
        }
        else if(data.weather[0].main == "Mist"){
            weather_img.src = "weather_img/mist.png" ;
        }

        error.style.display = "none";
        weather.style.display = "block";
    }
    
});