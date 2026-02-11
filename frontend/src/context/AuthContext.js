// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) setToken(storedToken);
//   }, []);

//   const login = (newToken) => {
//     localStorage.setItem('token', newToken);
//     setToken(newToken);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//   };

//   const isAuthenticated = !!token;

//   return (
//     <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// ----------------------------------------------------------------------------------------

// ---------------------------1st version online----------------------------



// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect
// } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(null);
//   const [authLoading, setAuthLoading] = useState(true); // 🔑 KEY FIX

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');

//     if (storedToken) {
//       setToken(storedToken);
//     }

//     // ✅ Auth state is now resolved
//     setAuthLoading(false);
//   }, []);

//   const login = (newToken) => {
//     localStorage.setItem('token', newToken);
//     setToken(newToken);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//   };

//   const isAuthenticated = !!token;

//   return (
//     <AuthContext.Provider
//       value={{
//         token,
//         isAuthenticated,
//         authLoading, // 👈 expose this
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

//commented out above




// -------------------------------------------------2nd version online-------------------------------------------------------



// import React, { createContext, useContext, useEffect, useState } from "react";
// import { supabase } from "../supabaseClient";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [session, setSession] = useState(null);
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const [authLoading, setAuthLoading] = useState(true);

//   useEffect(() => {
//     // Get existing session
//     const getSession = async () => {
//       const { data } = await supabase.auth.getSession();
//       setSession(data.session);
//       setUser(data.session?.user || null);
//       setRole(data.session?.user?.user_metadata?.role || null);
//       setAuthLoading(false);
//     };

//     getSession();

//     // Listen for auth changes
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//       setUser(session?.user || null);
//       setRole(session?.user?.user_metadata?.role || null);
//       setAuthLoading(false);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const login = async (token) => {
//     // We don't manually store tokens anymore; Supabase handles it
//     const { data } = await supabase.auth.getSession();
//     setSession(data.session);
//     setUser(data.session?.user || null);
//     setRole(data.session?.user?.user_metadata?.role || null);
//   };

//   const logout = async () => {
//     await supabase.auth.signOut();
//     setSession(null);
//     setUser(null);
//     setRole(null);
//   };

//   const isAuthenticated = !!session;

//   const isAdmin = role === "admin";
//   const isAlumni = role === "alumni";
//   const isStudent = role === "student";
//   const isFaculty = role === "faculty";

//   return (
//     <AuthContext.Provider
//       value={{
//         session,
//         user,
//         role,
//         isAuthenticated,
//         isAdmin,
//         isAlumni,
//         isStudent,
//         isFaculty,
//         authLoading,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);










// -------------------------------------------------3rd version online-------------------------------------------------------








// import { createContext, useContext, useEffect, useState } from "react";
// import { supabase } from "../supabaseClient";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [session, setSession] = useState(null);
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null); // admin | alumni | student | faculty | null
//   const [isVerified, setIsVerified] = useState(false);
//   const [authLoading, setAuthLoading] = useState(true);

//   const resolveRole = async (uid) => {
//     // Check admin
//     const { data: admin } = await supabase
//       .from("admins")
//       .select("id")
//       .eq("id", uid)
//       .maybeSingle();

//     if (admin) {
//       setRole("admin");
//       setIsVerified(true);
//       return;
//     }

//     const { data: alumni } = await supabase
//       .from("alumni")
//       .select("is_verified")
//       .eq("id", uid)
//       .maybeSingle();

//     if (alumni) {
//       setRole("alumni");
//       setIsVerified(alumni.is_verified);
//       return;
//     }

//     const { data: student } = await supabase
//       .from("students")
//       .select("is_verified")
//       .eq("id", uid)
//       .maybeSingle();

//     if (student) {
//       setRole("student");
//       setIsVerified(student.is_verified);
//       return;
//     }

//     const { data: faculty } = await supabase
//       .from("faculty")
//       .select("is_verified")
//       .eq("id", uid)
//       .maybeSingle();

//     if (faculty) {
//       setRole("faculty");
//       setIsVerified(faculty.is_verified);
//       return;
//     }

//     setRole(null);
//     setIsVerified(false);
//   };

