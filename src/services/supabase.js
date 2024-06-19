import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zetmspopoaqqsnxefqjg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpldG1zcG9wb2FxcXNueGVmcWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMTQzMzYsImV4cCI6MjAzMzU5MDMzNn0.19Wiw3azvPQdcgR-ra5hW_2etR2tl3-maSya5TkdEmU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
