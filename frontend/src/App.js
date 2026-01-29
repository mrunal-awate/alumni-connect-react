// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Home from './pages/Home';
// import MemberSection from './components/MemberSection';
// import NotFound from './pages/NotFound';
// import AlumniProfileView from './pages/AlumniProfileView';
// import AlumniSessions from './pages/AlumniSessions';
// import Internships from './pages/Internships';
// import ConnectForum from './pages/ConnectForum';
// import Membership from './pages/Membership'; // ✅ New import
// import AlumniProfileForm from './pages/AlumniProfileForm';
// import AdminDashboard from './pages/AdminDashboard'; // ✅ add this


// import { AuthProvider, useAuth } from './context/AuthContext';

// // 🔒 Private route wrapper for authenticated access
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/" replace />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>

//           {/* 🌐 Public Home */}
//           <Route path="/" element={<Home />} />

//           {/* 🔐 Protected: Member List */}
//           <Route
//             path="/members"
//             element={
//               <PrivateRoute>
//                 <MemberSection />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔐 Protected: Alumni Profile Form */}
//           <Route
//             path="/alumni-profile"
//             element={
//               <PrivateRoute>
//                 <AlumniProfileForm />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔐 Protected: Alumni Corner Pages */}
//           <Route
//             path="/alumni-sessions"
//             element={
//               <PrivateRoute>
//                 <AlumniSessions />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/internships"
//             element={
//               <PrivateRoute>
//                 <Internships />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/connect-forum"
//             element={
//               <PrivateRoute>
//                 <ConnectForum />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔐 Protected: Membership Page */}
//           <Route
//             path="/membership"
//             element={
//               <PrivateRoute>
//                 <Membership />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/profile/:id"
//             element={
//               <PrivateRoute>
//                 <AlumniProfileView />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/admin-dashboard"
//             element={
              
//                 <AdminDashboard />
              
//             }
//           />

//           {/* ❌ Not Found */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;



// ------------------------------------------------------------------------



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Home from './pages/Home';
// import MemberSection from './components/MemberSection';
// import NotFound from './pages/NotFound';
// import AlumniProfileView from './pages/AlumniProfileView';
// import AlumniSessions from './pages/AlumniSessions';
// import Internships from './pages/Internships';
// import ConnectForum from './pages/ConnectForum';
// import Membership from './pages/Membership';
// import AlumniProfileForm from './pages/AlumniProfileForm';
// import AdminDashboard from './pages/AdminDashboard';
// import Events from './components/Events';

// // ✅ New imports for About and Contact pages
// import AboutUs from './components/About';
// import ContactUs from './components/Contact';

// import { AuthProvider, useAuth } from './context/AuthContext';

// // 🔒 Private route wrapper for authenticated access
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/" replace />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>

//           {/* 🌐 Public Home */}
//           <Route path="/" element={<Home />} />

//           {/* 🔐 Protected: Member List */}
//           <Route
//             path="/members"
//             element={
//               <PrivateRoute>
//                 <MemberSection />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔐 Protected: Alumni Profile Form */}
//           <Route
//             path="/alumni-profile"
//             element={
//               <PrivateRoute>
//                 <AlumniProfileForm />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔐 Protected: Alumni Corner Pages */}
//           <Route
//             path="/alumni-sessions"
//             element={
//               <PrivateRoute>
//                 <AlumniSessions />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/internships"
//             element={
//               <PrivateRoute>
//                 <Internships />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/connect-forum"
//             element={
//               <PrivateRoute>
//                 <ConnectForum />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔐 Protected: Membership Page */}
//           <Route
//             path="/membership"
//             element={
//               <PrivateRoute>
//                 <Membership />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔐 Protected: Profile View */}
//           <Route
//             path="/profile/:id"
//             element={
//               <PrivateRoute>
//                 <AlumniProfileView />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔓 Public: Admin Dashboard */}
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />

//           {/* 🌐 Public: Events Page */}
//           <Route path="/events" element={<Events />} />

//           {/* 🌐 Public: About Us and Contact Us */}
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactUs />} />

//           {/* ❌ Not Found */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;




// ---------------------------------------------------------------------


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Home from './pages/Home';
// import MemberSection from './components/MemberSection';
// import NotFound from './pages/NotFound';
// import AlumniProfileView from './pages/AlumniProfileView';
// import AlumniSessions from './pages/AlumniSessions';
// import Internships from './pages/Internships';
// import ConnectForum from './pages/ConnectForum';
// import Membership from './pages/Membership';
// import AlumniProfileForm from './pages/AlumniProfileForm';
// import AdminDashboard from './pages/AdminDashboard';
// import Events from './components/Events';

