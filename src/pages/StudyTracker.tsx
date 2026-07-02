import { BookOpen } from "lucide-react";
import EmptyState from "../components/ui/EmptyState";
import SectionHeader from "../components/ui/SectionHeader";
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
      <SectionHeader
        title="Study Tracker"
        description="Track subjects, attendance, exams, and assignments."
      />

      <StudyStats
        totalSubjects={totalSubjects}
        averageAttendance={averageAttendance}
        criticalSubjects={criticalSubjects}
      />

      <SubjectForm onAddSubject={addSubject} />

      {subjects.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="No subjects added yet"
          description="Add your first subject to start tracking attendance and academic progress."
        />
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