//   useEffect(() => {
//     const load = async () => {
//       const { data } = await supabase.auth.getSession();
//       const session = data.session;

//       setSession(session);
//       setUser(session?.user || null);

//       if (session?.user) {
//         await resolveRole(session.user.id);
//       }

//       setAuthLoading(false);
//     };

//     load();

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       async (_event, session) => {
//         setSession(session);
//         setUser(session?.user || null);

//         if (session?.user) {
//           await resolveRole(session.user.id);
//         } else {
//           setRole(null);
//           setIsVerified(false);
//         }

//         setAuthLoading(false);
//       }
//     );

//     return () => listener.subscription.unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         session,
//         user,
//         role,
//         isVerified,
//         isAuthenticated: !!session,
//         isAdmin: role === "admin",
//         isAlumni: role === "alumni",
//         isStudent: role === "student",
//         isFaculty: role === "faculty",
//         authLoading,
//         logout: () => supabase.auth.signOut(),
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);








// -------------------------------------------------4th version online-------------------------------------------------------








// import { createContext, useContext, useEffect, useState } from "react";
// import { supabase } from "../supabaseClient";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [session, setSession] = useState(null);
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null); // alumni | student | faculty | null
//   const [isVerified, setIsVerified] = useState(false);
//   const [authLoading, setAuthLoading] = useState(true);

//   const resolveRole = async (uid) => {
//     // Try Alumni
//     const { data: alumni } = await supabase
//       .from("alumni")
//       .select("is_verified")
//       .eq("id", uid)
//       .maybeSingle();

//     if (alumni) {
// setRole("alumni");
//       setIsVerified(alumni.is_verified);
//       return;
//     }

//     // Try Student
//     const { data: student } = await supabase
//       .from("students")
//       .select("is_verified")
//       .eq("id", uid)
//       .maybeSingle();

//     if (student) {
//       setRole("student");
//       setIsVerified(student.is_verified);
//       return;
//     }

//     // Try Faculty
//     const { data: faculty } = await supabase
//       .from("faculty")
//       .select("is_verified")
//       .eq("id", uid)
//       .maybeSingle();

//     if (faculty) {
//       setRole("faculty");
//       setIsVerified(faculty.is_verified);
//       return;
//     }

//     // No role found
//     setRole(null);
//     setIsVerified(false);
//   };

  // useEffect(() => {
  //   const load = async () => {
  //     const { data } = await supabase.auth.getSession();
  //     const session = data.session;

//       setSession(session);
//       setUser(session?.user || null);

//       if (session?.user) {
//         await resolveRole(session.user.id);
//       }

//       setAuthLoading(false);
//     };

//     load();

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       async (_event, session) => {
//         setSession(session);
//         setUser(session?.user || null);

//         if (session?.user) {
//           await resolveRole(session.user.id);
//         } else {
//           setRole(null);
//           setIsVerified(false);
//         }

//         setAuthLoading(false);
//       }
//     );

//     return () => listener.subscription.unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         session,
//         user,
//         role,
//         isVerified,
//         isAuthenticated: !!session,
//         isAlumni: role === "alumni",
//         isStudent: role === "student",
//         isFaculty: role === "faculty",
//         authLoading,
//         logout: () => supabase.auth.signOut(),
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);





// -------------------------------------------------final version online-------------------------------------------------------







// import { createContext, useContext, useEffect, useState } from "react";
// import { supabase } from "../supabaseClient";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [session, setSession] = useState(null);
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null); // alumni | student | faculty | null
//   const [isVerified, setIsVerified] = useState(false);
//   const [authLoading, setAuthLoading] = useState(true);

//   /* ---------------- SAFETY LAYER ---------------- */

//   const forceLogout = async () => {
//     try {
//       await supabase.auth.signOut();
//     } catch {}
//     localStorage.clear(); // 🔥 kill corrupted refresh tokens
//     setSession(null);
//     setUser(null);
//     setRole(null);
//     setIsVerified(false);
//   };

//   const safeSingle = async (query) => {
//     try {
//       const { data, error } = await query;
//       if (error) return null;
//       return data;
//     } catch {
//       return null;
//     }
//   };

//   /* ---------------- ROLE DETECTION ---------------- */

