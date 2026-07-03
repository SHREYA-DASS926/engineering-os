import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navItems } from "../constants/navigation";
import { LogOut } from "lucide-react";
import { useAuth } from "../features/auth/context/AuthContext";

function AppLayout() {
  const { user, signOut } = useAuth();
const navigate = useNavigate();

async function handleLogout() {
  await signOut();
  navigate("/login");
}
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex">
      <aside className="w-72 bg-white border-r border-slate-200 p-6 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">
            Engineering OS
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Student productivity hub
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-200">
  <p className="text-xs text-slate-400 mb-2">
    Logged in as
  </p>

  <div className="flex items-center gap-3 mb-5">
    <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
      {user?.email?.charAt(0).toUpperCase()}
    </div>

    <div className="min-w-0">
      <p className="text-sm font-semibold truncate">
        {user?.email}
      </p>

      <p className="text-xs text-slate-500">
        Engineering OS User
      </p>
    </div>
  </div>

  <button
    onClick={handleLogout}
    className="w-full flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-600 hover:bg-red-100 transition"
  >
    <LogOut size={18} />
    Logout
  </button>
</div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;