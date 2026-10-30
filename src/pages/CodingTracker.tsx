import SectionHeader from "../components/ui/SectionHeader";

import CodingForm from "../features/coding/components/CodingForm";
import CodingGrid from "../features/coding/components/CodingGrid";
import CodingStats from "../features/coding/components/CodingStats";
import useCoding from "../features/coding/hooks/useCoding";

function CodingTracker() {
  const {
    problems,
    addProblem,
    deleteProblem,
    toggleSolved,
    totalProblems,
    solvedProblems,
    unsolvedProblems,
  } = useCoding();

  return (
    <div>
      <SectionHeader
        title="Coding Tracker"
        description="Track DSA, projects, skills, and GitHub progress."
      />

      <CodingStats
        totalProblems={totalProblems}
        solvedProblems={solvedProblems}
        unsolvedProblems={unsolvedProblems}
      />

      <div id="add-coding" className="scroll-mt-24">
  <CodingForm onAddProblem={addProblem} />
</div>

      <CodingGrid
        problems={problems}
        onDelete={deleteProblem}
        onToggleSolved={toggleSolved}
      />
    </div>
  );
}

export default CodingTracker;