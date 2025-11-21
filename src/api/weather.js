import { getUnixTimestamp, flattenHours, filterHours, splitPastNext } from "@/utils/helpers.js";

export async function fetchWeather(location) {
  const API_KEY = import.meta.env.VITE_VISUAL_CROSSING_API_KEY;
  const BASE_URL = import.meta.env.VITE_VISUAL_WEATHER_BASE_URL;
  if (!API_KEY || !BASE_URL) throw new Error("Missing API key or base URL");

  const now = new Date();
  const past24 = new Date(now.getTime() - 24*60*60*1000);
  const future24 = new Date(now.getTime() + 24*60*60*1000);

  const url = `${BASE_URL}/${encodeURIComponent(location)}/${getUnixTimestamp(past24)}/next1days?unitGroup=metric&include=hours,current&elements=datetime,temp,windspeed,precipprob,conditions&key=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather fetch failed: ${res.status}`);
  const data = await res.json();

  const allHours = flattenHours(data);
  const filtered = filterHours(allHours, past24, future24);
  const { past24: past24Hours, next24: next24Hours } = splitPastNext(filtered, now);

  return {
    current: next24Hours[0] ?? past24Hours[past24Hours.length - 1],
    past24: past24Hours,
    next24: next24Hours,
  };
}
