//const url = "https://openweathermap.org/current";
//const url = 'https://jsonplaceholder.typicode.com/users';
// docume

let city = document.getElementById("search-field");
let temp = document.getElementById("temp");
let description = document.getElementById("description");
let weatherImg = document.getElementById("weather-img");
let windDirection = document.getElementById("wind-direction");
let windSpeed = document.getElementById("wind-speed");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let searchButton = document.getElementById("search-button");

let city_name = city.value===""?"Moscow":city.innerHTML;
let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city_name + '&units=metric&lang=ru&appid=20d168cec6dd572a4b246df42e4646e7';
filling = (url) =>{
    return fetch(url).then(response => {
        if (response.ok){
            return response.json();
        }
        else{
            return response.json().then(error=>{
                const e=new Error("Город не найден");
                e.data=error;
                alert(e);
                throw e;
            });
        }
    }).then(res=>{
        document.getElementById("city").innerHTML=res.name; //установка имени города
        temp.innerHTML=res.main.temp>=0?"+" + res.main.temp:res.main.temp; //установка температуры
        [d1, ...d2]=res.weather[0].description;
        description.innerHTML=d1.toUpperCase().concat(...d2); //установка состояния погоды
        weatherImg.setAttribute("src",`img/${res.weather[0].icon}.png`); //изменение иконки по состоянию погоды
        if (res.wind.deg > 337.5 && res.wind.deg <= 22.5) //установка направления ветра
            windDirection.innerHTML="Северный";
        else if (res.wind.deg > 22.5 && res.wind.deg <= 67.5)
                windDirection.innerHTML="Северо-Восточный";
            else if (res.wind.deg > 67.5 && res.wind.deg <= 112.5)
                    windDirection.innerHTML="Восточный";
                else if (res.wind.deg > 112.5 && res.wind.deg <= 157.5)
                        windDirection.innerHTML="Юго-Восточный";
                    else if (res.wind.deg > 157.5 && res.wind.deg <= 202.5)
                            windDirection.innerHTML="Южный";
                        else if (res.wind.deg > 202.5 && res.wind.deg <= 247.5)
                                windDirection.innerHTML="Юго-Западный";
                            else if (res.wind.deg > 202.5 && res.wind.deg <= 247.5)
                                    windDirection.innerHTML="Юго-Западный";
                                else if (res.wind.deg > 247.5 && res.wind.deg <= 292.5)
                                        windDirection.innerHTML="Западный";
                                    else windDirection.innerHTML="Северо-Западный";
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