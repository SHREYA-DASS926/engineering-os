import Card from "../../../components/ui/Card";

type CodingStatsProps = {
  totalProblems: number;
  solvedProblems: number;
  unsolvedProblems: number;
};

function CodingStats({
  totalProblems,
  solvedProblems,
  unsolvedProblems,
}: CodingStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <p className="text-sm font-medium text-slate-500">Total Problems</p>
        <h3 className="text-3xl font-bold mt-3">{totalProblems}</h3>
      </Card>

      <Card>
        <p className="text-sm font-medium text-slate-500">Solved</p>
        <h3 className="text-3xl font-bold mt-3">{solvedProblems}</h3>
      </Card>

      <Card>
        <p className="text-sm font-medium text-slate-500">Unsolved</p>
        <h3 className="text-3xl font-bold mt-3">{unsolvedProblems}</h3>
      </Card>
    </div>
  );
}

export default CodingStats;