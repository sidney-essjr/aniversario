import Countdown from "react-countdown";

export default function Counter() {
  const eventDate = new Date(2024, 7, 31, 21, 0, 0);

  return (
    <section className="max-w-screen-xl p-2 gap-x-2 bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)] m-2 sm:m-4 rounded-sm flex justify-center flex-1">
      <div className="text-center gap-y-5 py-10 max-w-64 bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)] flex-1 rounded-sm text-slate-50 grid place-content-center text-5xl sm:text-7xl">
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ days }) => {
            return <p>{days}</p>;
          }}
        ></Countdown>
        <p className="text-base sm:text-2xl">dias</p>
      </div>
      <div className="flex-1 text-center gap-y-5 py-10 max-w-64 bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)] rounded-sm text-slate-50 grid place-content-center text-5xl sm:text-7xl">
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ hours }) => {
            return <p>{hours}</p>;
          }}
        ></Countdown>
        <p className="text-xl sm:text-2xl">horas</p>
      </div>
      <div className="flex-1 text-center gap-y-5 py-10 max-w-64 bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)] rounded-sm text-slate-50 grid place-content-center text-5xl sm:text-7xl">
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ minutes }) => {
            return <p>{minutes}</p>;
          }}
        ></Countdown>
        <p className="text-xl sm:text-2xl">minutos</p>
      </div>
      <div className="flex-1 text-center gap-y-5 py-10 max-w-64 bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)] rounded-sm text-slate-50 grid place-content-center text-5xl sm:text-7xl">
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ seconds }) => {
            return <p>{seconds}</p>;
          }}
        ></Countdown>
        <p className="text-xl sm:text-2xl">segundos</p>
      </div>
    </section>
  );
}
