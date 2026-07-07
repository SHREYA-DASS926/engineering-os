import { useMemo, useState } from "react";
import {
  CalendarDays,
  ExternalLink,
  Flame,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Card, Button } from "../components/ui";
import { opportunities } from "../data/opportunities";

type OpportunityType =
  | "All"
  | "Hackathon"
  | "Internship"
  | "Fellowship"
  | "Open Source";

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

  const selectClass =
    "rounded-2xl border border-border bg-muted px-4 py-3 text-sm font-medium text-foreground outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

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
            className={selectClass}
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
            className={selectClass}
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
            className={selectClass}
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
          </select>
        </div>
      </Card>

      {filteredOpportunities.length === 0 ? (
        <Card>
          <p className="text-center text-muted-foreground">
            No opportunities match these filters.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {filteredOpportunities.map((opportunity) => (
            <Card
            key={opportunity.title}
            className="group border-border bg-linear-to-b from-card to-card/90 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {opportunity.type}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground">
                    {opportunity.title}
                  </h2>
                </div>

                <div className="rounded-full border border-green-500/20 bg-green-500/15 px-4 py-2 text-sm font-bold text-green-600 shadow-sm dark:text-green-400">
                  {opportunity.match}% match
                </div>
              </div>

              <div className="mt-8 space-y-4 text-sm text-muted-foreground">
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
                <p className="mb-3 text-sm font-semibold text-muted-foreground">
                  Why it matches
                </p>

                <div className="flex flex-wrap gap-2">
                  {opportunity.reason.map((reason) => (
                    <span
                      key={reason}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-foreground transition group-hover:border-blue-500/20"
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

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-600 transition hover:bg-orange-500/20 dark:text-orange-400">
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