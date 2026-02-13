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





// import { createClient } from "@supabase/supabase-js";

// // kill corrupted tokens
// // try {
// //   Object.keys(localStorage)
// //     .filter((k) => k.startsWith("sb-"))
// //     .forEach((k) => localStorage.removeItem(k));
// // } catch {}

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     persistSession: true,
//     autoRefreshToken: true,
//     storage: window.localStorage,
//     // detectSessionInUrl: true,
//     // storageKey: "sits-auth",
//   },
// });










// ---------------------------------------------------------------------------------------






import { createClient } from '@supabase/supabase-js';

// Environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
    flowType: 'pkce',
  },

  global: {
    headers: {
      'x-application-name': 'alumni-connect',
    },
  },

  db: {
    schema: 'public',
  },

  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});


// -------------------------------
// Helper: Get current user + role
// -------------------------------
export const getCurrentUserWithRole = async () => {
  try {
    // Get authenticated user
    const { data: { user }, error: userError } =
      await supabase.auth.getUser();

    if (userError || !user) {
      return { user: null, role: null, profile: null };
    }

    // Get role from RPC
    const { data: role, error: roleError } =
      await supabase.rpc('get_user_role');

    if (roleError || !role) {
      console.error('Role fetch error:', roleError);
      return { user, role: null, profile: null };
    }

    // Fetch profile from role-based table
    const { data: profile, error: profileError } = await supabase
      .from(role)
      .select('*')
      .eq('id', user.id)
      .single();

    if (profileError) {
      console.error('Profile fetch error:', profileError);
      return { user, role, profile: null };
    }

    return { user, role, profile };

  } catch (err) {
    console.error('Error in getCurrentUserWithRole:', err);
    return { user: null, role: null, profile: null };
  }
};


// -------------------------------
// Helper: Check Admin
// -------------------------------
export const checkIsAdmin = async () => {
  try {
    const { data, error } = await supabase.rpc('is_admin');

    if (error) {
      console.error('Admin check error:', error);
      return false;
    }

    return data ?? false;
  } catch (err) {
    console.error('Unexpected admin error:', err);
    return false;
  }
};


// -------------------------------
// Helper: Check Verified User
// -------------------------------
export const checkIsVerified = async () => {
  try {
    const { data, error } = await supabase.rpc('is_verified_user');

    if (error) {
      console.error('Verification check error:', error);
      return false;
    }

    return data ?? false;
  } catch (err) {
    console.error('Unexpected verification error:', err);
    return false;
  }
};

export default supabase;
