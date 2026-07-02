import {
  Bell,
  Database,
  GitBranch,
  Moon,
  Shield,
  User,
} from "lucide-react";
function Settings() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Settings</h2>
        <p className="text-slate-500">
          Manage your Engineering OS preferences and upcoming integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-11 w-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <User size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold">Profile</h3>
              <p className="text-sm text-slate-500">
                Student identity and account details.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-600">
                Name
              </label>
              <input
                value="Shrey"
                readOnly
                className="mt-2 w-full border border-slate-300 rounded-2xl px-4 py-3 bg-slate-50"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Role
              </label>
              <input
                value="Engineering Student"
                readOnly
                className="mt-2 w-full border border-slate-300 rounded-2xl px-4 py-3 bg-slate-50"
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-11 w-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Moon size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold">Appearance</h3>
              <p className="text-sm text-slate-500">
                Theme controls will be added later.
              </p>
            </div>
          </div>

          <button className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-left font-medium hover:bg-slate-50">
            Dark mode coming soon
          </button>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-11 w-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Database size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold">Data Storage</h3>
              <p className="text-sm text-slate-500">
                Current storage mode and planned backend.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Current mode</p>
            <p className="font-semibold mt-1">Browser Local Storage</p>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-11 w-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Shield size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold">Security</h3>
              <p className="text-sm text-slate-500">
                Authentication will be added with Supabase.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-slate-600">
              <Bell size={18} />
              <span>Smart notifications planned</span>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <GitBranch size={18} />
              <span>GitHub integration planned</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Settings;