import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

Deno.serve(() => {
  return new Response(JSON.stringify({ message: 'hello from Supabase Edge Function!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