//   const resolveRole = async (uid) => {
//     // Alumni
//     const alumni = await safeSingle(
//       supabase.from("alumni").select("is_verified").eq("id", uid).maybeSingle()
//     );
//     if (alumni) {
//       setRole("alumni");
//       setIsVerified(!!alumni.is_verified);
//       return;
//     }

//     // Student
//     const student = await safeSingle(
//       supabase.from("students").select("is_verified").eq("id", uid).maybeSingle()
//     );
//     if (student) {
//       setRole("student");
//       setIsVerified(!!student.is_verified);
//       return;
//     }

//     // Faculty
//     const faculty = await safeSingle(
//       supabase.from("faculty").select("is_verified").eq("id", uid).maybeSingle()
//     );
//     if (faculty) {
//       setRole("faculty");
//       setIsVerified(!!faculty.is_verified);
//       return;
//     }

//     setRole(null);
//     setIsVerified(false);
//   };

//   /* ---------------- BOOTSTRAP ---------------- */

//   useEffect(() => {
//     const boot = async () => {
//       try {
//         const { data, error } = await supabase.auth.getSession();

//         // Broken refresh token → wipe storage
//         if (error) throw error;

//         const session = data.session;
//         setSession(session);
//         setUser(session?.user || null);

//         if (session?.user) {
//           await resolveRole(session.user.id);
//         }
//       } catch {
//         await forceLogout(); // 🧹 prevent white screen
//       } finally {
//         setAuthLoading(false);
//       }
//     };

//     boot();

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       async (_event, session) => {
//         try {
//           setSession(session);
//           setUser(session?.user || null);

//           if (session?.user) {
//             await resolveRole(session.user.id);
//           } else {
//             setRole(null);
//             setIsVerified(false);
//           }
//         } catch {
//           await forceLogout();
//         }
//       }
//     );

//     return () => listener.subscription.unsubscribe();
//   }, []);

//   /* ---------------- EXPORT ---------------- */

//   return (
//     <AuthContext.Provider
//       value={{
//         session,
//         user,
//         role,
//         isVerified,
//         isAuthenticated: !!session,
//         isAlumni: role === "alumni",
//         isStudent: role === "student",
//         isFaculty: role === "faculty",
//         authLoading,
//         logout: forceLogout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);






// -------------------------------------------------final version online-------------------------------------------------------






// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   useCallback,
// } from "react";
// import { supabase } from "../supabaseClient";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [session, setSession] = useState(null);
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null); // alumni | student | faculty | null
//   const [isVerified, setIsVerified] = useState(false);
//   const [authLoading, setAuthLoading] = useState(true);

//   /* ---------------- SAFETY LAYER ---------------- */

//   const forceLogout = useCallback(async () => {
//     try {
//       await supabase.auth.signOut();
//     } catch {}
//     localStorage.clear(); // 🔥 kill corrupted refresh tokens
//     setSession(null);
//     setUser(null);
//     setRole(null);
//     setIsVerified(false);
//   }, []);

//   const safeSingle = useCallback(async (query) => {
//     try {
//       const { data, error } = await query;
//       if (error) return null;
//       return data;
//     } catch {
//       return null;
//     }
//   }, []);

//   /* ---------------- ROLE DETECTION ---------------- */

//   const resolveRole = useCallback(
//     async (uid) => {
//       // Alumni
//       const alumni = await safeSingle(
//         supabase.from("alumni").select("is_verified").eq("id", uid).maybeSingle()
//       );
//       if (alumni) {
//         setRole("alumni");
//         setIsVerified(!!alumni.is_verified);
//         return;
//       }

//       // Student
//       const student = await safeSingle(
//         supabase
//           .from("students")
//           .select("is_verified")
//           .eq("id", uid)
//           .maybeSingle()
//       );
//       if (student) {
//         setRole("student");
//         setIsVerified(!!student.is_verified);
//         return;
//       }

//       // Faculty
//       const faculty = await safeSingle(
//         supabase
//           .from("faculty")
//           .select("is_verified")
//           .eq("id", uid)
//           .maybeSingle()
//       );
//       if (faculty) {
//         setRole("faculty");
//         setIsVerified(!!faculty.is_verified);
//         return;
//       }

