# Weather App 🌤️

A React-based weather application that fetches real-time weather data using the Visual Crossing Weather API.

## Features Implemented So Far

* Fetch weather data for a given location
* Display raw API response in structured JSON format
* Flatten hourly data for easier processing
* Filter hourly data for past 24 hours and next 24 hours
* Split hours into `past24` and `next24` relative to current time
* Helper functions for parsing hours and calculating UNIX timestamps

## Tech Stack

* React (Vite)
* Visual Crossing Weather API
* JavaScript (ES6+)
* Node Fetch (for API calls)

## Next Steps

* Build UI components to display weather cards
* Implement search input for locations
* Show 24-hour timeline visually
* Add refresh functionality
* Handle loading and error states
* Improve UI and responsiveness

## Notes
* Current implementation focuses on data fetching and structuring, without full UI integration yet
