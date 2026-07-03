import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { authService } from "../../../services/auth.service";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const { error } = await authService.signIn(email, password);

    if (error) {
      setError(error.message);
      return;
    }

    navigate("/");
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
        <p className="text-slate-500 mb-6">
          Log in to continue to EngOS.
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
            Log in
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          New to EngOS?{" "}
          <Link to="/signup" className="font-semibold text-slate-900">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;