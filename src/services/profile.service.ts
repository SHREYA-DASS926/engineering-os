import { supabase } from "../lib/supabase";

export type Profile = {
  id: string;
  user_id: string;
  name: string | null;
  headline: string | null;
  college: string | null;
  branch: string | null;
  year: number | null;
  avatar_url: string | null;
  theme: string | null;
  created_at: string;
  updated_at: string;
};

type ProfileUpdates = Partial<
  Pick<
    Profile,
    "name" | "headline" | "college" | "branch" | "year" | "avatar_url" | "theme"
  >
>;

class ProfileService {
  async getCurrentProfile() {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError) throw userError;

    const userId = userData.user?.id;

    if (!userId) return null;

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    if (error) throw error;

    return data as Profile | null;
  }

  async updateCurrentProfile(updates: ProfileUpdates) {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError) throw userError;

    const userId = userData.user?.id;

    if (!userId) {
      throw new Error("No authenticated user found");
    }

    const { data, error } = await supabase
      .from("profiles")
      .upsert(
        {
          user_id: userId,
          ...updates,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id",
        }
      )
      .select("*")
      .single();

    if (error) throw error;

    return data as Profile;
  }
}

export const profileService = new ProfileService();