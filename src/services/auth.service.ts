import { supabase } from "../lib/supabase";

class AuthService {
  signUp(email: string, password: string) {
    return supabase.auth.signUp({
      email,
      password,
    });
  }

  signIn(email: string, password: string) {
    return supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  signOut() {
    return supabase.auth.signOut();
  }

  getSession() {
    return supabase.auth.getSession();
  }
}

export const authService = new AuthService();