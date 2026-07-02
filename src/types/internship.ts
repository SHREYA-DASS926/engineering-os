export type InternshipStatus =
  | "Applied"
  | "Online Assessment"
  | "Interview"
  | "Offer"
  | "Rejected";

export type InternshipApplication = {
  id: number;
  company: string;
  role: string;
  status: InternshipStatus;
  dateApplied: string;
  notes: string;
};