//       setRole(null);
//       setIsVerified(false);
//     },
//     [safeSingle]
//   );

//   /* ---------------- BOOTSTRAP ---------------- */

//   useEffect(() => {
//     const boot = async () => {
//       try {
//         const { data, error } = await supabase.auth.getSession();

//         // Broken refresh token → wipe storage
//         if (error) throw error;

//         const currentSession = data.session;
//         setSession(currentSession);
//         setUser(currentSession?.user || null);

//         if (currentSession?.user) {
//           await resolveRole(currentSession.user.id);
//         }
//       } catch {
//         await forceLogout(); // 🧹 prevent white screen
//       } finally {
//         setAuthLoading(false);
//       }
//     };

//     boot();

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       async (_event, newSession) => {
//         try {
//           setSession(newSession);
//           setUser(newSession?.user || null);

//           if (newSession?.user) {
//             await resolveRole(newSession.user.id);
//           } else {
//             setRole(null);
//             setIsVerified(false);
//           }
//         } catch {
//           await forceLogout();
//         }
//       }
//     );

//     return () => listener.subscription.unsubscribe();
//   }, [resolveRole, forceLogout]);

//   /* ---------------- EXPORT ---------------- */

//   return (
//     <AuthContext.Provider
//       value={{
//         session,
//         user,
//         role,
//         isVerified,
//         isAuthenticated: !!session,
//         isAlumni: role === "alumni",
//         isStudent: role === "student",
//         isFaculty: role === "faculty",
//         authLoading,
//         logout: forceLogout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);








// -------------------------------------------------final version online-------------------------------------------------------









// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   useCallback,
// } from "react";
// import { supabase } from "../supabaseClient";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [session, setSession] = useState(null);
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null); // admin | alumni | faculty | student | null
//   const [isVerified, setIsVerified] = useState(false);
//   const [authLoading, setAuthLoading] = useState(true);

//   /* ---------------- SAFETY LAYER ---------------- */

//   const forceLogout = useCallback(async () => {
//     try {
//       await supabase.auth.signOut();
//     } catch {}
//     localStorage.clear();
//     setSession(null);
//     setUser(null);
//     setRole(null);
//     setIsVerified(false);
//   }, []);

//   const safeSingle = useCallback(async (query) => {
//     try {
//       const { data, error } = await query;
//       if (error) return null;
//       return data;
//     } catch {
//       return null;
//     }
//   }, []);

//   /* ---------------- ROLE DETECTION ---------------- */

//   const resolveRole = useCallback(
//     async (uid) => {
//       /* 👨‍💼 ADMIN (HIGHEST PRIORITY) */
//       const admin = await safeSingle(
//         supabase.from("admins").select("id").eq("id", uid).maybeSingle()
//       );
//       if (admin) {
//         setRole("admin");
//         setIsVerified(true);
//         return;
//       }

//       /* 🧑‍🎓 ALUMNI */
//       const alumni = await safeSingle(
//         supabase
//           .from("alumni")
//           .select("is_verified")
//           .eq("id", uid)
//           .maybeSingle()
//       );
//       if (alumni) {
//         setRole("alumni");
//         setIsVerified(!!alumni.is_verified);
//         return;
//       }

//       /* 🧑‍🏫 FACULTY */
//       const faculty = await safeSingle(
//         supabase
//           .from("faculty")
//           .select("is_verified")
//           .eq("id", uid)
//           .maybeSingle()
//       );
//       if (faculty) {
//         setRole("faculty");
//         setIsVerified(!!faculty.is_verified);
//         return;
//       }

//       /* 🎓 STUDENT */
//       const student = await safeSingle(
//         supabase
//           .from("students")
//           .select("is_verified")
//           .eq("id", uid)
//           .maybeSingle()
//       );
//       if (student) {
//         setRole("student");
//         setIsVerified(!!student.is_verified);
//         return;
//       }

//       /* ❌ NO ROLE */
//       setRole(null);
//       setIsVerified(false);
//     },
//     [safeSingle]
//   );

//   /* ---------------- BOOTSTRAP ---------------- */

