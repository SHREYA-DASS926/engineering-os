import {
  Briefcase,
  FileText,
  FolderGit2,
  GitBranch,
  Target,
  TrendingUp,
} from "lucide-react";

import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";
import SectionHeader from "../components/ui/SectionHeader";

import { studyService } from "../services/study.service";
import { codingService } from "../services/coding.service";
import { internshipService } from "../services/internship.service";

import { calculatePlacementReadiness } from "../features/placement/utils/scoring";
import { generateCareerForecast } from "../core/career/forecastEngine";

function CareerHub() {
  const readiness = calculatePlacementReadiness({
    subjects: studyService.getSubjects(),
    codingProblems: codingService.getProblems(),
    applications: internshipService.getApplications(),
  });

  const forecast = generateCareerForecast({
    totalScore: readiness.totalScore,
    maxScore: readiness.maxScore,
    level: readiness.level,
    categories: readiness.categories.map((category) => ({
      id: category.label.toLowerCase(),
      label: category.label,
      score: category.score,
      maxScore: category.maxScore,
      description: category.description,
    })),
    recommendations: readiness.recommendations,
  });

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Career Hub"
        description="Your placement, resume, projects, internships, and career readiness in one place."
      />

      <Card variant="dark" className="p-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 text-slate-300 mb-3">
              <Target size={18} />
              <span>Career Engine</span>
            </div>

            <h2 className="text-5xl font-bold tracking-tight mb-4">
              {readiness.totalScore}
              <span className="text-2xl text-slate-400">
                /{readiness.maxScore}
              </span>
            </h2>

            <p className="text-slate-300 mb-5">
              Current level:{" "}
              <span className="font-semibold text-white">
                {readiness.level}
              </span>
            </p>

            <ProgressBar value={readiness.totalScore} />
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={18} />
              <h3 className="font-bold">Career Forecast</h3>
            </div>

            <p className="text-slate-300 mb-4">
              Projected score in {forecast.timeframe}
            </p>

            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold">{forecast.currentScore}</span>
              <span className="text-slate-400 mb-1">→</span>
              <span className="text-4xl font-bold">{forecast.projectedScore}</span>
              <span className="text-green-400 font-semibold mb-2">
                +{forecast.gain}
              </span>
            </div>

            <p className="text-sm text-slate-300 mt-4">
              {forecast.explanation}
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card>
          <FileText className="text-slate-500 mb-4" size={24} />
          <h3 className="text-xl font-bold">Resume</h3>
          <p className="text-slate-500 mt-2">Not added yet</p>
        </Card>

        <Card>
          <FolderGit2 className="text-slate-500 mb-4" size={24} />
          <h3 className="text-xl font-bold">Projects</h3>
          <p className="text-slate-500 mt-2">1 project in progress</p>
        </Card>

        <Card>
          <Briefcase className="text-slate-500 mb-4" size={24} />
          <h3 className="text-xl font-bold">Internships</h3>
          <p className="text-slate-500 mt-2">
            {internshipService.getApplications().length} applications tracked
          </p>
        </Card>

        <Card>
          <GitBranch className="text-slate-500 mb-4" size={24} />
          <h3 className="text-xl font-bold">GitHub</h3>
          <p className="text-slate-500 mt-2">Repository active</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-xl font-bold mb-4">Next Best Actions</h3>

        <div className="space-y-3">
          {readiness.recommendations.map((recommendation) => (
            <div
              key={recommendation}
              className="rounded-2xl bg-slate-50 border border-slate-100 p-4"
            >
              {recommendation}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default CareerHub;