import { useEffect, useRef, useState } from "react";
import Controls from "../components/Controls";

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const start = () => setIsRunning(true);

  const pause = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
  const seconds = String(
    Math.floor((time % 60000) / 1000)
  ).padStart(2, "0");
  const ms = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-5 py-10 sm:px-6 lg:px-8">
      <div className="grid w-full gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <div className="panel-card flex flex-col justify-between">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.28em] text-[var(--accent)] uppercase">
              Stopwatch
            </p>
            <h1 className="hero-title mb-4 text-4xl font-black text-white sm:text-5xl">
              Track each second with cafe-floor confidence.
            </h1>
            <p className="max-w-md text-white/68">
              High contrast readout, responsive spacing, aur distraction-free
              layout jo desktop aur mobile dono par clean lage.
            </p>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-white/60 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-[var(--accent)]">Mode</div>
              <div className="mt-2 font-semibold text-white">Count Up</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-[var(--accent)]">Display</div>
              <div className="mt-2 font-semibold text-white">MM : SS : MS</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-[var(--accent)]">Feel</div>
              <div className="mt-2 font-semibold text-white">Sharp UI</div>
            </div>
          </div>
        </div>

        <div className="panel-card panel-card-strong text-center">
          <div className="mb-4 flex items-center justify-between gap-4 text-xs font-bold tracking-[0.28em] text-white/45 uppercase">
            <span>Live Session</span>
            <span className={isRunning ? "text-[var(--accent)]" : "text-white/35"}>
              {isRunning ? "Running" : "Paused"}
            </span>
          </div>

          <div className="digital-frame">
            <div className="digital-time text-5xl sm:text-7xl lg:text-8xl">
              <span>{minutes}</span>
              <span className="text-white/40">:</span>
              <span>{seconds}</span>
              <span className="text-white/40">:</span>
              <span className="text-[var(--accent)]">{ms}</span>
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

export default Stopwatch;
