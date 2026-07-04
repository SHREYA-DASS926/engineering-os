import { useEffect, useState } from "react";

import { activityService } from "../../../core/activity/activity.service";
import { useAuth } from "../../auth/context/AuthContext";
import { codingRepository } from "../../../repositories/coding.repository";
import type { CodingProblem } from "../../../types/coding";

function useCoding() {
  const { user } = useAuth();

  const [problems, setProblems] = useState<CodingProblem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProblems() {
      if (!user) {
        setLoading(false);
        return;
      }

      const savedProblems = await codingRepository.getAll(user.id);
      setProblems(savedProblems);
      setLoading(false);
    }

    loadProblems();
  }, [user]);

  async function addProblem(problem: CodingProblem) {
    if (!user) return;

    const savedProblem = await codingRepository.create(user.id, {
      name: problem.name,
      platform: problem.platform,
      difficulty: problem.difficulty,
      topic: problem.topic,
      solved: problem.solved,
    });

    setProblems([savedProblem, ...problems]);
  }

  async function deleteProblem(id: number) {
    await codingRepository.delete(id);
    setProblems(problems.filter((problem) => problem.id !== id));
  }

  async function toggleSolved(id: number) {
    const targetProblem = problems.find((problem) => problem.id === id);

    if (!targetProblem) return;

    const updatedProblem = await codingRepository.update(id, {
      solved: !targetProblem.solved,
    });

    if (!targetProblem.solved) {
      activityService.logCodingSolved(
        targetProblem.name,
        targetProblem.difficulty
      );
    }

    setProblems(
      problems.map((problem) =>
        problem.id === id ? updatedProblem : problem
      )
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