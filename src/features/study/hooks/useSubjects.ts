import { useEffect, useState } from "react";
import { toast } from "sonner";

import type { Subject } from "../../../types/study";
import { studyService } from "../../../services/study.service";
import { calculateAttendance } from "../utils/attendance";

function useSubjects() {
  const [subjects, setSubjects] = useState<Subject[]>(() => {
    return studyService.getSubjects();
  });

  useEffect(() => {
    studyService.saveSubjects(subjects);
  }, [subjects]);

  function addSubject(subject: Subject) {
    setSubjects([...subjects, subject]);
    toast.success("Subject added");
  }

  function deleteSubject(id: number) {
    setSubjects(subjects.filter((subject) => subject.id !== id));
    toast.error("Subject deleted");
  }

  const totalSubjects = subjects.length;

  const averageAttendance =
    subjects.length === 0
      ? 0
      : Math.round(
          subjects.reduce((sum, subject) => {
            return (
              sum +
              calculateAttendance(subject.attendedClasses, subject.totalClasses)
            );
          }, 0) / subjects.length
        );

  const criticalSubjects = subjects.filter((subject) => {
    const attendance = calculateAttendance(
      subject.attendedClasses,
      subject.totalClasses
    );

    return attendance < 60;
  }).length;

  return {
    subjects,
    addSubject,
    deleteSubject,
    totalSubjects,
    averageAttendance,
    criticalSubjects,
  };
}

export default useSubjects;