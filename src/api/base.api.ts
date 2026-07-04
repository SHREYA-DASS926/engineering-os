import { supabase } from "../lib/supabase";

export class BaseApi {
  protected table: string;

  constructor(table: string) {
    this.table = table;
  }

  protected db() {
    return supabase.from(this.table);
  }

  protected handleError(error: unknown) {
    if (error) {
      throw error;
    }
  }
}