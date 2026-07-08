import { useState } from "react";
import { PlusCircle } from "lucide-react";

import { Button } from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

import type {
  InternshipApplication,
  InternshipStatus,
} from "../../../types/internship";

type InternshipFormProps = {
  onAddApplication: (application: InternshipApplication) => void;
};

function InternshipForm({ onAddApplication }: InternshipFormProps) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<InternshipStatus>("Applied");
  const [dateApplied, setDateApplied] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!company || !role || !dateApplied) return;

    onAddApplication({
      id: Date.now(),
      company,
      role,
      status,
      dateApplied,
      notes,
    });

    setCompany("");
    setRole("");
    setStatus("Applied");
    setDateApplied("");
    setNotes("");
  }

  return (
    <Card className="mb-8">
      <form onSubmit={handleSubmit}>
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Application Log
        </p>

        <h3 className="mt-2 text-3xl font-bold text-foreground">
          Add Internship Application
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Track companies, rounds, offers, rejections, and notes in one place.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-5">
          <Input placeholder="Company" value={company} onChange={setCompany} />

          <Input placeholder="Role" value={role} onChange={setRole} />

          <Select
            value={status}
            onChange={(value) => setStatus(value as InternshipStatus)}
            options={[
              "Applied",
              "Online Assessment",
              "Interview",
              "Offer",
              "Rejected",
            ]}
          />

          <Input
            type="date"
            placeholder="Date applied"
            value={dateApplied}
            onChange={setDateApplied}
          />

          <Button type="submit" className="justify-center gap-2">
            <PlusCircle size={18} />
            Add
          </Button>
        </div>

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          className="mt-4 min-h-28 w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-blue-500"
        />
      </form>
    </Card>
  );
}

export default InternshipForm;