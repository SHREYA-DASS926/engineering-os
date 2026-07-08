import { AlertTriangle, BookOpen, CheckCircle2, Trash2 } from "lucide-react";

import Badge from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";

import type { Subject } from "../../../types/study";

import {
  calculateAttendance,
  getAttendanceStatus,
} from "../utils/attendance";

type SubjectCardProps = {
  subject: Subject;
  onDelete: (id: number) => void;
};

function SubjectCard({ subject, onDelete }: SubjectCardProps) {
  const attendance = calculateAttendance(
    subject.attendedClasses,
    subject.totalClasses
  );

  const status = getAttendanceStatus(attendance);

  const badgeVariant =
    status === "Safe" ? "success" : status === "Warning" ? "warning" : "danger";

  const StatusIcon = status === "Safe" ? CheckCircle2 : AlertTriangle;

  return (
    <Card className="group bg-linear-to-b from-card to-card/90 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-500">
            <BookOpen size={22} />
          </div>

          <div>
            <h3 className="text-xl font-bold leading-tight text-foreground">
              {subject.name}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {subject.attendedClasses} / {subject.totalClasses} classes attended
            </p>
          </div>
        </div>

        <Badge variant={badgeVariant}>{status}</Badge>
      </div>

      <div className="rounded-2xl border border-border bg-muted/50 p-4">
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-medium text-muted-foreground">Attendance</span>
          <span className="font-bold text-foreground">{attendance}%</span>
        </div>

        <ProgressBar value={attendance} />

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-semibold text-foreground">
          <StatusIcon size={15} />
          {status === "Safe"
            ? "On track"
            : status === "Warning"
              ? "Needs attention"
              : "Critical"}
        </div>
      </div>

      <Button
        variant="destructive"
        onClick={() => onDelete(subject.id)}
        className="mt-6 w-full justify-center gap-2"
      >
        <Trash2 size={16} />
        Delete Subject
      </Button>
    </Card>
  );
}

export default SubjectCard;