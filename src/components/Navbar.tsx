import { Link, NavLink } from "react-router-dom";

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  [
    "rounded-full px-4 py-2 text-sm font-semibold transition",
    isActive
      ? "bg-[var(--accent)] text-black shadow-[0_0_24px_rgba(255,122,26,0.35)]"
      : "text-white/72 hover:bg-white/8 hover:text-white",
  ].join(" ");

const Navbar = () => {
  return (
    <nav className="relative z-20 border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link to="/" className="flex items-center gap-3 self-start">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent)]/12 text-lg font-black text-[var(--accent)]">
            CF
          </div>
          <div>
            <div className="brand-mark text-2xl font-black tracking-[0.2em] text-white uppercase">
              ChaiFlow
            </div>
            <div className="text-xs tracking-[0.28em] text-white/45 uppercase">
              Brewed for focus
            </div>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <NavLink to="/" className={navItemClass}>
            Home
          </NavLink>

          <NavLink to="/stopwatch" className={navItemClass}>
            Stopwatch
          </NavLink>

          <NavLink to="/timer" className={navItemClass}>
            Timer
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