// import AboutUs from './components/About';
// import ContactUs from './components/Contact';

// import { AuthProvider, useAuth } from './context/AuthContext';

// // 🔒 Single-source-of-truth private route
// const PrivateRoute = ({ children }) => {
//   const { token, authLoading } = useAuth();

//   if (authLoading){
//     return <p style={{ textAlign: 'center'}}>Loading...</p>
//   }
  
//   return token ? children : <Navigate to="/" replace />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>

//           {/* 🌐 Public Home */}
//           <Route path="/" element={<Home />} />

//           {/* 🔐 Protected Routes */}
//           <Route
//             path="/members"
//             element={
//               <PrivateRoute>
//                 <MemberSection />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/alumni-profile"
//             element={
//               <PrivateRoute>
//                 <AlumniProfileForm />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/alumni-sessions"
//             element={
//               <PrivateRoute>
//                 <AlumniSessions />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/internships"
//             element={
//               <PrivateRoute>
//                 <Internships />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/connect-forum"
//             element={
//               <PrivateRoute>
//                 <ConnectForum />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/membership"
//             element={
//               <PrivateRoute>
//                 <Membership />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/profile/:id"
//             element={
//               <PrivateRoute>
//                 <AlumniProfileView />
//               </PrivateRoute>
//             }
//           />

//           {/* 🔓 Public */}
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactUs />} />

//           {/* ❌ Not Found */}
//           <Route path="*" element={<NotFound />} />

//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;











// ----------------------------------------------------------------------------










// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Home from "./pages/Home";
// import MemberSection from "./components/MemberSection";
// import NotFound from "./pages/NotFound";
// import AlumniProfileView from "./pages/AlumniProfileView";
// import AlumniSessions from "./pages/AlumniSessions";
// import Internships from "./pages/Internships";
// import ConnectForum from "./pages/ConnectForum";
// import Membership from "./pages/Membership";
// import AlumniProfileForm from "./pages/AlumniProfileForm";
// import AdminDashboard from "./pages/AdminDashboard";
// import Events from "./components/Events";
// import AboutUs from "./components/About";
// import ContactUs from "./components/Contact";

// import { AuthProvider, useAuth } from "./context/AuthContext";

// // 🔒 Correct Supabase-based private route
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated, authLoading } = useAuth();

//   if (authLoading) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "80px", fontSize: "20px" }}>
//         Loading...
//       </div>
//     );
//   }

//   return isAuthenticated ? children : <Navigate to="/" replace />;            
// };

// const AdminRoute = ({ children }) => {
//   const { isAdmin, authLoading } = useAuth();

//   if (authLoading) return <p>Loading...</p>;

//   return isAdmin ? children : <Navigate to="/" replace />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* 🌐 Public */}
//           <Route path="/" element={<Home />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactUs />} />

//           {/* 🔐 Protected */}
//           <Route path="/members" element={<PrivateRoute><MemberSection /></PrivateRoute>} />
//           <Route path="/alumni-profile" element={<PrivateRoute><AlumniProfileForm /></PrivateRoute>} />
//           <Route path="/alumni-sessions" element={<PrivateRoute><AlumniSessions /></PrivateRoute>} />
//           <Route path="/internships" element={<PrivateRoute><Internships /></PrivateRoute>} />
//           <Route path="/connect-forum" element={<PrivateRoute><ConnectForum /></PrivateRoute>} />
//           <Route path="/membership" element={<PrivateRoute><Membership /></PrivateRoute>} />
//           <Route path="/profile/:id" element={<PrivateRoute><AlumniProfileView /></PrivateRoute>} />

//           {/* 👑 Admin only */}
//           <Route path="/admin-dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />

//           {/* ❌ Not Found */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;








//----------------------------------------new final version-----------------------------









// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Home from "./pages/Home";
// import MemberSection from "./components/MemberSection";
// import NotFound from "./pages/NotFound";
// import AlumniProfileView from "./pages/AlumniProfileView";
// import AlumniSessions from "./pages/AlumniSessions";
// import Internships from "./pages/Internships";
// import ConnectForum from "./pages/ConnectForum";
// import Membership from "./pages/Membership";
// import AlumniProfileForm from "./pages/AlumniProfileForm";
// import AdminDashboard from "./pages/AdminDashboard";
// import Events from "./components/Events";
// import AboutUs from "./components/About";
// import ContactUs from "./components/Contact";

