window.addEventListener('load', ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let icon = document.querySelector('.icon');
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=49a2c8c00216ead4a4d174d043367573123`;
      // last 3
      fetch(api)
      .then(data => {
        return data.json();
      })
      .then(data => {
        const {temp} = data.main; 
        const {description} = data.weather[0];
        let iconCode = ` http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        
        // SET DOM ELEMENTS FROM API
        temperatureDegree.textContent = temp;
        temperatureDescription.textContent = description.toUpperCase();
        locationTimezone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
        icon.src=`${iconCode}`
      })
    });
  } else {
    alert("Ayo allow it")
  }

})
