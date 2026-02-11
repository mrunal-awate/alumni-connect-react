// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// ----------------------------------------------------------------------------



// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);




// ------------------------------------- 1st version online -------------------------------------------------


// import { createClient } from "@supabase/supabase-js";

// // 🔥 Kill corrupted Supabase auth data from older deployments
// try {
//   Object.keys(localStorage)
//     .filter((key) => key.startsWith("sb-"))
//     .forEach((key) => localStorage.removeItem(key));
// } catch (e) {
//   // ignore if running in SSR or restricted mode
// }

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     persistSession: true,
//     autoRefreshToken: true,
//     detectSessionInUrl: true,
//     storageKey: "sits-auth", // prevent conflict with old tokens
//   },
// });






// ----------------------------------------------------------------------------





import { createClient } from "@supabase/supabase-js";

// kill corrupted tokens
// try {
//   Object.keys(localStorage)
//     .filter((k) => k.startsWith("sb-"))
//     .forEach((k) => localStorage.removeItem(k));
// } catch {}

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: window.localStorage,
    // detectSessionInUrl: true,
    // storageKey: "sits-auth",
  },
});

