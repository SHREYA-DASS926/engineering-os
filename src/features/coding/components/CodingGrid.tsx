import { Code2 } from "lucide-react";

import EmptyState from "../../../components/ui/EmptyState";

import type { CodingProblem } from "../../../types/coding";

import CodingCard from "./CodingCard";

type CodingGridProps = {
  problems: CodingProblem[];
  onDelete: (id: number) => void;
  onToggleSolved: (id: number) => void;
};

function CodingGrid({
  problems,
  onDelete,
  onToggleSolved,
}: CodingGridProps) {
  if (problems.length === 0) {
    return (
      <EmptyState
        icon={Code2}
        title="No coding problems yet"
        description="Add your first DSA problem and start building your coding profile."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {problems.map((problem) => (
        <CodingCard
          key={problem.id}
          problem={problem}
          onDelete={onDelete}
          onToggleSolved={onToggleSolved}
        />
      ))}
    </div>
  );
}

export default CodingGrid;