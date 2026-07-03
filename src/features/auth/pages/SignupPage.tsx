import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { authService } from "../../../services/auth.service";

function SignupPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const { error } = await authService.signUp(email, password);

    if (error) {
      setError(error.message);
      return;
    }

    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >
        <h1 className="text-3xl font-bold mb-2">Create account</h1>
        <p className="text-slate-500 mb-6">
          Start using EngOS with your own workspace.
        </p>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-slate-700"
          >
            Sign up
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-slate-900">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;