// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [dropdownVisible, setDropdownVisible] = useState(null); // 'member' or 'alumni'
//   const { isAuthenticated, logout } = useAuth();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   return (
//     <nav style={{
//       ...styles.navbar,
//       background: scrolled
//         ? 'linear-gradient(to right, #003973, #E5E5BE)'
//         : 'linear-gradient(to right, #16222A, #3A6073)',
//       boxShadow: scrolled ? '0 4px 10px rgba(0,0,0,0.3)' : 'none',
//       transition: 'all 0.5s ease'
//     }}>
//       <div style={styles.container}>
//         <div style={styles.logoSection}>
//           <img src="/images/sinhgad_logo.jfif" alt="College Logo" style={styles.logo} />
//           <span style={styles.title}>Alumni Association Of SITS</span>
//         </div>

//         <ul style={styles.navList}>
//           <li><Link style={styles.link} to="/">Home</Link></li>

//           {/* Member Dropdown */}
//           <li
//             style={styles.dropdown}
//             onMouseEnter={() => setDropdownVisible('member')}
//             onMouseLeave={() => setDropdownVisible(null)}
//           >
//             <div style={styles.link}>Member ▾</div>
//             {dropdownVisible === 'member' && (
//               <div style={styles.dropdownContent}>
//                 <Link to="/members" style={styles.dropdownLink}>Alumni List</Link>
//                 <Link to="/search" style={styles.dropdownLink}>Search</Link>
//               </div>
//             )}
//           </li>

//           <li><Link style={styles.link} to="/membership">Membership</Link></li>
//           <li><Link style={styles.link} to="/events">Events</Link></li>
//           <li><Link style={styles.link} to="/about">About Us</Link></li>
//           <li><Link style={styles.link} to="/contact">Contact Us</Link></li>

//           {/* Alumni Corner Dropdown */}
//           <li
//             style={styles.dropdown}
//             onMouseEnter={() => setDropdownVisible('alumni')}
//             onMouseLeave={() => setDropdownVisible(null)}
//           >
//             <div style={styles.link}>Alumni Corner ▾</div>
//             {dropdownVisible === 'alumni' && (
//               <div style={styles.dropdownContent}>
//                 <Link to="/alumni-sessions" style={styles.dropdownLink}>Alumni Sessions</Link>
//                 <Link to="/internships" style={styles.dropdownLink}>Job / Internship</Link>
//                 <Link to="/connect-forum" style={styles.dropdownLink}>Connect Forum</Link>
//               </div>
//             )}
//           </li>

//           {isAuthenticated && (
//             <>
//               <li>
//                 <Link to="/alumni-profile" style={styles.link}>Alumni Profile</Link>
//               </li>
//               <li>
//                 <button onClick={logout} style={styles.logoutBtn}>Logout</button>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// const styles = {
//   navbar: {
//     position: 'fixed',
//     top: 0,
//     width: '100%',
//     zIndex: 999,
//     padding: '12px 0',
//   },
//   container: {
//     maxWidth: '1800px',
//     margin: '0 auto',
//     padding: '0 30px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//   },
//   logoSection: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   },
//   logo: {
//     height: '75px',
//     width: '50%',
//   },
//   title: {
//     fontSize: '1.1rem',
//     fontWeight: '500',
//     color: '#ffffff',
//   },
//   navList: {
//     listStyle: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     margin: 0,
//     padding: 0,
//     flexWrap: 'wrap',
//   },
//   link: {
//     color: '#ffffff',
//     fontSize: '1rem',
//     fontWeight: '500',
//     textDecoration: 'none',
//     position: 'relative',
//     cursor: 'pointer',
//     padding: '8px 10px',
//   },
//   logoutBtn: {
//     backgroundColor: '#ff4d4d',
//     border: 'none',
//     color: '#fff',
//     padding: '8px 12px',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//   },
//   dropdown: {
//     position: 'relative',
//   },
//   dropdownContent: {
//     position: 'absolute',
//     top: '100%',
//     left: 0,
//     backgroundColor: '#ffffff',
//     color: '#000000',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//     borderRadius: '5px',
//     padding: '10px 0',
//     display: 'flex',
//     flexDirection: 'column',
//     minWidth: '180px',
//     zIndex: 999,
//   },
//   dropdownLink: {
//     padding: '10px 16px',
//     color: '#000',
//     textDecoration: 'none',
//     fontSize: '0.95rem',
//     whiteSpace: 'nowrap',
//   },
// };

