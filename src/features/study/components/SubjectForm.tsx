import { useState } from "react";
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
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8"
    >
      <h3 className="text-xl font-bold mb-4">Add Subject</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Subject name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
        />

        <input
          type="number"
          placeholder="Attended classes"
          value={attendedClasses}
          onChange={(event) => setAttendedClasses(event.target.value)}
          className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
        />

        <input
          type="number"
          placeholder="Total classes"
          value={totalClasses}
          onChange={(event) => setTotalClasses(event.target.value)}
          className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
        />

        <button
          type="submit"
          className="bg-slate-900 text-white rounded-xl px-4 py-3 font-medium hover:bg-slate-700"
        >
          Add Subject
        </button>
      </div>
    </form>
  );
}

export default SubjectForm;