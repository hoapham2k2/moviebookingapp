import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://wujwdhzvyjbytquaahdd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1andkaHp2eWpieXRxdWFhaGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4MjkyODQsImV4cCI6MjAxMjQwNTI4NH0.SfdzMw4hSsljduFbqvu5CWZuAlOKKd3kSfoh4w8e5cI"
);

console.log("supabase: ", supabase);

export default supabase;
