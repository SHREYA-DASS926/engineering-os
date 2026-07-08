import { useState } from "react";
import { PlusCircle } from "lucide-react";

import { Button } from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

import type { CodingProblem } from "../../../types/coding";

type CodingFormProps = {
  onAddProblem: (problem: CodingProblem) => void;
};

function CodingForm({ onAddProblem }: CodingFormProps) {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [solved, setSolved] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !platform || !topic) return;

    onAddProblem({
      id: Date.now(),
      name,
      platform,
      topic,
      difficulty: difficulty as "Easy" | "Medium" | "Hard",
      solved,
    });

    setName("");
    setPlatform("");
    setTopic("");
    setDifficulty("Easy");
    setSolved(false);
  }

  return (
    <Card className="mb-8 border-border bg-linear-to-b from-card to-card/90">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Coding Log
        </p>

        <h3 className="mt-1 text-2xl font-bold text-foreground">
          Add a Coding Problem
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Keep your DSA practice organized across platforms and topics.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-5">
          <Input
            placeholder="Problem name"
            value={name}
            onChange={setName}
          />

          <Input
            placeholder="Platform"
            value={platform}
            onChange={setPlatform}
          />

          <Select
            value={difficulty}
            onChange={setDifficulty}
            options={["Easy", "Medium", "Hard"]}
          />

          <Input
            placeholder="Topic"
            value={topic}
            onChange={setTopic}
          />

          <Button
            type="submit"
            className="flex items-center justify-center gap-2"
          >
            <PlusCircle size={18} />
            Add Problem
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-2xl border border-border bg-muted/40 px-4 py-4">
          <div>
            <p className="font-medium text-foreground">
              Already solved?
            </p>

            <p className="text-sm text-muted-foreground">
              Save it as completed immediately.
            </p>
          </div>

          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={solved}
              onChange={(event) => setSolved(event.target.checked)}
              className="h-5 w-5 accent-blue-600"
            />

            <span className="text-sm font-medium text-foreground">
              Mark solved
            </span>
          </label>
        </div>
      </form>
    </Card>
  );
}
export default CodingForm;