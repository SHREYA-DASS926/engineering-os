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

    if (!name || !attendedClasses || !totalClasses) {
      return;
    }

    const newSubject: Subject = {
      id: Date.now(),
      name,
      attendedClasses: Number(attendedClasses),
      totalClasses: Number(totalClasses),
    };

    onAddSubject(newSubject);

    setName("");
    setAttendedClasses("");
    setTotalClasses("");
  }

  return (
    <Card className="mb-8">
      <form onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold mb-4">Add Subject</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            placeholder="Subject name"
            value={name}
            onChange={setName}
          />

          <Input
            type="number"
            placeholder="Attended classes"
            value={attendedClasses}
            onChange={setAttendedClasses}
          />

          <Input
            type="number"
            placeholder="Total classes"
            value={totalClasses}
            onChange={setTotalClasses}
          />

          <Button type="submit">Add Subject</Button>
        </div>
      </form>
    </Card>
  );
}

export default SubjectForm;