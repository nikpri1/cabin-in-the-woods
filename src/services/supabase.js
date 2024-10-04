import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://heqrqrlwbwzmycbvkfey.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlcXJxcmx3Ynd6bXljYnZrZmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMDc1NDIsImV4cCI6MjA0MjY4MzU0Mn0.beclR-3MltcJ9ZwudxCmZsowr0Odd9ZqzEnQJVa1NJE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
