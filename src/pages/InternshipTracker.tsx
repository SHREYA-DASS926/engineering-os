import SectionHeader from "../components/ui/SectionHeader";

import InternshipForm from "../features/internship/components/InternshipForm";
import InternshipGrid from "../features/internship/components/InternshipGrid";
import InternshipStats from "../features/internship/components/InternshipStats";
import useInternships from "../features/internship/hooks/useInternships";

function InternshipTracker() {
  const {
    applications,
    addApplication,
    deleteApplication,
    updateStatus,
    totalApplications,
    offers,
    interviews,
  } = useInternships();

  return (
    <div>
      <SectionHeader
        title="Internship Tracker"
        description="Track applications, interviews, offers, and rejections."
      />

      <InternshipStats
        totalApplications={totalApplications}
        interviews={interviews}
        offers={offers}
      />

      <InternshipForm onAddApplication={addApplication} />

      <InternshipGrid
        applications={applications}
        onDelete={deleteApplication}
        onUpdateStatus={updateStatus}
      />
    </div>
  );
}

export default InternshipTracker;