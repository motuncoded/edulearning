import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://uwaealrpqxidfqcdtqac.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3YWVhbHJwcXhpZGZxY2R0cWFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NDkwOTgsImV4cCI6MjA1OTUyNTA5OH0.5hV2m3HWEItKISvU2aNUy56ToweNxqsNo9yO0jyoB5g";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
