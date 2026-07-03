import type { CodingProblem } from "../../../types/coding";
import type { InternshipApplication } from "../../../types/internship";
import type { Subject } from "../../../types/study";
import { calculateCareerProfile } from "../../../core/career/careerEngine";
import type { PlacementReadiness } from "../types/placement";

function calculateAverageAttendance(subjects: Subject[]) {
  if (subjects.length === 0) {
    return 0;
  }

  return Math.round(
    subjects.reduce((sum, subject) => {
      if (subject.totalClasses === 0) {
        return sum;
      }

      return sum + (subject.attendedClasses / subject.totalClasses) * 100;
    }, 0) / subjects.length
  );
}

export function calculatePlacementReadiness(params: {
  subjects: Subject[];
  codingProblems: CodingProblem[];
  applications: InternshipApplication[];
}): PlacementReadiness {
  const solvedProblems = params.codingProblems.filter(
    (problem) => problem.solved
  ).length;

  const careerProfile = calculateCareerProfile({
    academics: {
      averageAttendance: calculateAverageAttendance(params.subjects),
      subjectCount: params.subjects.length,
    },
    coding: {
      solvedProblems,
      totalProblems: params.codingProblems.length,
    },
    internships: {
      totalApplications: params.applications.length,
    },
    projects: {
      completedProjects: 1,
    },
    resume: {
      hasResume: false,
    },
    github: {
      hasRepository: true,
    },
  });

  return {
    totalScore: careerProfile.totalScore,
    maxScore: careerProfile.maxScore,
    level: careerProfile.level,
    categories: careerProfile.categories.map((category) => ({
      label: category.label,
      score: category.score,
      maxScore: category.maxScore,
      description: category.description,
    })),
    recommendations: careerProfile.recommendations,
  };
}