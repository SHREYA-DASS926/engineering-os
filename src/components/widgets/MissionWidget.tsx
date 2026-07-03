import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import Widget from "./Widget";
import WidgetHeader from "./WidgetHeader";

type MissionWidgetProps = {
  title: string;
  subtitle?: string;
  mission: string;
  estimatedGain?: string;
  icon?: LucideIcon;
  onStart?: () => void;
};

function MissionWidget({
  title,
  subtitle,
  mission,
  estimatedGain,
  icon,
  onStart,
}: MissionWidgetProps) {
  return (
    <Widget className="bg-slate-900 text-white border-slate-800">
      <WidgetHeader title={title} subtitle={subtitle} icon={icon} />

      <div className="rounded-3xl bg-white/10 border border-white/10 p-5">
        <p className="text-sm text-slate-300 mb-2">Mission</p>
        <h3 className="text-2xl font-bold tracking-tight">{mission}</h3>

        {estimatedGain && (
          <p className="text-sm text-green-300 mt-3">
            Estimated gain: {estimatedGain}
          </p>
        )}
      </div>

      <Button
        onClick={onStart}
        className="mt-5 inline-flex items-center gap-2"
      >
        Start Mission
        <ArrowRight size={16} />
      </Button>
    </Widget>
  );
}

export default MissionWidget;