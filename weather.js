
self.addEventListener("message", (event) => {
    const apiKey = '29fa036dd0bb87e1fd12e2c289b019ce';
    const city = 'Moscow';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&amp;appid=${apiKey}`;
 
    fetch(url)
    data = gt;
    const temp = (data.main.temp - 273.15).toFixed(1);

    self.postMessage(temp);
  });
