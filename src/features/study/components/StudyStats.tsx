import {
  BookOpen,
  AlertTriangle,
  GraduationCap,
} from "lucide-react";

import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";

type StudyStatsProps = {
  totalSubjects: number;
  averageAttendance: number;
  criticalSubjects: number;
};

function StudyStats({
  totalSubjects,
  averageAttendance,
  criticalSubjects,
}: StudyStatsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
      <Card>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              Total Subjects
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              {totalSubjects}
            </h2>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-500">
            <BookOpen size={28} />
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              Average Attendance
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              {averageAttendance}%
            </h2>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-500">
            <GraduationCap size={28} />
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-sm">
            <span>Overall Attendance</span>
            <span>{averageAttendance}%</span>
          </div>

          <ProgressBar value={averageAttendance} />
        </div>
      </Card>

      <Card>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              Critical Subjects
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              {criticalSubjects}
            </h2>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-500">
            <AlertTriangle size={28} />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default StudyStats;