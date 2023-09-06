//* https://api.openweathermap.org/data/2.5/weather?appid=dc963a7642c3a9db06e3273e56a5531f&units=metric&q=berlin

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

const message = document.querySelector(".msg");

const apiKey = "dc963a7642c3a9db06e3273e56a5531f";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  ekranaBastir(data);

  // console.log(data);
}

searchButton.addEventListener("click", (e) => {
  if (searchInput.value === "") {
    message.innerHTML = "Please enter a city";
    e.preventDefault();
  } else {
    message.innerHTML = "";
    checkWeather(searchInput.value);
    console.log(searchInput.value);
    searchInput.value = "";
    e.preventDefault();
  }
});

const ekranaBastir = (data) => {
  document.querySelector(".cities").innerHTML =
    `
         <li class="cities_item">

           <div class="city-header">
             <h3>${data.name}</h3>
             <span>${data.sys.country}</span>
           </div>
           <div class="temp">
             <h3>${Math.round(data.main.temp)}</h3>
             <span>°C</span>
           </div>
           <figure>
             <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg" alt=""  class="mt-3">
             <figcaption>${data.weather[0].description}</figcaption>
           </figure>
        
         </li>
         
   ` + document.querySelector(".cities").innerHTML;
  console.log(data);
};
