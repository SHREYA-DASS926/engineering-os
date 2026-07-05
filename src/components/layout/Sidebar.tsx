import { LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import { navigation } from "../../constants/navigation";
import { useAuth } from "../../features/auth/context/AuthContext";

function Sidebar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut();
    navigate("/login");
  }

  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-slate-200 bg-white p-6">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-indigo-700 text-xl font-bold text-white shadow-lg">
          E
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight">EngOS</h1>
          <p className="text-sm text-slate-500">Career Operating System</p>
        </div>
      </div>

      <nav className="space-y-7">
        {navigation.map((section) => (
          <div key={section.title}>
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              {section.title}
            </p>

            <div className="space-y-2">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                      }`
                    }
                  >
                    <Icon
                      size={18}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs text-slate-500">Logged in as</p>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
              {user?.email?.charAt(0).toUpperCase() ?? "U"}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{user?.email}</p>
              <p className="text-xs text-slate-500">Engineering Student</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 font-medium text-red-600 transition hover:bg-red-100"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;