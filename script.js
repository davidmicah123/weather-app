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
