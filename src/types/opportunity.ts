export type OpportunityType =
  | "Hackathon"
  | "Internship"
  | "Fellowship"
  | "Open Source";

export type OpportunityMode = "Remote" | "Hybrid" | "On-site";

export type Opportunity = {
  id: string;
  title: string;
  type: OpportunityType;
  match: number;
  deadline: string;
  mode: OpportunityMode;
  location: string;
  description: string;
  eligibility: string[];
  reason: string[];
  officialLink: string;
};