//   useEffect(() => {
//     const boot = async () => {
//       try {
//         const { data, error } = await supabase.auth.getSession();
//         if (error) throw error;

//         const currentSession = data.session;
//         setSession(currentSession);
//         setUser(currentSession?.user || null);

//         if (currentSession?.user) {
//           await resolveRole(currentSession.user.id);
//         }
//       } catch {
//         await forceLogout();
//       } finally {
//         setAuthLoading(false);
//       }
//     };

//     boot();

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       async (_event, newSession) => {
//         try {
//           setSession(newSession);
//           setUser(newSession?.user || null);

//           if (newSession?.user) {
//             await resolveRole(newSession.user.id);
//           } else {
//             setRole(null);
//             setIsVerified(false);
//           }
//         } catch {
//           await forceLogout();
//         }
//       }
//     );

//     return () => listener.subscription.unsubscribe();
//   }, [resolveRole, forceLogout]);

//   /* ---------------- EXPORT ---------------- */

//   return (
//     <AuthContext.Provider
//       value={{
//         session,
//         user,
//         role,
//         isVerified,
//         authLoading,

//         isAuthenticated: !!session && !!user,
//         isAdmin: role === "admin",
//         isAlumni: role === "alumni",
//         isFaculty: role === "faculty",
//         isStudent: role === "student",

//         logout: forceLogout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);










// ------------------------------------------------------------final version online-------------------------------------------------------














import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  /* ---------------- FORCE LOGOUT ---------------- */

  const forceLogout = useCallback(async () => {
    try {
      await supabase.auth.signOut();
    } catch {}
    localStorage.clear();
    setSession(null);
    setUser(null);
    setRole(null);
    setIsVerified(false);
  }, []);

  /* ---------------- ROLE RESOLUTION ---------------- */

  const resolveRole = useCallback(async (uid) => {
    console.log("RESOLVE ROLE FOR UID:", uid);

    
    /* 👨‍💼 ADMIN */
    const { data: admin, error: adminError } = await supabase
      .from("admin")
      .select("user_id")
      .eq("user_id", uid)
      .maybeSingle();

    console.log("ADMIN QUERY RESULT:", admin, adminError);

    if (admin) {
      console.log("ADMIN ROLE DETECTED");
      setRole("admin");
      setIsVerified(true);
      return;
    }

    console.log("ADMIN NOT FOUND, CHECKING OTHER ROLES...");

    /* 🧑‍🎓 ALUMNI */
    const { data: alumni } = await supabase
      .from("alumni")
      .select("is_verified")
      .eq("id", uid)
      .maybeSingle();

    if (alumni) {
      setRole("alumni");
      setIsVerified(alumni.is_verified === true);
      return;
    }

    /* 🧑‍🏫 FACULTY */
    const { data: faculty } = await supabase
      .from("faculty")
      .select("is_verified")
      .eq("id", uid)
      .maybeSingle();

    if (faculty) {
      setRole("faculty");
      setIsVerified(faculty.is_verified === true);
      return;
    }

    /* 🎓 STUDENT */
    const { data: student } = await supabase
      .from("students")
      .select("is_verified")
      .eq("id", uid)
      .maybeSingle();

    if (student) {
      setRole("student");
      setIsVerified(student.is_verified === true);
      return;
    }

    /* ❌ NO ROLE */
    setRole("guest");
    setIsVerified(false);
  }, []);

  /* ---------------- BOOTSTRAP ---------------- */

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const currentSession = data.session;

        setSession(currentSession);
        setUser(currentSession?.user || null);

        if (currentSession?.user) {
          await resolveRole(currentSession.user.id);
        }
      } catch {
        await forceLogout();
      } finally {
        setAuthLoading(false);
      }
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user || null);

        if (newSession?.user) {
          await resolveRole(newSession.user.id);
        } else {
          setRole(null);
          setIsVerified(false);
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, [resolveRole, forceLogout]);

  /* ---------------- EXPORT ---------------- */

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        role,
        isVerified,
        authLoading,

        isAuthenticated: !!session && !!user,
        isAdmin: role === "admin",
        isAlumni: role === "alumni",
        isFaculty: role === "faculty",
        isStudent: role === "student",

        logout: forceLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
