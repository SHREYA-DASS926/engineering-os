import { useEffect, useState } from "react";
import { toast } from "sonner";

import { activityService } from "../../../core/activity/activity.service";
import { useAuth } from "../../auth/context/useAuth";
import { studyRepository } from "../../../repositories/study.repository";
import type { Subject } from "../../../types/study";
import { calculateAttendance } from "../utils/attendance";

function useSubjects() {
  const { user } = useAuth();

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSubjects() {
      if (!user) {
        setLoading(false);
        return;
      }

      const savedSubjects = await studyRepository.getAll(user.id);

      setSubjects(savedSubjects);
      setLoading(false);
    }

    loadSubjects();
  }, [user]);

  async function addSubject(subject: Subject) {
    if (!user) return;

    const savedSubject = await studyRepository.create(user.id, {
      name: subject.name,
      attendedClasses: subject.attendedClasses,
      totalClasses: subject.totalClasses,
    });

    setSubjects((currentSubjects) => [
      savedSubject,
      ...currentSubjects,
    ]);

    toast.success("Subject added");
  }

  async function deleteSubject(id: number) {
    await studyRepository.delete(id);

    setSubjects((currentSubjects) =>
      currentSubjects.filter((subject) => subject.id !== id)
    );

    toast.error("Subject deleted");
  }

  async function logStudySession(subjectName: string) {
    await activityService.logStudySession(subjectName);

    toast.success(`Study session logged for ${subjectName}`);
  }

  const totalSubjects = subjects.length;

  const averageAttendance =
    subjects.length === 0
      ? 0
      : Math.round(
          subjects.reduce((sum, subject) => {
            return (
              sum +
              calculateAttendance(
                subject.attendedClasses,
                subject.totalClasses
              )
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
    loading,
    addSubject,
    deleteSubject,
    logStudySession,
    totalSubjects,
    averageAttendance,
    criticalSubjects,
  };
}

export default useSubjects;