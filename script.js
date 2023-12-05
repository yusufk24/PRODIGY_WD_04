const apiKey= "01811bd3c6dab42094846f460a32a406";
            const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
            const searchBox= document.querySelector(".search input")
            const searchBtn= document.querySelector(".search button")
            const weatherIcon= document.querySelector(".weather-icon");
            const weatherState= document.querySelector(".tell-weather");

            async function checkWeather(city){
                const response= await fetch(apiUrl+ city + `&appid=${apiKey}`);

                if (response.status == 404) {
                    document.querySelector(".error").style.display="block";
                }else{
                    var data = await response.json();
                    console.log(data);

                    document.querySelector(".city").innerHTML= data.name;
                    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
                    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
                    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

                        if (data.weather[0].main == "Clouds") {
                            weatherState.innerHTML= data.weather[0].main;
                            weatherIcon.src="images/clouds.png"
                        }else if (data.weather[0].main == "Clear") {
                            weatherState.innerHTML= data.weather[0].main;
                            weatherIcon.src="images/clear.png"
                        }else if (data.weather[0].main == "Rain") {
                            weatherState.innerHTML= data.weather[0].main;
                            weatherIcon.src="images/rain.png"
                        }else if (data.weather[0].main == "Drizzle") {
                            weatherState.innerHTML= data.weather[0].main;
                            weatherIcon.src="images/drizzle.png"
                        }else if (data.weather[0].main == "Mist") {
                            weatherState.innerHTML= data.weather[0].main;
                            weatherIcon.src="images/mist.png"
                        }

                    document.querySelector(".weather").style.display="block";
                    document.querySelector(".error").style.display="none";
                }
                
            }

            searchBox.addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                    checkWeather(searchBox.value);
                    searchBox.value="";
                }
            });
            searchBtn.addEventListener("click", ()=>{
                    
                checkWeather(searchBox.value);
                searchBox.value="";
            })