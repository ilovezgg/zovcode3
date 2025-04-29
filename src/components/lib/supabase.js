import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aoveyijuwpjdqncjdrsa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvdmV5aWp1d3BqZHFuY2pkcnNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NzA0MzgsImV4cCI6MjA2MTQ0NjQzOH0.Rk61YmsgsAnzDvgyhh3yLqLUeJWVZrkZDQ1RA2ynIwo';

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoConfirmEmail: true, // Автоподтверждение email
      persistSession: true // Сохранение сессии
    }
  });