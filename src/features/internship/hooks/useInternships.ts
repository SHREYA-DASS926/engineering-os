import { useEffect, useState } from "react";

import { activityService } from "../../../core/activity/activity.service";
import { internshipService } from "../../../services/internship.service";
import type {
  InternshipApplication,
  InternshipStatus,
} from "../../../types/internship";

function useInternships() {
  const [applications, setApplications] = useState<InternshipApplication[]>(
    () => internshipService.getApplications()
  );

  useEffect(() => {
    internshipService.saveApplications(applications);
  }, [applications]);

  function addApplication(application: InternshipApplication) {
    setApplications([...applications, application]);
    activityService.logInternshipApplied(application.company);
  }

  function deleteApplication(id: number) {
    setApplications(
      applications.filter((application) => application.id !== id)
    );
  }

  function updateStatus(id: number, newStatus: InternshipStatus) {
    setApplications(
      applications.map((application) => {
        if (application.id !== id) {
          return application;
        }

        activityService.logCareerMilestone(
          `${application.company} moved to ${newStatus}`
        );

        return {
          ...application,
          status: newStatus,
        };
      })
    );
  }

  const totalApplications = applications.length;

  const offers = applications.filter(
    (application) => application.status === "Offer"
  ).length;

  const interviews = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  return {
    applications,
    addApplication,
    deleteApplication,
    updateStatus,
    totalApplications,
    offers,
    interviews,
  };
}

export default useInternships;