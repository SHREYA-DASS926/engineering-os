import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  description: string;
  icon?: LucideIcon;
};

function StatCard({ title, value, description, icon: Icon }: StatCardProps) {
  return (
    <div className="group bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="text-3xl font-bold mt-3 tracking-tight">{value}</h3>
          <p className="text-sm text-slate-500 mt-2">{description}</p>
        </div>

        {Icon && (
          <div className="h-11 w-11 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition">
            <Icon size={22} />
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCard;