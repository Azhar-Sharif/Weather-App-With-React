export function getUnixTimestamp(date) {
  return Math.floor(date.getTime() / 1000);
}

export function parseHour(day, hour) {
  const [hh, mm] = hour.datetime.split(":").map(Number);
  const d = new Date(day.datetime);
  d.setHours(hh, mm, 0, 0);
  return d;
}

export function flattenHours(data) {
  const allHours = [];
  data.days.forEach((day) => {
    day.hours?.forEach((h) => {
      allHours.push({
        datetime: `${day.datetime}T${h.datetime}`,
        fullDate: parseHour(day, h),
        temp: h.temp,
        windspeed: h.windspeed,
        precipprob: h.precipprob,
        conditions: h.conditions,
        date: day.datetime,
      });
    });
  });
  return allHours;
}

export function filterHours(allHours, start, end) {
  return allHours.filter((h) => h.fullDate >= start && h.fullDate <= end);
}

export function splitPastNext(hours, now) {
  return {
    past24: hours.filter((h) => h.fullDate < now),
    next24: hours.filter((h) => h.fullDate >= now),
  };
}

export function formatHourData(hour) {
  const date = new Date(hour.fullDate);
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return {
    time: `${hh}:${mm}`,
    temp: hour.temp,
    windspeed: hour.windspeed,
    precipprob: hour.precipprob,
    conditions: hour.conditions,
  };
}
