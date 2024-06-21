const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Fetch weather data
app.get('/weather', async (req, res) => {
    const location = req.query.location;
    if (!location) {
        return res.status(400).json({ error: 'Location is required' });
    }

    try {
        console.log(process.env.NAME + "CheckTheText")
        const apiKey = process.env.WEATHER_API_KEY;
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`);
        const weatherData = response.data;
        res.json(weatherData);
    } catch (error) {
        console.error('Error details:', error); // Detailed error logging
        if (error.response) {
            console.error('Error response:', error.response.data);
            res.status(error.response.status).json({ error: error.response.data.message });
        } else {
            res.status(500).json({ error: 'Error fetching weather data' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
