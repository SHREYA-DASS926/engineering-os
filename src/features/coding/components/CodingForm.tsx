import { useState } from "react";

import Button from "../../../components/ui/Button";
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

    if (!name || !platform || !topic) {
      return;
    }

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
    <Card className="mb-8">
      <form onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold mb-4">
          Add Coding Problem
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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

          <Button type="submit">
            Add Problem
          </Button>
        </div>

        <label className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            checked={solved}
            onChange={(e) => setSolved(e.target.checked)}
          />

          Mark as solved
        </label>
      </form>
    </Card>
  );
}

export default CodingForm;