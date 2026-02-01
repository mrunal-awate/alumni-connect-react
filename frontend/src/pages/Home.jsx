// import React, { useEffect, useState } from 'react';
// import api from '../api';

// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import MemberSection from '../components/MemberSection';
// import About from '../components/About';
// import Events from '../components/Events';
// import News from '../components/News';
// import Footer from '../components/Footer';
// import { useAuth } from '../context/AuthContext';

// const Home = () => {
//   const [alumniList, setAlumniList] = useState([]);
//   const { token } = useAuth();

//   useEffect(() => {
//     const fetchAlumni = async () => {
//       try {
//         const res = await api.get('/alumni');
//         console.log("Fetched alumni data:", res.data); // ✅ Debug log
//         setAlumniList(res.data); // Already filtered from backend
//       } catch (err) {
//         console.error('Failed to fetch alumni:', err);
//       }
//     };

//     fetchAlumni(); // ✅ Always fetch to show blur or real data
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <HeroSection />

//       <section style={styles.memberWrapper}>
//         {!token && (
//           <div style={styles.blurOverlay}>
//             <div style={styles.lockedMessage}>
//               🔒 Please login to access the full Member Section
//             </div>
//           </div>
//         )}

//         <div style={!token ? styles.blurred : {}}>
//           <MemberSection alumniList={alumniList} />
//         </div>
//       </section>

//       <About />
//       <Events />
//       <News />
//       <Footer />
//     </>
//   );
// };

// const styles = {
//   memberWrapper: {
//     position: 'relative',
//     minHeight: '90vh',
//     padding: '60px 20px',
//     backgroundColor: '#f5faff',
//     overflow: 'hidden',
//   },
//   blurred: {
//     filter: 'blur(1.8px)',
//     opacity: 0.85,
//     pointerEvents: 'none',
//     userSelect: 'none',
//   },
//   blurOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 10,
//     background: 'rgba(255, 255, 255, 0.5)',
//     backdropFilter: 'blur(1px)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: '1.3rem',
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     padding: '40px 20px',
//   },
//   lockedMessage: {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     padding: '20px 32px',
//     borderRadius: '12px',
//     boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
//   },
// };

// export default Home;

// -----------------------------------------------------------------------------------------------




// import React from 'react';

// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import MemberSection from '../components/MemberSection';
// import About from '../components/About';
// import Events from '../components/Events';
// import News from '../components/News';
// import Footer from '../components/Footer';
// import { useAuth } from '../context/AuthContext';

// const Home = () => {
//   const { token } = useAuth();

//   return (
//     <>
//       <Navbar />
//       <HeroSection />

//       <section style={styles.memberWrapper}>
//         {!token && (
//           <div style={styles.blurOverlay}>
//             <div style={styles.lockedMessage}>
//               🔒 Please login to access the full Member Section
//             </div>
//           </div>
//         )}

//         <div style={!token ? styles.blurred : {}}>
//           {/* ✅ MemberSection fetches & renders alumni itself */}
//           <MemberSection />
//         </div>
//       </section>

//       <About />
//       <Events />
//       <News />
//       <Footer />
//     </>
//   );
// };

// const styles = {
//   memberWrapper: {
//     position: 'relative',
//     minHeight: '90vh',
//     padding: '60px 20px',
//     backgroundColor: '#f5faff',
//     overflow: 'hidden',
//   },
//   blurred: {
//     filter: 'blur(1.8px)',
//     opacity: 0.85,
//     pointerEvents: 'none',
//     userSelect: 'none',
//   },
//   blurOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 10,
//     background: 'rgba(255, 255, 255, 0.5)',
//     backdropFilter: 'blur(1px)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: '1.3rem',
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     padding: '40px 20px',
//   },
//   lockedMessage: {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     padding: '20px 32px',
//     borderRadius: '12px',
//     boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
//   },
// };

// export default Home;




// -----------------------------------------------------------------------------------








// import React from 'react';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import MemberSection from '../components/MemberSection';
// import About from '../components/About';
// import Events from '../components/Events';
// import News from '../components/News';
// import Footer from '../components/Footer';
// import { useAuth } from '../context/AuthContext';

// const Home = () => {
//   const { token, authLoading } = useAuth();

//   if (authLoading) return null;

//   return (
//     <>
//       <Navbar />
//       <HeroSection />

//       <section style={styles.memberWrapper}>
//         {/* 🔒 Lock message */}
//         {!token && (
//           <div style={styles.lockBanner}>
//             🔒 Please login to access the full Member Section
//           </div>
//         )}

//         {/* ✅ Always visible */}
//         <div style={!token ? styles.blurred : {}}>
//           <MemberSection />
//         </div>
//       </section>

//       <About />
//       <Events />
//       <News />
//       <Footer />
//     </>
//   );
// };

// const styles = {
//   memberWrapper: {
//     padding: '60px 20px',
//     backgroundColor: '#f5faff',
//   },
//   blurred: {
//     filter: 'blur(1.5px)',
//     opacity: 0.7,
//     pointerEvents: 'none',
//   },
//   lockBanner: {
//     marginBottom: '20px',
//     textAlign: 'center',
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     color: '#333',
//     background: '#fff3cd',
//     padding: '14px',
//     borderRadius: '10px',
//     border: '1px solid #ffeeba',
//   },
// };

// export default Home;





// -------------------------------------------------------------------------------------------.








// import React from 'react';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import MemberSection from '../components/MemberSection';
// import About from '../components/About';
// import Events from '../components/Events';
// import News from '../components/News';
// import Footer from '../components/Footer';
// import { useAuth } from '../context/AuthContext';

// const Home = () => {
//   const { token, authLoading } = useAuth();

//   // ⏳ Wait until auth state is ready
//   if (authLoading) return null;

//   // 🔓 PUBLIC HOME (Before Login)
//   if (!token) {
//     return (
//       <>
//         <Navbar />
//         <HeroSection />
//         <About />
//         <Footer />
//       </>
//     );
//   }

//   // 🔐 AUTHENTICATED HOME (After Login)
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <MemberSection />
//       <Events />
//       <News />
//       <Footer />
//     </>
//   );
// };

// export default Home;









// ------------------------------ upper code is main this is testing version -----------------------------













import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MotivationalSection from '../components/MotivationalSection';
import NewsFeed from '../components/NewsFeed';
import WhyJoinSection from '../components/WhyJoinSection';
// import MemberSection from '../components/MemberSection';
import About from '../components/About';
import Events from '../components/Events';
// import News from '../components/News';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated, authLoading } = useAuth();

  // ⏳ Wait until auth state is ready
  if (authLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '20px',
        color: '#0d47a1'
      }}>
        Loading...
      </div>
    );
  }

  // 🔓 PUBLIC HOME (Before Login)
  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <HeroSection />
        <About />
        <Footer />
      </>
    );
  }

  // 🔐 AUTHENTICATED HOME (After Login)
  return (
    <>
      <Navbar />
      <MotivationalSection />
      <NewsFeed />
      <WhyJoinSection />
      <Events />
      <Footer />
    </>
  );
};

export default Home;