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

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Enable automatic token refresh
    autoRefreshToken: true,
    
    // Persist session in localStorage (prevents auto-logout)
    persistSession: true,
    
    // Detect session in URL (for OAuth flows)
    detectSessionInUrl: true,
    
    // Use localStorage instead of sessionStorage
    storage: window.localStorage,
    
    // Flow type - use 'pkce' for enhanced security
    flowType: 'pkce',
  },
  
  // Global options
  global: {
    headers: {
      'x-application-name': 'alumni-connect',
    },
  },
  
  // Database options
  db: {
    schema: 'public',
  },
  
  // Realtime options (if you use subscriptions)
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

// Helper function to get current user with role
export const getCurrentUserWithRole = async () => {
  try {
    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError || !user) {
      return { user: null, role: null, profile: null };
    }

    // Get user role
    const { data: role, error: roleError } = await supabase.rpc('get_user_role');
    
    if (roleError || !role) {
      return { user, role: null, profile: null };
    }

    // Get profile from respective table
    const { data: profile, error: profileError } = await supabase
      .from(role)
      .select('*')
      .eq('id', user.id)
      .single();

    if (profileError) {
      console.error('Error fetching profile:', profileError);
      return { user, role, profile: null };
    }

    return { user, role, profile };
  } catch (error) {
    console.error('Error in getCurrentUserWithRole:', error);
    return { user: null, role: null, profile: null };
  }
};

// Helper function to check if user is admin
export const checkIsAdmin = async () => {
  try {
    const { data, error } = await supabase.rpc('is_admin');
    return data ?? false;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};

// Helper function to check if user is verified
export const checkIsVerified = async () => {
  try {
    const { data, error } = await supabase.rpc('is_verified_user');
    return data ?? false;
  } catch (error) {
    console.error('Error checking verification status:', error);
    return false;
  }
};

export default supabase;