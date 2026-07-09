import { createContext } from "react";
import type { Session, User } from "@supabase/supabase-js";

import type { Profile } from "../../../services/profile.service";
import { profileService } from "../../../services/profile.service";

export type AuthContextValue = {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
  updateProfile: (
    updates: Parameters<typeof profileService.updateCurrentProfile>[0]
  ) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);