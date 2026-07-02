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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">Total Subjects</p>
        <h3 className="text-3xl font-bold mt-3">{totalSubjects}</h3>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Average Attendance
        </p>
        <h3 className="text-3xl font-bold mt-3">{averageAttendance}%</h3>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Critical Subjects
        </p>
        <h3 className="text-3xl font-bold mt-3">{criticalSubjects}</h3>
      </div>
    </div>
  );
}

export default StudyStats;