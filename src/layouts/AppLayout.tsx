import { NavLink, Outlet } from "react-router-dom";

import { navItems } from "../constants/navigation";

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex">
      <aside className="w-72 bg-white border-r border-slate-200 p-6">
        <h1 className="text-2xl font-bold mb-2">Engineering OS</h1>
        <p className="text-sm text-slate-500 mb-8">
          Student productivity dashboard
        </p>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;