// export default Navbar;







// -------------------------------- final version --------------------------------------------------



























// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [dropdownVisible, setDropdownVisible] = useState(null);
//   const { isAuthenticated, logout } = useAuth();
//   const location = useLocation();

//   /* ---------------- SCROLL EFFECT (HOOK MUST ALWAYS RUN) ---------------- */
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   /* ---------------- ADMIN ROUTE CHECK (NO HOOKS HERE) ---------------- */
//   const isAdminRoute = location.pathname.startsWith("/admin");

//   if (isAdminRoute) {
//     return null; // safe: AFTER hooks
//   }

//   return (
//     <nav
//       style={{
//         ...styles.navbar,
//         background: scrolled
//           ? "linear-gradient(to right, #003973, #E5E5BE)"
//           : "linear-gradient(to right, #16222A, #3A6073)",
//         boxShadow: scrolled ? "0 4px 10px rgba(0,0,0,0.3)" : "none",
//         transition: "all 0.5s ease",
//       }}
//     >
//       <div style={styles.container}>
//         {/* LOGO */}
//         <div style={styles.logoSection}>
//           <img
//             src="/images/sinhgad_logo.jfif"
//             alt="College Logo"
//             style={styles.logo}
//           />
//           <span style={styles.title}>Alumni Association Of SITS</span>
//         </div>

//         {/* NAV LINKS */}
//         <ul style={styles.navList}>
//           <li>
//             <Link style={styles.link} to="/">
//               Home
//             </Link>
//           </li>

//           {/* Member Dropdown */}
//           <li
//             style={styles.dropdown}
//             onMouseEnter={() => setDropdownVisible("member")}
//             onMouseLeave={() => setDropdownVisible(null)}
//           >
//             <div style={styles.link}>Member ▾</div>
//             {dropdownVisible === "member" && (
//               <div style={styles.dropdownContent}>
//                 <Link to="/members" style={styles.dropdownLink}>
//                   Alumni List
//                 </Link>
//                 {/* <Link to="/search" style={styles.dropdownLink}>
//                   Search
//                 </Link> */}
//               </div>
//             )}
//           </li>

//           <li>
//             <Link style={styles.link} to="/membership">
//               Membership
//             </Link>
//           </li>
//           <li>
//             <Link style={styles.link} to="/events">
//               Events
//             </Link>
//           </li>
//           <li>
//             <Link style={styles.link} to="/about">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link style={styles.link} to="/contact">
//               Contact Us
//             </Link>
//           </li>

//           {/* Alumni Corner Dropdown */}
//           <li
//             style={styles.dropdown}
//             onMouseEnter={() => setDropdownVisible("alumni")}
//             onMouseLeave={() => setDropdownVisible(null)}
//           >
//             <div style={styles.link}>Alumni Corner ▾</div>
//             {dropdownVisible === "alumni" && (
//               <div style={styles.dropdownContent}>
//                 <Link to="/alumni-sessions" style={styles.dropdownLink}>
//                   Alumni Sessions
//                 </Link>
//                 <Link to="/internships" style={styles.dropdownLink}>
//                   Job / Internship
//                 </Link>
//                 <Link to="/connect-forum" style={styles.dropdownLink}>
//                   Connect Forum
//                 </Link>
//               </div>
//             )}
//           </li>

