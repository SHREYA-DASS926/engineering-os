import { useEffect, useState } from "react";
import { toast } from "sonner";
import { activityService } from "../../../core/activity/activity.service";

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

  activityService.logStudySession(subject.name);

  toast.success("Subject added");
  }

  function deleteSubject(id: number) {
  const subject = subjects.find((subject) => subject.id === id);

  if (subject) {
    activityService.logCareerMilestone(
      `Stopped tracking ${subject.name}`
    );
  }

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