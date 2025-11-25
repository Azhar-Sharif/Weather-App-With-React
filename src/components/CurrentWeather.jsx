import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm } from "react-icons/wi";

export default function CurrentWeather({ data }) {
  if (!data) return null;

  const { temp, windspeed, precipprob, conditions, time } = data;

  const getWeatherIcon = (condition) => {
    const c = condition.toLowerCase();
    if (c.includes("sun")) return <WiDaySunny size={60} />;
    if (c.includes("rain")) return <WiRain size={60} />;
    if (c.includes("cloud")) return <WiCloudy size={60} />;
    if (c.includes("snow")) return <WiSnow size={60} />;
    if (c.includes("thunder")) return <WiThunderstorm size={60} />;
    return <WiDaySunny size={60} />;
  };

  const getBgClass = (condition) => {
    const c = condition.toLowerCase();
    if (c.includes("sun")) return "sunny";
    if (c.includes("rain")) return "rainy";
    if (c.includes("cloud")) return "cloudy";
    if (c.includes("snow")) return "snowy";
    if (c.includes("thunder")) return "thunder";
    return "sunny";
  };

  return (
    <div className={`current-weather ${getBgClass(conditions)}`}>
      <h2>Current Weather</h2>

      <div className="weather-main">
        {getWeatherIcon(conditions)}
        <h3 className="temp-display">{temp}°C</h3>
      </div>

      <div className="weather-details">
        <div><strong>Time:</strong> {time}</div>
        <div><strong>Wind:</strong> {windspeed} km/h</div>
        <div><strong>Rain:</strong> {precipprob}%</div>
        <div><strong>Condition:</strong> {conditions}</div>
      </div>
    </div>
  );
}
