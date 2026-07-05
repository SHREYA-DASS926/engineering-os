import { useEffect, useState } from "react";

import { codingRepository } from "../../../repositories/coding.repository";
import { expenseRepository } from "../../../repositories/expense.repository";
import { internshipRepository } from "../../../repositories/internship.repository";
import { studyRepository } from "../../../repositories/study.repository";
import { generateCareerIntelligence } from "../../../core/career/careerIntelligence";
import {
  calculatePlacementLevel,
  calculatePlacementScore,
} from "../../../core/placement/placementEngine";
import { useAuth } from "../../auth/context/AuthContext";

type DashboardState = {
  placement: {
    totalScore: number;
    maxScore: number;
    level: "Beginner" | "Improving" | "Ready" | "Strong";
    categories: {
      label: string;
      score: number;
      maxScore: number;
      description: string;
    }[];
    recommendations: string[];
  };
  study: {
    attendance: number;
    subjects: number;
  };
  coding: {
    solved: number;
    total: number;
  };
  internships: {
    total: number;
  };
  expenses: {
    total: number;
  };
  mission: {
    title: string;
    description: string;
    estimatedGain: string;
    duration: string;
  };
  aiBrief: {
    insight: string;
  };
  forecast: unknown;
  loading: boolean;
};

function useDashboard() {
  const { user } = useAuth();

  const [dashboard, setDashboard] = useState<DashboardState>({
    placement: {
      totalScore: 0,
      maxScore: 100,
      level: "Beginner",
      categories: [],
      recommendations: [],
    },
    study: {
      attendance: 0,
      subjects: 0,
    },
    coding: {
      solved: 0,
      total: 0,
    },
    internships: {
      total: 0,
    },
    expenses: {
      total: 0,
    },
    mission: {
      title: "Start your daily mission",
      description: "Add coding, study, or career progress to begin.",
      estimatedGain: "+3 Score",
      duration: "30 min",
    },
    aiBrief: {
      insight: "Start tracking your progress to receive personalized insights.",
    },
    forecast: null,
    loading: true,
  });

  useEffect(() => {
    async function loadDashboard() {
      if (!user) return;

      const [subjects, codingProblems, applications, expenses] =
        await Promise.all([
          studyRepository.getAll(user.id),
          codingRepository.getAll(user.id),
          internshipRepository.getAll(user.id),
          expenseRepository.getAll(user.id),
        ]);

      const averageAttendance =
        subjects.length === 0
          ? 0
          : Math.round(
              subjects.reduce((sum, subject) => {
                if (subject.totalClasses === 0) return sum;

                return (
                  sum +
                  (subject.attendedClasses / subject.totalClasses) * 100
                );
              }, 0) / subjects.length
            );

      const solvedProblems = codingProblems.filter(
        (problem) => problem.solved
      ).length;

      const codingScore = Math.min(solvedProblems * 4, 100);
      const studyScore = averageAttendance;
      const internshipScore = Math.min(applications.length * 12, 100);
      const projectsScore = 35;
      const consistencyScore = Math.min(
        solvedProblems + subjects.length * 5 + applications.length * 8,
        100
      );

      const totalScore = calculatePlacementScore({
        coding: codingScore,
        study: studyScore,
        internships: internshipScore,
        projects: projectsScore,
        consistency: consistencyScore,
      });

      const level = calculatePlacementLevel(totalScore);

      const placement: DashboardState["placement"] = {
        totalScore,
        maxScore: 100,
        level,
        categories: [
          {
            label: "Coding",
            score: codingScore,
            maxScore: 100,
            description: "DSA and problem-solving progress",
          },
          {
            label: "Study",
            score: studyScore,
            maxScore: 100,
            description: "Academic attendance and consistency",
          },
          {
            label: "Internships",
            score: internshipScore,
            maxScore: 100,
            description: "Career application progress",
          },
          {
            label: "Projects",
            score: projectsScore,
            maxScore: 100,
            description: "Portfolio project strength",
          },
          {
            label: "Consistency",
            score: consistencyScore,
            maxScore: 100,
            description: "Overall activity consistency",
          },
        ],
        recommendations: [
          "Solve more Medium-level coding problems.",
          "Apply to internships consistently.",
          "Build one strong full-stack project.",
        ],
      };

      const intelligence = generateCareerIntelligence({
        totalScore: placement.totalScore,
        maxScore: placement.maxScore,
        level: placement.level,
        categories: placement.categories.map((category) => ({
          id: category.label.toLowerCase(),
          label: category.label,
          score: category.score,
          maxScore: category.maxScore,
          description: category.description,
        })),
        recommendations: placement.recommendations,
      });

      setDashboard({
        placement,
        study: {
          attendance: averageAttendance,
          subjects: subjects.length,
        },
        coding: {
          solved: solvedProblems,
          total: codingProblems.length,
        },
        internships: {
          total: applications.length,
        },
        expenses: {
          total: expenses.reduce((sum, expense) => sum + expense.amount, 0),
        },
        mission: intelligence.mission,
        aiBrief: intelligence.aiBrief,
        forecast: intelligence.forecast,
        loading: false,
      });
    }

    loadDashboard();
  }, [user]);

  return dashboard;
}

export default useDashboard;