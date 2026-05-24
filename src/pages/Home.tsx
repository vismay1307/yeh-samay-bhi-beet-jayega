import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-5 py-10 sm:px-6 lg:px-8">
      <div className="grid w-full gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-2 text-xs font-bold tracking-[0.28em] text-[var(--accent)] uppercase">
            Black. White. Orange.
          </div>

          <div className="space-y-4">
            <h1 className="hero-title max-w-3xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
              ChaiFlow makes time tracking feel sharp, warm, and fast.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
              Ek clean focus desk jaisa interface: high contrast visuals,
              responsive layout, aur stopwatch ya timer dono ke liye direct
              control.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/stopwatch"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold tracking-[0.2em] text-black uppercase transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(255,122,26,0.35)]"
            >
              Open Stopwatch
            </Link>
            <Link
              to="/timer"
              className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-bold tracking-[0.2em] text-white uppercase transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
            >
              Start Timer
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
        <Link
          to="/stopwatch"
          className="feature-card group"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-xs font-bold tracking-[0.28em] text-[var(--accent)] uppercase">
              Precision Mode
            </span>
            <span className="text-white/35 transition group-hover:text-[var(--accent)]">
              01
            </span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-white">Stopwatch</h2>
          <p className="mb-8 max-w-md text-white/68">
            Lap-free clean counter with crisp milliseconds and direct controls.
          </p>
          <div className="clock-preview">
            <span>00</span>
            <span>:</span>
            <span>48</span>
            <span>:</span>
            <span className="text-[var(--accent)]">19</span>
          </div>
        </Link>

        <Link
          to="/timer"
          className="feature-card group"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-xs font-bold tracking-[0.28em] text-[var(--accent)] uppercase">
              Focus Brew
            </span>
            <span className="text-white/35 transition group-hover:text-[var(--accent)]">
              02
            </span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-white">Timer</h2>
          <p className="mb-8 max-w-md text-white/68">
            Custom countdown for study sprints, pomodoro-style sessions, ya
            quick break tracking.
          </p>
          <div className="clock-preview">
            <span>18</span>
            <span>:</span>
            <span className="text-[var(--accent)]">00</span>
          </div>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
