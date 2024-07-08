const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "93c4e1c33c656f1bc1a443c4a51c74cc"
  };
  
  const input = document.querySelector("#input");
  input.addEventListener("keypress", enter);
  
  function enter(e) {
    if (e.key === "Enter") {
      getInfo(input.value);
    }
  }
  
  async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appid=${api.key}`);
    const result = await res.json();
    displayResult(result);
  }
  
  function displayResult(result) {
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;
  
    getOurDate();
  
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)} <span>°</span>`;
  
    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `${Math.round(result.main.feels_like)} <span>°</span>`;
  
    let conditions = document.querySelector("#condition");
    conditions.innerHTML = `${result.weather[0].description}`;
  
    let variation = document.querySelector("#variation");
    variation.innerHTML = `Min: ${Math.round(result.main.temp_min)} <span>°</span> Max: ${Math.round(result.main.temp_max)} <span>°</span>`;
  }
  
  function getOurDate() {
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    let day = days[myDate.getDay()];
    let todayDate = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();
  
    let showDate = document.querySelector("#date");
    showDate.textContent = `${day} ${todayDate} ${month} ${year}`;
  }
  
  getOurDate();

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": .2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 2,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 70,
        "color": "#ffffff",
        "opacity": 0.8,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  