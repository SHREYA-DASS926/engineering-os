import { Bell, Search } from "lucide-react";
import { useEffect, useState } from "react";
import CommandPalette from "./CommandPalette";

import { useAuth } from "../../features/auth/context/AuthContext";

function Topbar() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

useEffect(() => {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key.toLowerCase() === "k") {
      event.preventDefault();
      setOpen(true);
    }

    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  return (
  <>
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-8 backdrop-blur">
      <div className="relative w-full max-w-lg">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          readOnly
          onFocus={() => setOpen(true)}
          placeholder="Search anything... (Ctrl + K)"
          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div className="ml-8 flex items-center gap-4">
        <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 transition hover:bg-slate-200">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            {user?.email?.charAt(0).toUpperCase() ?? "U"}
          </div>

          <div>
            <p className="text-sm font-semibold">Shrey</p>
            <p className="text-xs text-slate-500">
              Engineering Student
            </p>
          </div>
        </div>
      </div>
    </header>

    <CommandPalette
      open={open}
      onClose={() => setOpen(false)}
    />
  </>
);
}

export default Topbar;