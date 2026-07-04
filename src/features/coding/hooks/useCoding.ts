import { useEffect, useState } from "react";

import { activityService } from "../../../core/activity/activity.service";
import { codingRepository } from "../../../repositories/coding.repository";
import type { CodingProblem } from "../../../types/coding";

function useCoding() {
  const [problems, setProblems] = useState<CodingProblem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProblems() {
      const savedProblems = await codingRepository.getAll();
      setProblems(savedProblems);
      setLoading(false);
    }

    loadProblems();
  }, []);

  useEffect(() => {
    if (!loading) {
      codingRepository.saveAll(problems);
    }
  }, [problems, loading]);

  function addProblem(problem: CodingProblem) {
    setProblems([...problems, problem]);
  }

  function deleteProblem(id: number) {
    setProblems(problems.filter((problem) => problem.id !== id));
  }

  function toggleSolved(id: number) {
    setProblems(
      problems.map((problem) => {
        if (problem.id !== id) return problem;

        if (!problem.solved) {
          activityService.logCodingSolved(problem.name, problem.difficulty);
        }

        return {
          ...problem,
          solved: !problem.solved,
        };
      })
    );
  }

  const totalProblems = problems.length;
  const solvedProblems = problems.filter((problem) => problem.solved).length;
  const unsolvedProblems = totalProblems - solvedProblems;

  return {
    problems,
    loading,
    addProblem,
    deleteProblem,
    toggleSolved,
    totalProblems,
    solvedProblems,
    unsolvedProblems,
  };
}

export default useCoding;