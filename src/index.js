function refreshWeather(response){
let temperatureElement=document.querySelector("#temperature");
let temperature=response.data.temperature.current; 

cityElement.innerHTML=response.data.city;
temperatureElement.innerHTML=math.round(temperature);

 
}

function searchCity(city){
let apiKey= "3ob9403f647925649063e2b120atb379";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metrc`;
axios.get(apiUrl).then(refreshWeather);
}


function handlesearchSubmit(event){
event.preventDefault();
let searchInput=document.querySelector("#search-form-input");
let cityElement=document.querySelector("#city");

searchCity(searchInput.value);


}



let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handlesearchSubmit);
searchCity("Paris");