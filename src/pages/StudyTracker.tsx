import SubjectCard from "../features/study/components/SubjectCard";
import SubjectForm from "../features/study/components/SubjectForm";
import StudyStats from "../features/study/components/StudyStats";
import useSubjects from "../features/study/hooks/useSubjects";

function StudyTracker() {
  const {
    subjects,
    addSubject,
    deleteSubject,
    totalSubjects,
    averageAttendance,
    criticalSubjects,
  } = useSubjects();

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Study Tracker</h2>
        <p className="text-slate-500">
          Track subjects, attendance, exams, and assignments.
        </p>
      </div>

      <StudyStats
        totalSubjects={totalSubjects}
        averageAttendance={averageAttendance}
        criticalSubjects={criticalSubjects}
      />

      <SubjectForm onAddSubject={addSubject} />

      {subjects.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500">
          No subjects added yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onDelete={deleteSubject}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default StudyTracker;