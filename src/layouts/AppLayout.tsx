import { Outlet } from "react-router-dom";
import Topbar from "../components/layout/Topbar";

import Sidebar from "../components/layout/Sidebar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <main className="flex flex-1 flex-col overflow-hidden">
  <Topbar />

  <div className="flex-1 overflow-y-auto p-8">
    <Outlet />
  </div>
</main>
    </div>
  );
}

export default AppLayout;