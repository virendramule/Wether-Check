# Weather-Check

Weather-Check is a simple Node.js backend project that fetches weather data for a given location using the OpenWeatherMap API. This project is designed to showcase backend development skills, including API integration, environment variable management, and error handling.

## Features

- Fetch weather data by latitude and longitude
- Simple and easy-to-understand code structure
- Environment variable management using dotenv
- Error handling for API requests

## Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- OpenWeatherMap API key

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/Weather-Check.git
    cd Weather-Check
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```plaintext
    WEATHER_API_KEY=your_api_key_here
    ```

## Running the Server

1. Start the server:
    ```bash
    node src/index.js
    ```

2. The server will be running on port 3000 by default. You can access it at:
    ```
    http://localhost:3000/weather?lat={latitude}&lon={longitude}
    ```

    Example:
    ```
    http://localhost:3000/weather?lat=51.5074&lon=-0.1278
    ```

## API Endpoint

- **GET /weather**

    Fetch weather data by latitude and longitude.

    **Query Parameters:**
    - `lat` (required): Latitude of the location.
    - `lon` (required): Longitude of the location.

    **Response:**
    ```json
    {
        "coord": {
            "lon": -0.1278,
            "lat": 51.5074
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 14.85,
            "feels_like": 13.85,
            "temp_min": 13.33,
            "temp_max": 16.11,
            "pressure": 1012,
            "humidity": 82
        },
        "visibility": 10000,
        "wind": {
            "speed": 1.54,
            "deg": 90
        },
        "clouds": {
            "all": 0
        },
        "dt": 1598301750,
        "sys": {
            "type": 1,
            "id": 1414,
            "country": "GB",
            "sunrise": 1598245640,
            "sunset": 1598296611
        },
        "timezone": 3600,
        "id": 2643743,
        "name": "London",
        "cod": 200
    }
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or enhancements.
