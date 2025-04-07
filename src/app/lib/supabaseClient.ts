import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("SUPABASE_URL and SUPABASE_ANON_KEY must be defined");
}
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
