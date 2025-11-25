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



Here is the **updated and complete README.md**, fully rewritten to reflect the finished features and improved UI.

---

# Weather App 🌤️

A modern, fully-styled weather application built with **React + Vite**, using the **Visual Crossing Weather API** to fetch real-time and historical weather data.
The app includes animated backgrounds, past/next 24-hour timeline, search functionality, reusable components, and a clean UI.

---

## 🚀 Features

### ✅ **Weather Fetching & Processing**

* Get live weather for any location
* Fetch:

  * **Current weather**
  * **Past 24 hours**
  * **Next 24 hours**
* Hourly data is auto-flattened from the API
* Smart splitting of hours using UNIX timestamps
* Automatically refresh data

---

### 🎨 **Modern UI + Animations**

* Dynamic weather-based backgrounds:

  * 🌞 Sunny
  * ☁️ Cloudy (floating cloud animation)
  * 🌧️ Rainy (rainfall animation)
  * ❄️ Snowy (snowfall animation)
* Fully responsive layout
* Reusable components:

  * `<SearchBar />`
  * `<CurrentWeather />`
  * `<HourlyTimeline />`
* Smooth hover effects, gradients & shadow transitions
* Clean, centered container layout

---

### 🔍 **Search & Refresh**

* Search any city worldwide
* Updates background animation based on fetched weather
* One-click refresh button

---

## 🧩 Tech Stack

* **React (Vite)**
* **Visual Crossing Weather API**
* **Custom React Hooks**
* **JavaScript (ES6+)**
* **CSS Animations**

---


## 🛠️ Setup Instructions

### 1. Clone repository

```
git clone git@github.com:Azhar-Sharif/Weather-App-With-React.git
cd Weather-App-With-React
```

### 2. Install dependencies

```
npm install
```

### 3. Add API Key

Create:

```
.env
```

Add:

```
VITE_WEATHER_API_KEY=YOUR_VISUAL_CROSSING_API_KEY
```

### 4. Run project

```
npm run dev
```

