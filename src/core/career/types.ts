export type CareerEngineInput = {
  academics: {
    averageAttendance: number;
    subjectCount: number;
  };
  coding: {
    solvedProblems: number;
    totalProblems: number;
  };
  internships: {
    totalApplications: number;
  };
  projects: {
    completedProjects: number;
  };
  resume: {
    hasResume: boolean;
  };
  github: {
    hasRepository: boolean;
  };
};

export type CareerCategoryScore = {
  id: string;
  label: string;
  score: number;
  maxScore: number;
  description: string;
};

export type CareerProfile = {
  totalScore: number;
  maxScore: number;
  level: "Beginner" | "Improving" | "Ready" | "Strong";
  categories: CareerCategoryScore[];
  recommendations: string[];
};