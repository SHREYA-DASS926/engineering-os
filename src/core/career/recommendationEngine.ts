import type { CareerCategoryScore } from "./types";

export function generateCareerRecommendations(
  categories: CareerCategoryScore[]
) {
  const recommendations: string[] = [];

  const coding = categories.find((category) => category.id === "coding");
  const internships = categories.find(
    (category) => category.id === "internships"
  );
  const projects = categories.find((category) => category.id === "projects");
  const resume = categories.find((category) => category.id === "resume");

  if (coding && coding.score < 20) {
    recommendations.push("Improve coding consistency by solving more DSA problems.");
  }

  if (internships && internships.score < 8) {
    recommendations.push("Apply to more internships to increase placement opportunities.");
  }

  if (projects && projects.score < 15) {
    recommendations.push("Complete and deploy one polished full-stack project.");
  }

  if (resume && resume.score < 8) {
    recommendations.push("Create or improve your resume before applying widely.");
  }

  if (recommendations.length === 0) {
    recommendations.push("Maintain consistency and keep improving your profile.");
  }

  return recommendations;
}