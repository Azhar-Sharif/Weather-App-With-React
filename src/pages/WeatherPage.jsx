import SearchBar from "@/components/SearchBar";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyTimeline from "@/components/HourlyTimeline";
import { useWeather } from "@/hooks/useWeather";

export default function WeatherPage() {
  const { location, setLocation, data, loading, error, refresh } = useWeather("Lahore");

  const handleSearch = (loc) => setLocation(loc);

  const getBgClass = () => {
    if (!data) return "";

    const conditions = data.current.conditions.toLowerCase();

    if (conditions.includes("rain")) return "rainy-bg";
    if (conditions.includes("cloud")) return "cloudy-bg";
    if (conditions.includes("snow")) return "snowy-bg";

    return "sunny-bg";
  };

  const bg = getBgClass();

  return (
    <div className={`weather-background ${bg}`}>

      {bg === "cloudy-bg" && (
        <>
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
        </>
      )}


      {bg === "rainy-bg" &&
        Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className="rain" style={{ "--i": i }}></div>
        ))
      }

      {bg === "snowy-bg" &&
        Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="snowflake" style={{ "--i": i }}>
            *
          </div>
        ))
      }

      <div className="weather-page container py-4">
        
        <div className="weather-header text-center mb-4">
          <h1 className="mb-3">Weather App</h1>
          <SearchBar onSearch={handleSearch} />
        </div>

        {loading && (
          <p className="text-center">Loading weather...</p>
        )}

        {error && (
          <p className="text-danger text-center">Error: {error.message}</p>
        )}

        {data && (
          <>
            <div className="current-weather-wrapper d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
              <CurrentWeather data={data.current} />
              <button className="btn btn-secondary" onClick={refresh}>Refresh</button>
            </div>

            <HourlyTimeline past24={data.past24} next24={data.next24} />
          </>
        )}
      </div>
    </div>
  );
}
