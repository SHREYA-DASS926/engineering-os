import { useEffect, useState } from "react";
import type {
  InternshipApplication,
  InternshipStatus,
} from "../types/internship";
import { internshipService } from "../services/internship.service";
import { activityService } from "../core/activity/activity.service";

function InternshipTracker() {
  const [applications, setApplications] = useState<InternshipApplication[]>(
    () => {
      return internshipService.getApplications();
    }
  );

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<InternshipStatus>("Applied");
  const [dateApplied, setDateApplied] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    internshipService.saveApplications(applications);
  }, [applications]);

  function addApplication(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!company || !role || !dateApplied) {
      return;
    }

    const newApplication: InternshipApplication = {
      id: Date.now(),
      company,
      role,
      status,
      dateApplied,
      notes,
    };

    setApplications([...applications, newApplication]);
    activityService.logInternshipApplied(company);
    setCompany("");
    setRole("");
    setStatus("Applied");
    setDateApplied("");
    setNotes("");
  }
  
  function deleteApplication(id: number) {
    setApplications(
      applications.filter((application) => application.id !== id)
    );
  }

  function updateStatus(id: number, newStatus: InternshipStatus) {
    setApplications(
      applications.map((application) => {
        if (application.id === id) {
          activityService.logCareerMilestone(
          `${application.company} moved to ${newStatus}`
          );
          return {
            ...application,
            status: newStatus,
          };
        }

        return application;
      })
    );
  }

  function getStatusStyle(status: InternshipStatus) {
    if (status === "Offer") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Rejected") {
      return "bg-red-100 text-red-700";
    }

    if (status === "Interview") {
      return "bg-blue-100 text-blue-700";
    }

    if (status === "Online Assessment") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-slate-100 text-slate-700";
  }

  const totalApplications = applications.length;

  const offers = applications.filter(
    (application) => application.status === "Offer"
  ).length;

  const interviews = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Internship Tracker</h2>
        <p className="text-slate-500">
          Track applications, interviews, offers, and rejections.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Total Applications
          </p>
          <h3 className="text-3xl font-bold mt-3">{totalApplications}</h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Interviews</p>
          <h3 className="text-3xl font-bold mt-3">{interviews}</h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Offers</p>
          <h3 className="text-3xl font-bold mt-3">{offers}</h3>
        </div>
      </div>

      <form
        onSubmit={addApplication}
        className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8"
      >
        <h3 className="text-xl font-bold mb-4">Add Application</h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value as InternshipStatus)
            }
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          >
            <option>Applied</option>
            <option>Online Assessment</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

          <input
            type="date"
            value={dateApplied}
            onChange={(event) => setDateApplied(event.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <button
            type="submit"
            className="bg-slate-900 text-white rounded-xl px-4 py-3 font-medium hover:bg-slate-700"
          >
            Add
          </button>
        </div>

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          className="mt-4 w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
        />
      </form>

      {applications.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500">
          No internship applications added yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {applications.map((application) => (
            <div
              key={application.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    {application.company}
                  </h3>
                  <p className="text-slate-500 mt-1">{application.role}</p>
                </div>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusStyle(
                    application.status
                  )}`}
                >
                  {application.status}
                </span>
              </div>

              <p className="text-sm text-slate-500 mb-3">
                Applied on: {application.dateApplied}
              </p>

              {application.notes && (
                <p className="text-sm text-slate-700 mb-4">
                  {application.notes}
                </p>
              )}

              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  "Applied",
                  "Online Assessment",
                  "Interview",
                  "Offer",
                  "Rejected",
                ].map((statusOption) => (
                  <button
                    key={statusOption}
                    onClick={() =>
                      updateStatus(
                        application.id,
                        statusOption as InternshipStatus
                      )
                    }
                    className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full px-3 py-2"
                  >
                    {statusOption}
                  </button>
                ))}
              </div>

              <button
                onClick={() => deleteApplication(application.id)}
                className="text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Delete application
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InternshipTracker;