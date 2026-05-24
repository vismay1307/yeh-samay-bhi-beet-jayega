type ControlsProps = {
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  isRunning: boolean;
};

const Controls = ({
  onStart,
  onPause,
  onReset,
  isRunning,
}: ControlsProps) => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
      <button
        onClick={onStart}
        disabled={isRunning}
        className="rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-bold tracking-[0.2em] text-black uppercase transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,122,26,0.35)] disabled:cursor-not-allowed disabled:opacity-45"
      >
        Start
      </button>

      <button
        onClick={onPause}
        disabled={!isRunning}
        className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-bold tracking-[0.2em] text-white uppercase transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-45"
      >
        Pause
      </button>

      <button
        onClick={onReset}
        className="rounded-full border border-white/15 bg-black px-6 py-3 text-sm font-bold tracking-[0.2em] text-white uppercase transition hover:-translate-y-0.5 hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
