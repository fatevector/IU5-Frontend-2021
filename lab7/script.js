//const url = "https://openweathermap.org/current";
//const url = 'https://jsonplaceholder.typicode.com/users';
// docume

const city = document.getElementById("search-field");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const weatherImg = document.getElementById("weather-img");
const windDirection = document.getElementById("wind-direction");
const windSpeed = document.getElementById("wind-speed");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const searchButton = document.getElementById("search-button");

let city_name = city.value===""?"Moscow":city.innerHTML;
let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city_name + '&units=metric&lang=ru&appid=20d168cec6dd572a4b246df42e4646e7';
filling = (url) =>{
    return fetch(url).then(response => {
        if (response.ok){
            document.getElementsByClassName("error")[0].innerHTML="";
            return response.json();
        }
        else{
            return response.json().then(error=>{
                const e=new Error("Город не найден");
                e.data=error;
                document.getElementsByClassName("error")[0].innerHTML="Город не найден";
                throw e;
            });
        }
    }).then(res=>{
        document.getElementById("city").innerHTML=res.name; //установка имени города
        temp.innerHTML=res.main.temp>=0?"+" + res.main.temp:res.main.temp; //установка температуры
        [d1, ...d2]=res.weather[0].description;
        description.innerHTML=d1.toUpperCase().concat(...d2); //установка состояния погоды
        weatherImg.setAttribute("src",`img/${res.weather[0].icon}.png`); //изменение иконки по состоянию погоды
        switch (true){ //установка направления ветра
            case (res.wind.deg > 337.5 || res.wind.deg <= 22.5): windDirection.innerHTML="Северный";
            break;
            case (res.wind.deg > 22.5 && res.wind.deg <= 67.5): windDirection.innerHTML="Северо-Восточный";
            break;
            case (res.wind.deg > 67.5 && res.wind.deg <= 112.5): windDirection.innerHTML="Восточный";
            break;
            case (res.wind.deg > 112.5 && res.wind.deg <= 157.5): windDirection.innerHTML="Юго-Восточный";
            break;
            case (res.wind.deg > 157.5 && res.wind.deg <= 202.5): windDirection.innerHTML="Южный";
            break;
            case (res.wind.deg > 202.5 && res.wind.deg <= 247.5): windDirection.innerHTML="Юго-Западный";;
            break;
            case (res.wind.deg > 247.5 && res.wind.deg <= 292.5): windDirection.innerHTML="Западный";
            break;
            default: windDirection.innerHTML="Северо-Западный";
        }
        windSpeed.innerHTML=res.wind.speed; //установка скорости ветра
        humidity.innerHTML=res.main.humidity; //установка влажности
        pressure.innerHTML=Math.round(res.main.pressure*0.75)+" мм.рт.ст."; //установка давления
    })
}
filling(url);
searchButton.addEventListener("click", ()=>{
    city_name = city.value;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city_name + '&units=metric&lang=ru&appid=20d168cec6dd572a4b246df42e4646e7';
    filling(url);
});