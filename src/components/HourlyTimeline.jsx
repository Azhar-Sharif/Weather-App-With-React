import HourCard from "@/components/HourCard";

export default function HourlyTimeline({ past24 = [], next24 = [] }) {
  const nowHour = new Date().getHours();

  return (
    <div className="timeline-section">
      <h2>Past 24 Hours</h2>
      <div className="timeline-scroll">
        {past24
          .slice()
          .reverse()
          .map((hour, idx) => (
            <HourCard
              key={`past-${idx}`}
              hour={hour}
              isCurrent={parseInt(hour.time.split(":")[0]) === nowHour}
            />
          ))}
      </div>

      <h2 className="mt-3">Next 24 Hours</h2>
      <div className="timeline-scroll">
        {next24.map((hour, idx) => (
          <HourCard
            key={`next-${idx}`}
            hour={hour}
            isCurrent={parseInt(hour.time.split(":")[0]) === nowHour}
          />
        ))}
      </div>
    </div>
  );
}