//           {/* AUTH ACTIONS */}
//           {isAuthenticated && (
//             <>
//               <li>
//                 <Link to="/alumni-profile" style={styles.link}>
//                   Profile
//                 </Link>
//               </li>
//               <li>
//                 <button onClick={logout} style={styles.logoutBtn}>
//                   Logout
//                 </button>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// /* ---------------- STYLES ---------------- */

// const styles = {
//   navbar: {
//     position: "fixed",
//     top: 0,
//     width: "100%",
//     zIndex: 999,
//     padding: "12px 0",
//   },
//   container: {
//     maxWidth: "1800px",
//     margin: "0 auto",
//     padding: "0 30px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//   },
//   logoSection: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//   },
//   logo: {
//     height: "75px",
//     width: "50%",
//   },
//   title: {
//     fontSize: "1.1rem",
//     fontWeight: "500",
//     color: "#ffffff",
//   },
//   navList: {
//     listStyle: "none",
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     margin: 0,
//     padding: 0,
//     flexWrap: "wrap",
//   },
//   link: {
//     color: "#ffffff",
//     fontSize: "1rem",
//     fontWeight: "500",
//     textDecoration: "none",
//     cursor: "pointer",
//     padding: "8px 10px",
//   },
//   logoutBtn: {
//     backgroundColor: "#ff4d4d",
//     border: "none",
//     color: "#fff",
//     padding: "8px 12px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
//   dropdown: {
//     position: "relative",
//   },
//   dropdownContent: {
//     position: "absolute",
//     top: "100%",
//     left: 0,
//     backgroundColor: "#ffffff",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//     borderRadius: "5px",
//     padding: "10px 0",
//     display: "flex",
//     flexDirection: "column",
//     minWidth: "180px",
//     zIndex: 999,
//   },
//   dropdownLink: {
//     padding: "10px 16px",
//     color: "#000",
//     textDecoration: "none",
//     fontSize: "0.95rem",
//     whiteSpace: "nowrap",
//   },
// };

// export default Navbar;










// -------------------------------------------------------------------------------------------------------











