let lon;
let city = document.getElementById('city')
let boton = document.getElementById('btn')
let lat;
let temperature = document.querySelector(".temp")
let ciudad = document.querySelector(".name")
let state = document.querySelector(".state")  
let pais = document.querySelector(".ciudad")
let kelvin = 273.15;

       
            lon=  -70.0199000;
            lat= -15.8422000;

            const api = "27287355ca07526d40d6778cbc3865e5"
            const url_base =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;

            fetch(url_base)
            .then((Response)=>{
                return Response.json();
            })
            .then((data)=> {

                temperature.textContent =Math.floor(data.main.temp-kelvin)+"°C";
                state.textContent = data.weather[0].description; 
                ciudad.textContent = data.name;
                pais.textContent =data.sys.country;         
              })
              let get_weather= ()=>{
                let city_name = city.value;
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api}`;
                fetch(url).then((resp)=> resp.json()).then(data =>{
                temperature.textContent =Math.floor(data.main.temp-kelvin)+"°C";
                state.textContent = data.weather[0].description; 
                ciudad.textContent = data.name;
                pais.textContent =data.sys.country;
                })
            }
            boton.addEventListener('click',get_weather);
