import { Bell, Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";

import CommandPalette from "./CommandPalette";
import { useAuth } from "../../features/auth/context/useAuth";

type TopbarProps = {
  onMenuClick: () => void;
};

function Topbar({ onMenuClick }: TopbarProps) {
  const { user, profile } = useAuth();

  const displayName = profile?.name || user?.email || "User";
  const headline = profile?.headline || "Engineering Student";
  const initial = displayName.charAt(0).toUpperCase();
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(true);
      }

      if (event.key === "Escape") {
        setCommandOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-border bg-background/90 px-4 backdrop-blur md:px-8">
        <div className="flex flex-1 items-center gap-4">
          <button
            onClick={onMenuClick}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted transition hover:bg-accent lg:hidden"
          >
            <Menu size={20} />
          </button>

          <div className="relative w-full max-w-lg">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type="text"
              readOnly
              onFocus={() => setCommandOpen(true)}
              placeholder="Search anything... (Ctrl + K)"
              className="h-12 w-full rounded-2xl border border-border bg-muted pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-blue-500 focus:bg-background focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        <div className="ml-4 flex items-center gap-4">
          <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted transition hover:bg-accent">
            <Bell size={18} />
          </button>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
              {initial}
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">
                {displayName}
              </p>

              <p className="text-xs text-muted-foreground">
                {headline}
              </p>
            </div>
          </div>
        </div>
      </header>

      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
      />
    </>
  );
}

export default Topbar;