import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- CLOSE MOBILE MENU ON ROUTE CHANGE ---------------- */
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  }, [location.pathname]);

  /* ---------------- ADMIN ROUTE CHECK ---------------- */
  const isAdminRoute = location.pathname.startsWith("/admin");

  if (isAdminRoute) {
    return null;
  }

  /* ---------------- TOGGLE MOBILE DROPDOWN ---------------- */
  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdownOpen(mobileDropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[999] transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-[#003973] to-[#E5E5BE] shadow-lg"
          : "bg-gradient-to-r from-[#16222A] to-[#3A6073]"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO SECTION */}
          <div className="flex items-center gap-3">
            <img
              src="/images/sinhgad_logo.jfif"
              alt="College Logo"
              className="h-16 w-auto sm:h-20"
            />
            <span className="text-white font-medium text-sm sm:text-base lg:text-lg whitespace-nowrap">
              Alumni Association Of SITS
            </span>
          </div>

          {/* DESKTOP NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-2 xl:gap-4">
            <li>
              <Link
                to="/"
                className="text-white text-sm xl:text-base font-medium hover:text-gray-200 transition-colors px-3 py-2"
              >
                Home
              </Link>
            </li>

            {/* Member Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setDropdownVisible("member")}
              onMouseLeave={() => setDropdownVisible(null)}
            >
              <div className="text-white text-sm xl:text-base font-medium hover:text-gray-200 transition-colors px-3 py-2 cursor-pointer flex items-center gap-1">
                Member <ChevronDown className="w-4 h-4" />
              </div>
              {dropdownVisible === "member" && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[180px] mt-1">
                  <Link
                    to="/members"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-sm"
                  >
                    Alumni List
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/membership"
                className="text-white text-sm xl:text-base font-medium hover:text-gray-200 transition-colors px-3 py-2"
              >
                Membership
              </Link>
            </li>

            <li>
              <Link
                to="/events"
                className="text-white text-sm xl:text-base font-medium hover:text-gray-200 transition-colors px-3 py-2"
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-white text-sm xl:text-base font-medium hover:text-gray-200 transition-colors px-3 py-2"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-white text-sm xl:text-base font-medium hover:text-gray-200 transition-colors px-3 py-2"
              >
                Contact Us
              </Link>
            </li>

            {/* Alumni Corner Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setDropdownVisible("alumni")}
              onMouseLeave={() => setDropdownVisible(null)}
            >
              <div className="text-white text-sm xl:text-base font-medium hover:text-gray-200 transition-colors px-3 py-2 cursor-pointer flex items-center gap-1">
                Alumni Corner <ChevronDown className="w-4 h-4" />
              </div>
              {dropdownVisible === "alumni" && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[180px] mt-1">
                  <Link
                    to="/alumni-sessions"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-sm"
                  >
                    Alumni Sessions
                  </Link>
                  <Link
                    to="/internships"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-sm"
                  >
                    Job / Internship
                  </Link>
                  <Link
                    to="/connect-forum"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-sm"
                  >
                    Connect Forum
                  </Link>
                </div>
              )}
            </li>

            {/* AUTH ACTIONS */}
            {isAuthenticated && (
              <>
                <li>
                  <Link
                    to="/alumni-profile"
                    className="text-white text-sm xl:text-base font-medium hover:text-gray-200 transition-colors px-3 py-2"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4">
            <ul className="flex flex-col space-y-1">
              <li>
                <Link
                  to="/"
                  className="block text-white text-base font-medium hover:bg-white/10 transition-colors px-4 py-3 rounded-lg"
                >
                  Home
                </Link>
              </li>

              {/* Member Dropdown Mobile */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("member")}
                  className="w-full text-left text-white text-base font-medium hover:bg-white/10 transition-colors px-4 py-3 rounded-lg flex items-center justify-between"
                >
                  Member
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      mobileDropdownOpen === "member" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdownOpen === "member" && (
                  <div className="bg-white/10 mt-1 rounded-lg">
                    <Link
                      to="/members"
                      className="block text-white text-sm px-8 py-2 hover:bg-white/10 transition-colors"
                    >
                      Alumni List
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/membership"
                  className="block text-white text-base font-medium hover:bg-white/10 transition-colors px-4 py-3 rounded-lg"
                >
                  Membership
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="block text-white text-base font-medium hover:bg-white/10 transition-colors px-4 py-3 rounded-lg"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="block text-white text-base font-medium hover:bg-white/10 transition-colors px-4 py-3 rounded-lg"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block text-white text-base font-medium hover:bg-white/10 transition-colors px-4 py-3 rounded-lg"
                >
                  Contact Us
                </Link>
              </li>

              {/* Alumni Corner Dropdown Mobile */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("alumni")}
                  className="w-full text-left text-white text-base font-medium hover:bg-white/10 transition-colors px-4 py-3 rounded-lg flex items-center justify-between"
                >
                  Alumni Corner
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      mobileDropdownOpen === "alumni" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdownOpen === "alumni" && (
                  <div className="bg-white/10 mt-1 rounded-lg">
                    <Link
                      to="/alumni-sessions"
                      className="block text-white text-sm px-8 py-2 hover:bg-white/10 transition-colors"
                    >
                      Alumni Sessions
                    </Link>
                    <Link
                      to="/internships"
                      className="block text-white text-sm px-8 py-2 hover:bg-white/10 transition-colors"
                    >
                      Job / Internship
                    </Link>
                    <Link
                      to="/connect-forum"
                      className="block text-white text-sm px-8 py-2 hover:bg-white/10 transition-colors"
                    >
                      Connect Forum
                    </Link>
                  </div>
                )}
              </li>

              {/* AUTH ACTIONS MOBILE */}
              {isAuthenticated && (
                <>
                  <li>
                    <Link
                      to="/alumni-profile"
                      className="block text-white text-base font-medium hover:bg-white/10 transition-colors px-4 py-3 rounded-lg"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="px-4 pt-2">
                    <button
                      onClick={logout}
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-3 rounded-lg transition-colors"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;