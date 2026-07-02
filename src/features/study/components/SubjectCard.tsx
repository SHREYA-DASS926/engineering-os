import type { Subject } from "../../../types/study";
import {
  calculateAttendance,
  getAttendanceStatus,
  getStatusStyle,
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

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold">{subject.name}</h3>
          <p className="text-slate-500 mt-1">
            {subject.attendedClasses} / {subject.totalClasses} classes attended
          </p>
        </div>

        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusStyle(
            status
          )}`}
        >
          {status}
        </span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>Attendance</span>
        <span>{attendance}%</span>
      </div>

      <div className="h-3 bg-slate-100 rounded-full mb-5">
        <div
          className="h-3 bg-slate-900 rounded-full"
          style={{ width: `${attendance}%` }}
        />
      </div>

      <button
        onClick={() => onDelete(subject.id)}
        className="text-sm text-red-600 hover:text-red-800 font-medium"
      >
        Delete subject
      </button>
    </div>
  );
}

export default SubjectCard;