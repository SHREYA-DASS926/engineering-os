import { Briefcase } from "lucide-react";

import EmptyState from "../../../components/ui/EmptyState";

import type {
  InternshipApplication,
  InternshipStatus,
} from "../../../types/internship";

import InternshipCard from "./InternshipCard";

type InternshipGridProps = {
  applications: InternshipApplication[];
  onDelete: (id: number) => void;
  onUpdateStatus: (id: number, status: InternshipStatus) => void;
};

function InternshipGrid({
  applications,
  onDelete,
  onUpdateStatus,
}: InternshipGridProps) {
  if (applications.length === 0) {
    return (
      <EmptyState
        icon={Briefcase}
        title="No internship applications yet"
        description="Add your first application and start tracking your internship pipeline."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      {applications.map((application) => (
        <InternshipCard
          key={application.id}
          application={application}
          onDelete={onDelete}
          onUpdateStatus={onUpdateStatus}
        />
      ))}
    </div>
  );
}

export default InternshipGrid;