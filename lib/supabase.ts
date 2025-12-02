import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ryxrpzgbcrotsweioirg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5eHJwemdiY3JvdHN3ZWlvaXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MDg4MjUsImV4cCI6MjA3OTk4NDgyNX0.lPdCZ6fC_JGuu-dGRnKFnwy3TQF4MjdeSJAyYB8SIlU"
);

export default supabase;
