import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
};

const commands = [
  { label: "Dashboard", path: "/" },
  { label: "Coding", path: "/coding" },
  { label: "Learning", path: "/study" },
  { label: "Career", path: "/career" },
  { label: "Opportunities", path: "/opportunities" },
  { label: "AI Coach", path: "/ai" },
  { label: "Settings", path: "/settings" },
];

function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = useMemo(() => {
    return commands.filter((command) =>
      command.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  

  function runCommand(path: string) {
    navigate(path);
    onClose();
    setQuery("");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (filteredCommands.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setSelectedIndex((currentIndex) =>
        currentIndex === filteredCommands.length - 1 ? 0 : currentIndex + 1
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setSelectedIndex((currentIndex) =>
        currentIndex === 0 ? filteredCommands.length - 1 : currentIndex - 1
      );
    }

    if (event.key === "Enter") {
      event.preventDefault();

      const selectedCommand = filteredCommands[selectedIndex];

      if (selectedCommand) {
        runCommand(selectedCommand.path);
      }
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-32 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
          <Search size={20} className="text-slate-400" />

          <input
            autoFocus
            value={query}
            onChange={(event) => {
                setQuery(event.target.value);
                setSelectedIndex(0);
                }}
            onKeyDown={handleKeyDown}
            placeholder="Search pages..."
            className="flex-1 border-none text-lg outline-none"
          />

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto py-3">
          {filteredCommands.length === 0 ? (
            <p className="px-6 py-4 text-sm text-slate-500">
              No results found.
            </p>
          ) : (
            filteredCommands.map((command, index) => {
              const isSelected = index === selectedIndex;

              return (
                <button
                  key={command.path}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => runCommand(command.path)}
                  className={`flex w-full items-center justify-between px-6 py-4 text-left transition ${
                    isSelected
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-slate-100"
                  }`}
                >
                  <span className="font-medium">{command.label}</span>

                  <span className="text-xs text-slate-400">Enter</span>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;