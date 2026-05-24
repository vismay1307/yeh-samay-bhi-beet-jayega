import { type ChangeEvent, useEffect, useRef, useState } from "react";
import Controls from "../components/Controls";

const Timer = () => {
  const [minutesInput, setMinutesInput] = useState<number>(1);
  const [remainingTime, setRemainingTime] = useState<number>(60);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning && remainingTime > 0) {
      intervalRef.current = window.setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    }

    if (remainingTime === 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsRunning(false);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, remainingTime]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMinutesInput(value);
    setRemainingTime(value * 60);
    setIsRunning(false);
  };

  const start = () => {
    if (remainingTime > 0) setIsRunning(true);
  };

  const pause = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRemainingTime(minutesInput * 60);
    setIsRunning(false);
  };

  const mins = String(Math.floor(remainingTime / 60)).padStart(2, "0");
  const secs = String(remainingTime % 60).padStart(2, "0");

  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-5 py-10 sm:px-6 lg:px-8">
      <div className="grid w-full gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <div className="panel-card flex flex-col justify-between">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.28em] text-[var(--accent)] uppercase">
              Timer
            </p>
            <h1 className="hero-title mb-4 text-4xl font-black text-white sm:text-5xl">
              Set the brew window and let the countdown hold the room.
            </h1>
            <p className="max-w-md text-white/68">
              Minutes choose karo, countdown chalao, aur same sharp theme mein
              focus session maintain karo.
            </p>
          </div>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5">
            <label
              htmlFor="minutes"
              className="mb-3 block text-xs font-bold tracking-[0.24em] text-white/45 uppercase"
            >
              Duration in minutes
            </label>
            <input
              id="minutes"
              type="number"
              min="1"
              value={minutesInput}
              onChange={handleInput}
              className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-4 text-xl font-semibold text-white outline-none transition placeholder:text-white/25 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
              placeholder="Enter minutes"
            />
          </div>
        </div>

        <div className="panel-card panel-card-strong text-center">
          <div className="mb-4 flex items-center justify-between gap-4 text-xs font-bold tracking-[0.28em] text-white/45 uppercase">
            <span>Focus Countdown</span>
            <span className={isRunning ? "text-[var(--accent)]" : "text-white/35"}>
              {isRunning ? "Brewing" : "Ready"}
            </span>
          </div>

          <div className="digital-frame">
            <div className="digital-time text-5xl sm:text-7xl lg:text-8xl">
              <span>{mins}</span>
              <span className="text-white/40">:</span>
              <span className="text-[var(--accent)]">{secs}</span>
            </div>
          </div>

          <Controls
            onStart={start}
            onPause={pause}
            onReset={reset}
            isRunning={isRunning}
          />
        </div>
      </div>
    </section>
  );
};

export default Timer;
