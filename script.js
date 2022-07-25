const displayResult = document.querySelector(".display_result");
const mainInput = document.querySelector(".main_input");
const forecast = document.querySelector(".weather");
mainInput.focus();

const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then((position) => {
  console.log(position);
});

getPosition();

const displayFlag = async function () {
  try {
      // const country = await fetch(
      //   `https://restcountries.com/v2/name/${mainInput.value}`
      // );
      // const country = await fetch(
      //   `https://restcountries.com/v2/alpha/{code}`
      // );
      // const resp = await country.json();
      // const data = await resp;
      // console.log(data);
      // const flag = await data[0].flag;
      // console.log(flag);
       // const html = `
      // 	<div class="count_flag_area">
      // 		<img src="${data[0].flag}" alt="failed to load flag" class="country_flag">
      // 	</div>
      // `;
      // responseArea.insertAdjacentHTML("beforeend", html);

      // const coords = await data[0].latlng;
      // console.log(coords)
      // const { lat, lng } = coords;
      // console.log(lat, lng)
      // const countryData = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=a2f17b3ac241e448768846ba928392b8`
      // );
      const countryData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${mainInput.value}&appid=a2f17b3ac241e448768846ba928392b8`
      );
      if(!countryData) throw new Error(`problem fetching country data`);
      const res2 = await countryData.json();
      const data2 = await res2;
      if(!data2) throw new Error(`problem fetching country data`);
      console.log(data2);
      // const teamperature = await data2.temp[0];
      //   const html2 = `
      // 		<div>
      
      // 		</div>
      // 	`;
      const temperature = data2.main.temp;
      console.log(temperature);

      const celcius = (temperature - 273.1).toFixed(1);
      console.log(celcius)

      const countryCode = data2.sys.country;
      console.log(countryCode)
      const country = await fetch(
        `https://restcountries.com/v2/alpha/${countryCode}`
      );
      const resp = await country.json();
      const data = await resp;
      console.log(data);
      const flag = await data.flag;
      console.log(flag);

      // const countryName = country.name;
      // console.log(countryName)
      const html = `
        <div class="response_area">
          <img src="${flag}" alt="" class="country_flag">
          <div class="details_area">
              <div class="forecast_wrapper">
                <h1 class="main_temp">${celcius}&deg;C</h1>
                <h3>${data2.name}, ${data.name}</h3>
                <p class="forecast_description">${data2.weather[0].main}: ${data2.weather[0].description}</p>
              </div>
          </div>
        </div>
      `;
      // const html = `
      // 	<div class="count_flag_area">
      // 		<img src="${flag}" alt="failed to load flag" class="country_flag">
      // 	</div>
      // `;
      displayResult.insertAdjacentHTML("beforeend", html);
      forecast.addEventListener('click', function(){
        displayResult.innerHTML = ""
      });
  } catch (err) {
    alert(`Problem fetching weather data`)
  }
};

// const checkWeather = async function () {

// };
forecast.addEventListener("click", function () {
  forecast.innerHTML=`<i class="fa fa-spinner fa-spin"></i> checking`
  displayFlag();
  mainInput.value = '';

  setTimeout(() => {
    forecast.innerHTML=`weather`
  }, 3000);
});

let date = new Date();
console.log(date);


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd25ee53e3fmsh0ed016d4244589ap1aedd4jsncb9afff296d1',
// 		'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
// 	}
// };

// fetch('https://aerisweather1.p.rapidapi.com/sunmoon/ankara,tr', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd25ee53e3fmsh0ed016d4244589ap1aedd4jsncb9afff296d1',
// 		'X-RapidAPI-Host': 'pl12133-weatherspot-v1.p.rapidapi.com'
// 	}
// };
