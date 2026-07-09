import { useState } from "react";
import {
  Bell,
  Database,
  GitBranch,
  Moon,
  Save,
  Shield,
  User,
} from "lucide-react";
import { toast } from "sonner";

import { Button, Card } from "../components/ui";
import { useAuth } from "../features/auth/context/useAuth";
import { useTheme } from "../hooks/useTheme";

function Settings() {
  const { theme, setTheme } = useTheme();
  const { profile, updateProfile } = useAuth();

  const [name, setName] = useState(profile?.name ?? "");
  const [headline, setHeadline] = useState(profile?.headline ?? "");
  const [college, setCollege] = useState(profile?.college ?? "");
  const [branch, setBranch] = useState(profile?.branch ?? "");
  const [year, setYear] = useState(profile?.year ? String(profile.year) : "");
  const [saving, setSaving] = useState(false);


  const iconBoxClass =
    "flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background";

  const inputClass =
    "mt-2 w-full rounded-2xl border border-border bg-muted px-4 py-3 text-foreground outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

  async function handleSaveProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);

    try {
      await updateProfile({
        name,
        headline,
        college,
        branch,
        year: year ? Number(year) : null,
      });

      toast.success("Profile updated");
    } catch (error) {
      console.error(error);
      toast.error("Could not update profile");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Settings</h2>
        <p className="text-muted-foreground">
          Manage your Engineering OS preferences and account details.
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
                Edit your student identity and workspace details.
              </p>
            </div>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Name
              </label>
              <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Headline
              </label>
              <input value={headline} onChange={(e) => setHeadline(e.target.value)} className={inputClass} />
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">
                College
              </label>
              <input value={college} onChange={(e) => setCollege(e.target.value)} className={inputClass} />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Branch
                </label>
                <input value={branch} onChange={(e) => setBranch(e.target.value)} className={inputClass} />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Year
                </label>
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} className={inputClass} />
              </div>
            </div>

            <Button type="submit" disabled={saving} className="w-full justify-center gap-2">
              <Save size={16} />
              {saving ? "Saving..." : "Save Profile"}
            </Button>
          </form>
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
                {theme === mode && <span className="text-sm font-semibold">Active</span>}
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
              <h3 className="text-xl font-bold text-foreground">Data Storage</h3>
              <p className="text-sm text-muted-foreground">
                Current storage mode and backend status.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted p-4">
            <p className="text-sm text-muted-foreground">Current mode</p>
            <p className="mt-1 font-semibold text-foreground">Supabase Profile + Local Tracker Data</p>
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
                Authentication is connected with Supabase.
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