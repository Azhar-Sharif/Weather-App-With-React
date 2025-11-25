import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm } from "react-icons/wi";

export default function HourCard({ hour}) {
  const getWeatherIcon = (condition) => {
    const c = condition.toLowerCase();
    if (c.includes("sun")) return <WiDaySunny size={24} color="#f1c40f" />;
    if (c.includes("rain")) return <WiRain size={24} color="#3498db" />;
    if (c.includes("cloud")) return <WiCloudy size={24} color="#95a5a6" />;
    if (c.includes("snow")) return <WiSnow size={24} color="#7f8c8d" />;
    if (c.includes("thunder")) return <WiThunderstorm size={24} color="#8e44ad" />;
    return <WiDaySunny size={24} color="#f1c40f" />;
  };

  return (
    <div className="hour-card">
      <div className="hour-time">{hour.time}</div>
      {getWeatherIcon(hour.conditions)}
      <div className="hour-temp">{hour.temp}°C</div>
      <div className="hour-cond">{hour.conditions}</div>
      <div className="hour-rain">Rain: {hour.precipprob}%</div>
    </div>
  );
}
