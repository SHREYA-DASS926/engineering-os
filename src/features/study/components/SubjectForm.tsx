import { BookOpen, Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

import type { Subject } from "../../../types/study";

type SubjectFormProps = {
  onAddSubject: (subject: Subject) => void;
};

function SubjectForm({ onAddSubject }: SubjectFormProps) {
  const [name, setName] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");
  const [totalClasses, setTotalClasses] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !attendedClasses || !totalClasses) return;

    onAddSubject({
      id: Date.now(),
      name,
      attendedClasses: Number(attendedClasses),
      totalClasses: Number(totalClasses),
    });

    setName("");
    setAttendedClasses("");
    setTotalClasses("");
  }

  return (
    <Card className="mb-10">
      <form onSubmit={handleSubmit}>
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Study Log
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          Add a Subject
        </h2>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          Track attendance and monitor subjects that need more focus before exams.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
          <Input
            placeholder="Subject name"
            value={name}
            onChange={setName}
          />

          <Input
            type="number"
            placeholder="Classes attended"
            value={attendedClasses}
            onChange={setAttendedClasses}
          />

          <Input
            type="number"
            placeholder="Total classes"
            value={totalClasses}
            onChange={setTotalClasses}
          />

          <Button
            type="submit"
            className="flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            Add Subject
          </Button>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-5">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-500" size={22} />

            <div>
              <p className="font-semibold">
                Attendance Tip
              </p>

              <p className="text-sm text-muted-foreground">
                Try to keep every subject above <strong>75%</strong> attendance to
                avoid shortages.
              </p>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default SubjectForm;