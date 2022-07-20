import { createClient } from '@supabase/supabase-js';

const supabasekey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;

export const supabase = createClient(supabaseUrl, supabasekey);
