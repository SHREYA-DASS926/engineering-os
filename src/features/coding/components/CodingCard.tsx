import { CheckCircle2, Code2, Trash2 } from "lucide-react";

import Badge from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
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
    <Card className="group bg-linear-to-b from-card to-card/90 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-500">
            <Code2 size={22} />
          </div>

          <div>
            <h3 className="text-xl font-bold leading-tight text-foreground">
              {problem.name}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {problem.platform} • {problem.topic}
            </p>
          </div>
        </div>

        <Badge variant={getDifficultyVariant(problem.difficulty)}>
          {problem.difficulty}
        </Badge>
      </div>

      <div className="mb-6 rounded-2xl border border-border bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">Status</p>

        <div
          className={`mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
            problem.solved
              ? "bg-emerald-500/10 text-emerald-500"
              : "bg-orange-500/10 text-orange-500"
          }`}
        >
          <CheckCircle2 size={15} />
          {problem.solved ? "Solved" : "Unsolved"}
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          variant={problem.solved ? "secondary" : "default"}
          onClick={() => onToggleSolved(problem.id)}
          className="flex-1 justify-center"
        >
          {problem.solved ? "Mark Unsolved" : "Mark Solved"}
        </Button>

        <Button
          variant="destructive"
          onClick={() => onDelete(problem.id)}
          className="justify-center gap-2"
        >
          <Trash2 size={16} />
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default CodingCard;