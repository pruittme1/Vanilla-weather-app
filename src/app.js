function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "87b178ac3ff18ae30998e0fe85f9d0ad";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