// import { AuthProvider, useAuth } from "./context/AuthContext";

// /* =======================
//    🔐 PRIVATE ROUTE
// ======================= */
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated, authLoading } = useAuth();

//   if (authLoading) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "80px", fontSize: "20px" }}>
//         Loading...
//       </div>
//     );
//   }

//   return isAuthenticated ? children : <Navigate to="/" replace />;
// };

// /* =======================
//    👑 ADMIN ROUTE
// ======================= */
// const AdminRoute = ({ children }) => {
//   const { isAdmin, authLoading } = useAuth();

//   if (authLoading) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "80px", fontSize: "20px" }}>
//         Loading...
//       </div>
//     );
//   }

//   return isAdmin ? children : <Navigate to="/" replace />;
// };

// /* =======================
//    🚀 APP
// ======================= */
// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* 🌐 Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactUs />} />

//           {/* 🔐 Authenticated User Routes */}
//           <Route
//             path="/members"
//             element={
//               <PrivateRoute>
//                 <MemberSection />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/alumni-profile"
//             element={
//               <PrivateRoute>
//                 <AlumniProfileForm />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/alumni-sessions"
//             element={
//               <PrivateRoute>
//                 <AlumniSessions />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/internships"
//             element={
//               <PrivateRoute>
//                 <Internships />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/connect-forum"
//             element={
//               <PrivateRoute>
//                 <ConnectForum />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/membership"
//             element={
//               <PrivateRoute>
//                 <Membership />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/profile/:id"
//             element={
//               <PrivateRoute>
//                 <AlumniProfileView />
//               </PrivateRoute>
//             }
//           />

//           {/* 👑 Admin Routes (SCALABLE) */}
//           <Route
//             path="/admin/*"
//             element={
//               <AdminRoute>
//                 <AdminDashboard />
//               </AdminRoute>
//             }
//           />

//           {/* ❌ Not Found */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;









// ---------------------------- final final version ------------------------------------------












import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import MemberSection from "./components/MemberSection";
import NotFound from "./pages/NotFound";
import AlumniProfileView from "./pages/AlumniProfileView";
import AlumniSessions from "./pages/AlumniSessions";
import Internships from "./pages/Internships";
import ConnectForum from "./pages/ConnectForum";
import Membership from "./pages/Membership";
import AlumniProfileForm from "./pages/AlumniProfileForm";
import AdminDashboard from "./pages/AdminDashboard";
import Events from "./components/Events";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";

import { AuthProvider, useAuth } from "./context/AuthContext";

/* =======================
   🔐 PRIVATE ROUTE
======================= */
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, authLoading } = useAuth();

  if (authLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "80px", fontSize: "20px" }}>
        Loading...
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

/* =======================
   👑 ADMIN ROUTE
======================= */
const AdminRoute = ({ children }) => {
  const { isAdmin, authLoading } = useAuth();

  if (authLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "80px", fontSize: "20px" }}>
        Loading...
      </div>
    );
  }

  return isAdmin ? children : <Navigate to="/" replace />;
};

/* =======================
   🚀 APP
======================= */
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 🌐 Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* 🔐 Authenticated User Routes */}
          <Route
            path="/members"
            element={
              <PrivateRoute>
                <MemberSection />
              </PrivateRoute>
            }
          />
          <Route
            path="/alumni-profile"
            element={
              <PrivateRoute>
                <AlumniProfileForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/alumni-sessions"
            element={
              <PrivateRoute>
                <AlumniSessions />
              </PrivateRoute>
            }
          />
          <Route
            path="/internships"
            element={
              <PrivateRoute>
                <Internships />
              </PrivateRoute>
            }
          />
          <Route
            path="/connect-forum"
            element={
              <PrivateRoute>
                <ConnectForum />
              </PrivateRoute>
            }
          />
          <Route
            path="/membership"
            element={
              <PrivateRoute>
                <Membership />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <PrivateRoute>
                <AlumniProfileView />
              </PrivateRoute>
            }
          />

          {/* 👑 Admin Redirect (IMPORTANT FIX) */}
          {/* <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />  */}

          {/* 👑 Admin Routes */}
          <Route
            path="/admin*"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          {/* ❌ Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
