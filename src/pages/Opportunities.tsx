import { CalendarDays, ExternalLink, Flame, MapPin, Sparkles } from "lucide-react";

import { Card, Button } from "../components/ui";

const opportunities = [
  {
    title: "Hack4Bengal",
    type: "Hackathon",
    match: 94,
    deadline: "12 days",
    location: "Kolkata / Hybrid",
    reason: ["React", "Student", "Team project"],
  },
  {
    title: "Google Summer of Code",
    type: "Open Source",
    match: 91,
    deadline: "Upcoming",
    location: "Remote",
    reason: ["GitHub", "Open source", "Coding"],
  },
  {
    title: "MLH Fellowship",
    type: "Fellowship",
    match: 88,
    deadline: "21 days",
    location: "Remote",
    reason: ["Frontend", "Projects", "Collaboration"],
  },
];

function Opportunities() {
  return (
    <div className="space-y-8">
      <Card
        hover={false}
        className="bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
      >
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-blue-300" />
          <p className="text-sm uppercase tracking-[0.25em] text-blue-200">
            Opportunity Radar
          </p>
        </div>

        <h1 className="text-4xl font-bold tracking-tight">
          Discover opportunities that fit your profile.
        </h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          Internships, hackathons, fellowships, open-source programs, and student
          opportunities in one place.
        </p>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {opportunities.map((opportunity) => (
          <Card key={opportunity.title}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {opportunity.type}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  {opportunity.title}
                </h2>
              </div>

              <div className="rounded-full bg-green-50 px-3 py-1 text-sm font-bold text-green-700">
                {opportunity.match}% match
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <CalendarDays size={16} />
                Deadline: {opportunity.deadline}
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={16} />
                {opportunity.location}
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-slate-500">
                Why it matches
              </p>

              <div className="flex flex-wrap gap-2">
                {opportunity.reason.map((reason) => (
                  <span
                    key={reason}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                  >
                    {reason}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Button className="flex-1 justify-center gap-2">
                View Details
                <ExternalLink size={15} />
              </Button>

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Flame size={18} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Opportunities;