import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

import type { CodingProblem } from "../../../types/coding";

import { getDifficultyVariant } from "../utils/difficulty";

type CodingCardProps = {
  problem: CodingProblem;
  onDelete: (id: number) => void;
  onToggleSolved: (id: number) => void;
};

function CodingCard({
  problem,
  onDelete,
  onToggleSolved,
}: CodingCardProps) {
  return (
    <Card>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold">
            {problem.name}
          </h3>

          <p className="text-slate-500 mt-1">
            {problem.platform} • {problem.topic}
          </p>
        </div>

        <Badge
          variant={getDifficultyVariant(problem.difficulty)}
        >
          {problem.difficulty}
        </Badge>
      </div>

      <p className="mb-5">
        Status{" "}
        <span
          className={
            problem.solved
              ? "font-semibold text-green-700"
              : "font-semibold text-slate-500"
          }
        >
          {problem.solved ? "Solved" : "Unsolved"}
        </span>
      </p>

      <div className="flex gap-3">
        <Button
          variant="secondary"
          onClick={() => onToggleSolved(problem.id)}
        >
          Toggle
        </Button>

        <Button
          variant="danger"
          onClick={() => onDelete(problem.id)}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default CodingCard;