import {
  Bell,
  Database,
  GitBranch,
  Moon,
  Shield,
  User,
} from "lucide-react";

import { Card } from "../components/ui";
import { useTheme } from "../hooks/useTheme";

function Settings() {
  const { theme, setTheme } = useTheme();

  const iconBoxClass =
    "flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background";

  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Settings</h2>

        <p className="text-muted-foreground">
          Manage your Engineering OS preferences and upcoming integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card>
          <div className="mb-6 flex items-center gap-3">
            <div className={iconBoxClass}>
              <User size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground">Profile</h3>
              <p className="text-sm text-muted-foreground">
                Student identity and account details.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Name
              </label>

              <input
                value="Shrey"
                readOnly
                className="mt-2 w-full rounded-2xl border border-border bg-muted px-4 py-3 text-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Role
              </label>

              <input
                value="Engineering Student"
                readOnly
                className="mt-2 w-full rounded-2xl border border-border bg-muted px-4 py-3 text-foreground"
              />
            </div>
          </div>
        </Card>

        <Card>
          <div className="mb-6 flex items-center gap-3">
            <div className={iconBoxClass}>
              <Moon size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground">Appearance</h3>
              <p className="text-sm text-muted-foreground">
                Choose how Engineering OS looks.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {(["system", "light", "dark"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setTheme(mode)}
                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 transition ${
                  theme === mode
                    ? "border-blue-600 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                <span className="font-medium capitalize">{mode}</span>

                {theme === mode && (
                  <span className="text-sm font-semibold">Active</span>
                )}
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-6 flex items-center gap-3">
            <div className={iconBoxClass}>
              <Database size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground">
                Data Storage
              </h3>
              <p className="text-sm text-muted-foreground">
                Current storage mode and planned backend.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted p-4">
            <p className="text-sm text-muted-foreground">Current mode</p>
            <p className="mt-1 font-semibold text-foreground">
              Browser Local Storage
            </p>
          </div>
        </Card>

        <Card>
          <div className="mb-6 flex items-center gap-3">
            <div className={iconBoxClass}>
              <Shield size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground">Security</h3>
              <p className="text-sm text-muted-foreground">
                Authentication will be added with Supabase.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Bell size={18} />
              <span>Smart notifications planned</span>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <GitBranch size={18} />
              <span>GitHub integration planned</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Settings;