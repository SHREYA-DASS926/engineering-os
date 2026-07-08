import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Target,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";

import { Button, Card } from "../components/ui";
import { opportunities } from "../data/opportunities";
import useSavedOpportunities from "../features/opportunities/hooks/useSavedOpportunities";

function OpportunityDetails() {
  const { id } = useParams();
  const opportunity = opportunities.find((item) => item.id === id);
  const { isSaved, toggleSave } = useSavedOpportunities();

  if (!opportunity) {
    return (
      <Card>
        <p className="text-muted-foreground">Opportunity not found.</p>

        <Link to="/opportunities" className="mt-4 inline-block text-blue-600">
          Back to opportunities
        </Link>
      </Card>
    );
  }

  const saved = isSaved(opportunity.id);

  return (
    <div className="space-y-8">
      <Link
        to="/opportunities"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to opportunities
      </Link>

      <Card
        hover={false}
        className="relative overflow-hidden border-0 bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
              {opportunity.type}
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight">
              {opportunity.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {opportunity.description}
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6 text-center shadow-2xl shadow-green-500/10">
            <p className="text-sm font-semibold text-green-300">AI Match</p>
            <p className="mt-2 text-5xl font-black text-green-300">
              {opportunity.match}%
            </p>
            <p className="mt-1 text-sm text-green-200">Strong fit</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <div className="flex items-center gap-3">
            <Target className="text-blue-600" />
            <h2 className="text-2xl font-bold text-foreground">Details</h2>
          </div>

          <div className="mt-8 space-y-8">
            <section>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Eligibility
              </p>

              <ul className="mt-4 space-y-3">
                {opportunity.eligibility.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-muted/60 p-4 text-foreground"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-green-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Why this matches you
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {opportunity.reason.map((reason) => (
                  <span
                    key={reason}
                    className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {reason}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="border-blue-500/20 bg-linear-to-b from-blue-500/10 to-card">
            <div className="flex items-center gap-3">
              <Sparkles className="text-blue-500" />

              <h2 className="text-xl font-bold text-foreground">
                AI Match Analysis
              </h2>
            </div>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              This opportunity matches your engineering profile because it aligns
              with your coding, frontend, and project-building direction.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-muted/60 p-4">
              <p className="text-sm font-semibold text-foreground">
                Recommended action
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Save this opportunity and prepare a small frontend project before
                applying.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-foreground">Actions</h2>

            <div className="mt-5 space-y-3">
              <Button
                onClick={() => {
                  toggleSave(opportunity.id);

                  if (saved) {
                    toast.info("Removed from saved opportunities");
                  } else {
                    toast.success("Opportunity saved");
                  }
                }}
                variant={saved ? "success" : "primary"}
                className="w-full justify-center gap-2"
              >
                {saved ? (
                  <>
                    <BookmarkCheck size={16} />
                    Saved
                  </>
                ) : (
                  <>
                    <Bookmark size={16} />
                    Save Opportunity
                  </>
                )}
              </Button>

              <a
                href={opportunity.officialLink}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="w-full justify-center gap-2">
                  Open Official Link
                  <ExternalLink size={15} />
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default OpportunityDetails;