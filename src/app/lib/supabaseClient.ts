import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://esqaciqvjfarmopjzomj.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzcWFjaXF2amZhcm1vcGp6b21qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNjA4NDksImV4cCI6MjA0OTkzNjg0OX0.Q2A5fbvdebid_Wsbm5r58Ej7xrLKCL4_4ULuu-kA6Ro";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
