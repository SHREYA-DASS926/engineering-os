import { useEffect, useState } from "react";
import { codingService } from "../../../services/coding.service";
import { activityService } from "../../../core/activity/activity.service";
import type { CodingProblem } from "../../../types/coding";

function useCoding() {
  const [problems, setProblems] = useState<CodingProblem[]>(() => {
    return codingService.getProblems();
  });

  useEffect(() => {
    codingService.saveProblems(problems);
  }, [problems]);

  function addProblem(problem: CodingProblem) {
    setProblems([...problems, problem]);
  }

  function deleteProblem(id: number) {
    setProblems(problems.filter((problem) => problem.id !== id));
  }

  function toggleSolved(id: number) {
  setProblems(
    problems.map((problem) => {
      if (problem.id !== id) {
        return problem;
      }

      const updatedProblem = {
        ...problem,
        solved: !problem.solved,
      };

      if (!problem.solved) {
        activityService.logCodingSolved(problem.name, problem.difficulty);
      }

      return updatedProblem;
    })
  );
}

  const totalProblems = problems.length;
  const solvedProblems = problems.filter((problem) => problem.solved).length;
  const unsolvedProblems = totalProblems - solvedProblems;

  return {
    problems,
    addProblem,
    deleteProblem,
    toggleSolved,
    totalProblems,
    solvedProblems,
    unsolvedProblems,
  };
}

export default useCoding;