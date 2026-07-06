import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { Button, Card } from "../components/ui";
import { opportunities } from "../data/opportunities";
import { Bookmark, BookmarkCheck } from "lucide-react";
import useSavedOpportunities from "../features/opportunities/hooks/useSavedOpportunities";
import { toast } from "sonner";

function OpportunityDetails() {
  const { id } = useParams();

  const opportunity = opportunities.find((item) => item.id === id);
  const { isSaved, toggleSave } = useSavedOpportunities();

  if (!opportunity) {
    return (
      <Card>
        <p className="text-slate-500">Opportunity not found.</p>
        <Link to="/opportunities" className="mt-4 inline-block text-blue-600">
          Back to opportunities
        </Link>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <Link
        to="/opportunities"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950"
      >
        <ArrowLeft size={16} />
        Back to opportunities
      </Link>

      <Card
        hover={false}
        className="bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-blue-200">
          {opportunity.type}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          {opportunity.title}
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          {opportunity.description}
        </p>

        <div className="mt-6 inline-flex rounded-full bg-green-500/15 px-4 py-2 text-sm font-bold text-green-300">
          {opportunity.match}% match
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <h2 className="text-2xl font-bold text-slate-950">Details</h2>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Eligibility
              </p>

              <ul className="mt-3 space-y-2 text-slate-700">
                {opportunity.eligibility.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Why this matches you
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
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
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <Sparkles className="text-blue-600" />
            <h2 className="text-xl font-bold">AI Match Analysis</h2>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-600">
            This opportunity matches your current engineering profile because it
            aligns with your coding, frontend, and project-building direction.
          </p>

          <div className="mt-6 space-y-3">
  <Button
  onClick={() => {
    const currentlySaved = isSaved(opportunity.id);

    toggleSave(opportunity.id);

    if (currentlySaved) {
      toast.info("Removed from saved opportunities");
    } else {
      toast.success("Opportunity saved");
    }
  }}
  variant={isSaved(opportunity.id) ? "success" : "primary"}
  className="w-full justify-center gap-2"
>
    {isSaved(opportunity.id) ? (
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
  );
}

export default OpportunityDetails;