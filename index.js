const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".windspeed");
const degree = document.querySelector(".deg");
const city = document.querySelector(".city");
const weatherimg = document.querySelector(".weather_img");
const weatherclass=document.querySelector(".weather");

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const getdata = async function (cityname) {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${cityname}&appid=e3802a59b98d4b8261bc9c18a88ac34b`
  )
    .then((response) => {
            if(response.status == 404){
                document.querySelector(".error").style.display="block";
                weatherclass.classList.add('weather');
            }
        else{response.json()
            .then((data) => {
                wind.innerHTML = `${data.wind.speed} km/h Wind Speed`;
                degree.innerHTML = `${Math.round(data.main.temp)} °C`;
                humidity.innerHTML = `${data.main.humidity}% Humidity`;
                city.innerHTML = data.name;
                const image =data.weather[0].main;
          
                console.log(data);
          
                if (image == "Clouds") {
                  weatherimg.src = "clouds.png";
                }
                else if(image=="Rain"){
                  weatherimg.src="rain.png"
                }
                else if(image=="Clear"){
                  weatherimg.src="clear.png"
                }
                else if(image=="Drizzle"){
                  weatherimg.src="drizzle.png"
                }
                else if(image=="Mist"){
                    weatherimg.src="mist.png"
                  }
                else if(image=="Snow"){
                    weatherimg.src="snow.png"
                  }
                  document.querySelector(".error").style.display="none";
                  weatherclass.classList.remove('weather');
              })
        }
        })
        
};

searchbtn.addEventListener("click", function () {
  getdata(searchbox.value);
  
});
