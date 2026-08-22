import { activityService } from "../../../core/activity/activity.service";
import useCrud from "../../../hooks/useCrud";
import { internshipRepository } from "../../../repositories/internship.repository";
import type {
  InternshipApplication,
  InternshipStatus,
} from "../../../types/internship";
import { useAuth } from "../../auth/context/useAuth";

type CreateInternshipInput = Omit<InternshipApplication, "id">;

function useInternships() {
  const { user } = useAuth();

  const {
    items: applications,
    setItems: setApplications,
    loading,
    createItem,
    deleteItem,
  } = useCrud<InternshipApplication, CreateInternshipInput>({
    userId: user?.id,
    repository: internshipRepository,
  });

  async function addApplication(application: InternshipApplication) {
    const savedApplication = await createItem({
      company: application.company,
      role: application.role,
      status: application.status,
      dateApplied: application.dateApplied,
      notes: application.notes,
    });

    if (
      savedApplication &&
      savedApplication.status === "Applied"
    ) {
      await activityService.logInternshipApplied(
        savedApplication.company
      );
    }
  }

  async function deleteApplication(id: number) {
    await deleteItem(id);
  }

  async function updateStatus(
    id: number,
    newStatus: InternshipStatus
  ) {
    const targetApplication = applications.find(
      (application) => application.id === id
    );

    if (!targetApplication) return;

    // Don't update or log anything if the status did not change.
    if (targetApplication.status === newStatus) return;

    const updatedApplication =
      await internshipRepository.updateStatus(
        id,
        newStatus
      );

    setApplications((currentApplications) =>
      currentApplications.map((application) =>
        application.id === id
          ? updatedApplication
          : application
      )
    );

    if (newStatus === "Applied") {
      await activityService.logInternshipApplied(
        targetApplication.company
      );
    } else {
      await activityService.logInternshipStatus(
        targetApplication.company,
        newStatus
      );
    }
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
    loading,
    addApplication,
    deleteApplication,
    updateStatus,
    totalApplications,
    offers,
    interviews,
  };
}

export default useInternships;