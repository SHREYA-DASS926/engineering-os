import { useMemo, useState } from "react";
import {
  CalendarDays,
  ExternalLink,
  Flame,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Card, Button } from "../components/ui";
import { opportunities } from "../data/opportunities";
import { Link } from "react-router-dom";

type OpportunityType = "All" | "Hackathon" | "Internship" | "Fellowship" | "Open Source";
type OpportunityMode = "All" | "Remote" | "Hybrid" | "On-site";
type MatchLevel = "All" | "High" | "Medium";



function Opportunities() {
  const [typeFilter, setTypeFilter] = useState<OpportunityType>("All");
  const [modeFilter, setModeFilter] = useState<OpportunityMode>("All");
  const [matchFilter, setMatchFilter] = useState<MatchLevel>("All");

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opportunity) => {
      const typeMatches =
        typeFilter === "All" || opportunity.type === typeFilter;

      const modeMatches =
        modeFilter === "All" || opportunity.mode === modeFilter;

      const matchMatches =
        matchFilter === "All" ||
        (matchFilter === "High" && opportunity.match >= 85) ||
        (matchFilter === "Medium" &&
          opportunity.match >= 70 &&
          opportunity.match < 85);

      return typeMatches && modeMatches && matchMatches;
    });
  }, [typeFilter, modeFilter, matchFilter]);

  return (
    <div className="space-y-8">
      <Card
        hover={false}
        className="bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
      >
        <div className="mb-4 flex items-center gap-3">
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

      <Card hover={false}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <select
            value={typeFilter}
            onChange={(event) =>
              setTypeFilter(event.target.value as OpportunityType)
            }
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none"
          >
            <option>All</option>
            <option>Hackathon</option>
            <option>Internship</option>
            <option>Fellowship</option>
            <option>Open Source</option>
          </select>

          <select
            value={modeFilter}
            onChange={(event) =>
              setModeFilter(event.target.value as OpportunityMode)
            }
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none"
          >
            <option>All</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>On-site</option>
          </select>

          <select
            value={matchFilter}
            onChange={(event) =>
              setMatchFilter(event.target.value as MatchLevel)
            }
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none"
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
          </select>
        </div>
      </Card>

      {filteredOpportunities.length === 0 ? (
        <Card>
          <p className="text-center text-slate-500">
            No opportunities match these filters.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {filteredOpportunities.map((opportunity) => (
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
                <Link to={`/opportunities/${opportunity.id}`} className="flex-1">
                    <Button className="w-full justify-center gap-2">
                    View Details
                    <ExternalLink size={15} />
                    </Button>
                    </Link>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                  <Flame size={18} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Opportunities;