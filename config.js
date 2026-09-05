// ────────────────────────────────────────────────────────────────
//  SUPABASE CONFIG
//  Fill these in with your own project's values, found in:
//  Supabase Dashboard → Project Settings → API
// ────────────────────────────────────────────────────────────────
const SUPABASE_URL = 'https://wuhaeevakpwuzfhotewh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1aGFlZXZha3B3dXpmaG90ZXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1Nzc5OTAsImV4cCI6MjEwNDE1Mzk5MH0.wKZAd8EEaOL1OXK31kXyyrt6RVs8rOzPG-O0cIVhBEY';

// The two email domains allowed to sign up. Must match the list you
// insert into public.signup_email_domains in the SQL setup script.
const ALLOWED_EMAIL_DOMAINS = ['stud.hs-mannheim.de', 'uni-mannheim.de'];

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
