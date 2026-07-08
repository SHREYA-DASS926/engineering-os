import { CalendarDays, Trash2 } from "lucide-react";

import { Button } from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

import type {
  InternshipApplication,
  InternshipStatus,
} from "../../../types/internship";

type InternshipCardProps = {
  application: InternshipApplication;
  onDelete: (id: number) => void;
  onUpdateStatus: (id: number, status: InternshipStatus) => void;
};

const statuses: InternshipStatus[] = [
  "Applied",
  "Online Assessment",
  "Interview",
  "Offer",
  "Rejected",
];

function getStatusClass(status: InternshipStatus) {
  if (status === "Offer") return "bg-emerald-500/10 text-emerald-500";
  if (status === "Rejected") return "bg-red-500/10 text-red-500";
  if (status === "Interview") return "bg-blue-500/10 text-blue-500";
  if (status === "Online Assessment") return "bg-yellow-500/10 text-yellow-500";

  return "bg-muted text-foreground";
}

function InternshipCard({
  application,
  onDelete,
  onUpdateStatus,
}: InternshipCardProps) {
  return (
    <Card className="group bg-linear-to-b from-card to-card/90 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground">
            {application.company}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {application.role}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClass(
            application.status
          )}`}
        >
          {application.status}
        </span>
      </div>

      <div className="mb-5 flex items-center gap-2 rounded-2xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
        <CalendarDays size={16} />
        Applied on: {application.dateApplied}
      </div>

      {application.notes && (
        <p className="mb-5 rounded-2xl border border-border bg-muted/40 p-4 text-sm leading-6 text-foreground">
          {application.notes}
        </p>
      )}

      <div className="mb-5 flex flex-wrap gap-2">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => onUpdateStatus(application.id, status)}
            className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${
              application.status === status
                ? "border-blue-500/30 bg-blue-500/10 text-blue-500"
                : "border-border bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <Button
        variant="destructive"
        onClick={() => onDelete(application.id)}
        className="w-full justify-center gap-2"
      >
        <Trash2 size={16} />
        Delete Application
      </Button>
    </Card>
  );
}

export default InternshipCard;