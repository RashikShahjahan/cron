const API_KEY = process.env.OPENWEATHER_API_KEY;

async function getWeather(city: string = 'London') {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}


const weatherData = await getWeather();
console.log(weatherData);

export { };

