import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ravzfanuspozsvxjyhgb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdnpmYW51c3BvenN2eGp5aGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2NDgzNjAsImV4cCI6MjA5NTIyNDM2MH0.kbW4q9ZWzsbwsroYux0r29I8zKhI-KJq7H9V6f7-pGQ'
)
