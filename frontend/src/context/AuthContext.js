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



import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // Get existing session
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setUser(data.session?.user || null);
      setRole(data.session?.user?.user_metadata?.role || null);
      setAuthLoading(false);
    };

    getSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user || null);
      setRole(session?.user?.user_metadata?.role || null);
      setAuthLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (token) => {
    // We don't manually store tokens anymore; Supabase handles it
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
    setUser(data.session?.user || null);
    setRole(data.session?.user?.user_metadata?.role || null);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    setRole(null);
  };

  const isAuthenticated = !!session;

  const isAdmin = role === "admin";
  const isAlumni = role === "alumni";
  const isStudent = role === "student";
  const isFaculty = role === "faculty";

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        role,
        isAuthenticated,
        isAdmin,
        isAlumni,
        isStudent,
        isFaculty,
        authLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
