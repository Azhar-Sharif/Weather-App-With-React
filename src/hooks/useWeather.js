import { useState, useEffect } from "react";
import { fetchWeather } from "@/api/weather.js";

export function useWeather(initialLocation = "") {
  const [location, setLocation] = useState(initialLocation);
  const [trigger, setTrigger] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) return;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchWeather(location);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [location, trigger]);

  function refresh() {
    setTrigger((prev) => prev + 1);
  }

  return {
    location,
    setLocation,
    data,
    loading,
    error,
    refresh,
  };
}
