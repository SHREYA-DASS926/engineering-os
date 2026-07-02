import type { LucideIcon } from "lucide-react";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-10 text-center">
      <div className="mx-auto h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
        <Icon size={24} className="text-slate-600" />
      </div>

      <h3 className="font-bold text-lg">{title}</h3>

      <p className="text-slate-500 mt-2 max-w-md mx-auto">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;