import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
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

  return (
    <Card>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold">{subject.name}</h3>
          <p className="text-slate-500 mt-1">
            {subject.attendedClasses} / {subject.totalClasses} classes attended
          </p>
        </div>

        <Badge variant={badgeVariant}>{status}</Badge>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>Attendance</span>
        <span>{attendance}%</span>
      </div>

      <ProgressBar value={attendance} />

      <button
        onClick={() => onDelete(subject.id)}
        className="mt-5 text-sm text-red-600 hover:text-red-800 font-medium"
      >
        Delete subject
      </button>
    </Card>
  );
}

export default SubjectCard;