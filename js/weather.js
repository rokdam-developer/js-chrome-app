const API_KEY = "1bf23d3e82a21e2e947057a357a90e9c";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const nowCity = document.querySelector("#weather span:first-child");
      const nowWeather = document.querySelector("#weather span:nth-child(2)");
      const nowTemp = document.querySelector("#weather span:nth-child(3)");
      const nowHumidity = document.querySelector("#weather span:last-child");

      const name = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      const humidity = data.main.humidity;

      nowCity.innerText = `Now place : ${name}`;
      nowWeather.innerText = `Weather : ${weather}`;
      nowTemp.innerText = `Temperature : ${temp} °C`;
      nowHumidity.innerText = `Humidity : ${humidity} %`;
    });
}

function onGeoError() {
  alert(`Can't find you. No weather for you.`);
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
