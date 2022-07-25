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
