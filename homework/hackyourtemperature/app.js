import express from 'express';
import fetch from 'node-fetch';
import keys from './sources/keys.js';

const app = express();
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

app.post('/weather', async (req, res) => {
  const cityName = req.body.cityName;
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + keys.API_KEY);
    if (response.ok) {
      const weather = await response.json();
      res.status(200).json({ weatherText: cityName + ', ' + weather.main.temp});
    }
    else{
      res.status(404).json({ weatherText: "City is not found!" });
    }
  } catch(err) {
    console.log(err);
  }
});

export default app;