import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";

import { supabase } from "../../../lib/supabase";
import {
  profileService,
  type Profile,
} from "../../../services/profile.service";
import { AuthContext } from "./auth-context";

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadProfile() {
    try {
      const currentProfile = await profileService.getCurrentProfile();
      setProfile(currentProfile);
    } catch (error) {
      console.error(error);
      setProfile(null);
    }
  }

  async function refreshProfile() {
    await loadProfile();
  }

  async function updateProfile(
    updates: Parameters<typeof profileService.updateCurrentProfile>[0]
  ) {
    const updated = await profileService.updateCurrentProfile(updates);
    setProfile(updated);
  }

  useEffect(() => {
    async function initialize() {
      const { data } = await supabase.auth.getSession();

      setSession(data.session);
      setUser(data.session?.user ?? null);

      if (data.session?.user) {
        await loadProfile();
      }

      setLoading(false);
    }

    initialize();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ??null);

      if (newSession?.user) {
        await loadProfile();
      } else {
        setProfile(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    setProfile(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        loading,
        refreshProfile,
        updateProfile,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };