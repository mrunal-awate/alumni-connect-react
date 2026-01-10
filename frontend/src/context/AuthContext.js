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








import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // admin | alumni | student | faculty | null
  const [isVerified, setIsVerified] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const resolveRole = async (uid) => {
    // Check admin
    const { data: admin } = await supabase
      .from("admins")
      .select("id")
      .eq("id", uid)
      .maybeSingle();

    if (admin) {
      setRole("admin");
      setIsVerified(true);
      return;
    }

    const { data: alumni } = await supabase
      .from("alumni")
      .select("is_verified")
      .eq("id", uid)
      .maybeSingle();

    if (alumni) {
      setRole("alumni");
      setIsVerified(alumni.is_verified);
      return;
    }

    const { data: student } = await supabase
      .from("students")
      .select("is_verified")
      .eq("id", uid)
      .maybeSingle();

    if (student) {
      setRole("student");
      setIsVerified(student.is_verified);
      return;
    }

    const { data: faculty } = await supabase
      .from("faculty")
      .select("is_verified")
      .eq("id", uid)
      .maybeSingle();

    if (faculty) {
      setRole("faculty");
      setIsVerified(faculty.is_verified);
      return;
    }

    setRole(null);
    setIsVerified(false);
  };

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;

      setSession(session);
      setUser(session?.user || null);

      if (session?.user) {
        await resolveRole(session.user.id);
      }

      setAuthLoading(false);
    };

    load();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user || null);

        if (session?.user) {
          await resolveRole(session.user.id);
        } else {
          setRole(null);
          setIsVerified(false);
        }

        setAuthLoading(false);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        role,
        isVerified,
        isAuthenticated: !!session,
        isAdmin: role === "admin",
        isAlumni: role === "alumni",
        isStudent: role === "student",
        isFaculty: role === "faculty",
        authLoading,
        logout: () => supabase.auth.signOut(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
