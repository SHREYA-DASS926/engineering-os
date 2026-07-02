import { useEffect, useState } from "react";
import type { Subject } from "../../../types/study";
import { calculateAttendance } from "../utils/attendance";

function useSubjects() {
  const [subjects, setSubjects] = useState<Subject[]>(() => {
    const savedSubjects = localStorage.getItem("subjects");

    if (savedSubjects) {
      return JSON.parse(savedSubjects);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  function addSubject(subject: Subject) {
    setSubjects([...subjects, subject]);
  }

  function deleteSubject(id: number) {
    setSubjects(subjects.filter((subject) => subject.id !== id));
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