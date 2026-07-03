import type { LucideIcon } from "lucide-react";

type WidgetHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
};

function WidgetHeader({
  title,
  subtitle,
  icon: Icon,
}: WidgetHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-5">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>

        {subtitle && (
          <p className="text-sm text-slate-500 mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {Icon && (
        <div className="rounded-2xl bg-slate-100 p-3">
          <Icon size={20} />
        </div>
      )}
    </div>
  );
}

export default WidgetHeader;