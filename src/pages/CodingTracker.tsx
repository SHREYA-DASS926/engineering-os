import { useEffect, useState } from "react";
import type { CodingProblem } from "../types/coding";
import { codingService } from "../services/coding.service";

function CodingTracker() {
  const [problems, setProblems] = useState<CodingProblem[]>(() => {
    return codingService.getProblems();
  });

  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">(
    "Easy"
  );
  const [topic, setTopic] = useState("");
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    codingService.saveProblems(problems);
  }, [problems]);

  function addProblem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !platform || !topic) {
      return;
    }

    const newProblem: CodingProblem = {
      id: Date.now(),
      name,
      platform,
      difficulty,
      topic,
      solved,
    };

    setProblems([...problems, newProblem]);

    setName("");
    setPlatform("");
    setDifficulty("Easy");
    setTopic("");
    setSolved(false);
  }

  function deleteProblem(id: number) {
    setProblems(problems.filter((problem) => problem.id !== id));
  }

  function toggleSolved(id: number) {
    setProblems(
      problems.map((problem) => {
        if (problem.id === id) {
          return {
            ...problem,
            solved: !problem.solved,
          };
        }

        return problem;
      })
    );
  }

  function getDifficultyStyle(difficulty: string) {
    if (difficulty === "Easy") {
      return "bg-green-100 text-green-700";
    }

    if (difficulty === "Medium") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-red-100 text-red-700";
  }

  const totalProblems = problems.length;
  const solvedProblems = problems.filter((problem) => problem.solved).length;
  const unsolvedProblems = totalProblems - solvedProblems;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Coding Tracker</h2>
        <p className="text-slate-500">
          Track DSA, projects, skills, and GitHub progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Problems</p>
          <h3 className="text-3xl font-bold mt-3">{totalProblems}</h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Solved</p>
          <h3 className="text-3xl font-bold mt-3">{solvedProblems}</h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Unsolved</p>
          <h3 className="text-3xl font-bold mt-3">{unsolvedProblems}</h3>
        </div>
      </div>

      <form
        onSubmit={addProblem}
        className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8"
      >
        <h3 className="text-xl font-bold mb-4">Add Coding Problem</h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Problem name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <input
            type="text"
            placeholder="Platform"
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <select
            value={difficulty}
            onChange={(event) =>
              setDifficulty(event.target.value as "Easy" | "Medium" | "Hard")
            }
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <input
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <button
            type="submit"
            className="bg-slate-900 text-white rounded-xl px-4 py-3 font-medium hover:bg-slate-700"
          >
            Add Problem
          </button>
        </div>

        <label className="flex items-center gap-2 mt-4 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={solved}
            onChange={(event) => setSolved(event.target.checked)}
          />
          Mark as solved
        </label>
      </form>

      {problems.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500">
          No coding problems added yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{problem.name}</h3>
                  <p className="text-slate-500 mt-1">
                    {problem.platform} • {problem.topic}
                  </p>
                </div>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${getDifficultyStyle(
                    problem.difficulty
                  )}`}
                >
                  {problem.difficulty}
                </span>
              </div>

              <p className="text-sm mb-5">
                Status:{" "}
                <span
                  className={
                    problem.solved
                      ? "font-semibold text-green-700"
                      : "font-semibold text-slate-600"
                  }
                >
                  {problem.solved ? "Solved" : "Unsolved"}
                </span>
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => toggleSolved(problem.id)}
                  className="text-sm text-slate-700 hover:text-slate-950 font-medium"
                >
                  Toggle solved
                </button>

                <button
                  onClick={() => deleteProblem(problem.id)}
                  className="text-sm text-red-600 hover:text-red-800 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CodingTracker;