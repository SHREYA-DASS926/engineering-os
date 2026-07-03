import { Briefcase, FileText, FolderGit2, GitBranch } from "lucide-react";

import Card from "../../../components/ui/Card";

type CareerSummaryCardsProps = {
  applicationCount: number;
};

function CareerSummaryCards({ applicationCount }: CareerSummaryCardsProps) {
  return (
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
          {applicationCount} applications tracked
        </p>
      </Card>

      <Card>
        <GitBranch className="text-slate-500 mb-4" size={24} />
        <h3 className="text-xl font-bold">GitHub</h3>
        <p className="text-slate-500 mt-2">Repository active</p>
      </Card>
    </div>
  );
}

export default CareerSummaryCards;