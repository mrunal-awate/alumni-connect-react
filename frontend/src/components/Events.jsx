// import React from 'react';

// const Events = () => {
//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Upcoming Events</h2>
//         <ul style={styles.list}>
//           <li style={styles.listItem}>🎓 <strong>Alumni Meet 2025</strong> — 15th Aug</li>
//           <li style={styles.listItem}>💼 <strong>Career Talk by Google Alum</strong> — 22nd July</li>
//           <li style={styles.listItem}>📢 <strong>Placement Prep Webinar</strong> — 30th July</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #e3f2fd, #90caf9)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px 20px',
//   },
//   container: {
//     textAlign: 'center',
//     maxWidth: '700px',
//   },
//   heading: {
//     fontSize: '2rem',
//     color: '#0d47a1',
//     marginBottom: '25px',
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   listItem: {
//     fontSize: '1.2rem',
//     color: '#333',
//     marginBottom: '15px',
//     lineHeight: '1.8',
//     background: '#ffffffaa',
//     padding: '12px 20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
// };

// export default Events;








// --------------------------------1st version online -------------------------------------------------







// // /pages/Events.jsx
// import React, { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Helmet } from 'react-helmet';

// // Mock Data for Events
// // In a real application, this would come from an API
// const eventsData = [
//   {
//     id: 'e1',
//     title: 'Alumni Annual Meet 2025',
//     date: '2025-08-15T18:00:00+05:30', // August 15, 2025, 6 PM IST
//     location: 'SITS Auditorium, Pune',
//     type: 'Conference',
//     description: 'Our biggest annual gathering! Reconnect with old friends, network with successful alumni, and enjoy a night of nostalgia and celebration. Special guest speakers, cultural performances, and networking dinner.',
//     image: 'https://picsum.photos/id/1015/800/400', // Working placeholder image URL
//     actionLink: '#', // Placeholder for RSVP/Register
//     actionText: 'RSVP Now',
//     isOnline: false,
//   },
//   {
//     id: 'e2',
//     title: 'Career Talk: Navigating the AI/ML Landscape',
//     date: '2025-07-22T15:00:00+05:30', // July 22, 2025, 3 PM IST (Past Event)
//     location: 'Online (Zoom)',
//     type: 'Webinar',
//     description: 'Join Google AI Lead Alum, Ms. Priya Sharma (Batch 2010), as she shared invaluable insights on building a successful career in Artificial Intelligence and Machine Learning. Included a live Q&A session.',
//     image: 'https://picsum.photos/id/1018/800/400', // Working placeholder image URL
//     actionLink: '#',
//     actionText: 'View Recording',
//     isOnline: true,
//   },
//   {
//     id: 'e3',
//     title: 'Placement Preparation Webinar Series',
//     date: '2025-07-30T10:00:00+05:30', // July 30, 2025, 10 AM IST
//     location: 'Online (Google Meet)',
//     type: 'Webinar',
//     description: 'A comprehensive webinar series to help final-year students ace their placements. Covers resume building, advanced interview techniques, and group discussion strategies.',
//     image: 'https://picsum.photos/id/1024/800/400', // Working placeholder image URL
//     actionLink: '#',
//     actionText: 'Join Webinar',
//     isOnline: true,
//   },
//   {
//     id: 'e4',
//     title: 'Entrepreneurship Bootcamp: Idea to Startup',
//     date: '2025-09-10T09:00:00+05:30', // September 10, 2025, 9 AM IST
//     location: 'SITS Incubation Center',
//     type: 'Workshop',
//     description: 'An intensive two-day bootcamp for aspiring student entrepreneurs. Learn about business model canvas, market validation, funding opportunities, and legal aspects from successful alumni founders.',
//     image: 'https://picsum.photos/id/1033/800/400', // Working placeholder image URL
//     actionLink: '#',
//     actionText: 'Register Now',
//     isOnline: false,
//   },
//   {
//     id: 'e5',
//     title: 'Guest Lecture: Future of Quantum Computing',
//     date: '2025-06-10T14:00:00+05:30', // June 10, 2025, 2 PM IST (Past Event)
//     location: 'SITS Seminar Hall',
//     type: 'Lecture',
//     description: 'Dr. Vikram Desai (Batch 2005) delivered an insightful lecture on the advancements and future prospects of Quantum Computing and its profound impact on various industries.',
//     image: 'https://picsum.photos/id/1040/800/400', // Working placeholder image URL
//     actionLink: '#',
//     actionText: 'Learn More',
//     isOnline: false,
//   },
//   {
//     id: 'e6',
//     title: 'Alumni Mentorship Mixer',
//     date: '2025-08-01T17:00:00+05:30', // August 1, 2025, 5 PM IST
//     location: 'SITS Cafeteria & Online',
//     type: 'Networking',
//     description: 'An informal hybrid event for students to meet and interact with alumni mentors from diverse industries. A great chance for casual networking and gaining personalized insights.',
//     image: 'https://picsum.photos/id/1050/800/400', // Working placeholder image URL
//     actionLink: '#',
//     actionText: 'RSVP Now',
//     isOnline: true, // Hybrid means partly online
//   },
// ];

// const Events = () => {
//   const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' or 'past'

//   // Filter events based on the current date
//   const now = new Date('2025-07-24T02:49:32+05:30'); // Fixed current date for consistent demonstration

//   const upcomingEvents = useMemo(
//     () =>
//       eventsData
//         .filter((event) => new Date(event.date) >= now)
//         .sort((a, b) => new Date(a.date) - new Date(b.date)), // Sort chronologically
//     [now]
//   );

//   const pastEvents = useMemo(
//     () =>
//       eventsData
//         .filter((event) => new Date(event.date) < now)
//         .sort((a, b) => new Date(b.date) - new Date(a.date)), // Sort by most recent first
//     [now]
//   );

//   const eventsToDisplay = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

//   const formatDate = (isoString) => {
//     const date = new Date(isoString);
//     return date.toLocaleDateString('en-IN', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   };

//   const formatTime = (isoString) => {
//     const date = new Date(isoString);
//     return date.toLocaleTimeString('en-IN', {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true,
//     });
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 md:px-8">
//       <Helmet>
//         <title>SITS Alumni</title>
//         <meta name="description" content="Explore upcoming and past events for SITS alumni and students." />
//       </Helmet>

//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-10"
//       >
//         <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 drop-shadow-md">
//           🗓️ Alumni & Student Events
//         </h1>
//         <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//           Stay connected with the SITS community through our diverse range of online and offline events.
//           From career talks to annual alumni meets, there's always something happening!
//         </p>
//       </motion.div>

//       {/* Host an Event CTA */}
//       <motion.div
//         className="bg-indigo-700 text-white rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//       >
//         <h2 className="text-2xl md:text-3xl font-bold mb-3">
//           Have an Event Idea or Want to Host?
//         </h2>
//         <p className="text-lg mb-6 opacity-90">
//           We encourage alumni and students to organize or suggest new events for the community.
//         </p>
//         <a
//           href="#" // Placeholder for an actual event suggestion/hosting form link
//           className="inline-flex items-center bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
//         >
//           <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
//           Suggest / Host an Event
//         </a>
//       </motion.div>

//       {/* Event Filters (Tabs) */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//         className="max-w-4xl mx-auto mb-8 bg-white p-2 rounded-xl shadow-lg border border-gray-200 flex justify-center"
//       >
//         <button
//           onClick={() => setActiveTab('upcoming')}
//           className={`px-8 py-3 font-semibold text-lg rounded-lg transition-all duration-300 ${activeTab === 'upcoming'
//             ? 'bg-blue-600 text-white shadow-md'
//             : 'text-gray-700 hover:bg-gray-100'
//             }`}
//         >
//           Upcoming Events ({upcomingEvents.length})
//         </button>
//         <button
//           onClick={() => setActiveTab('past')}
//           className={`px-8 py-3 font-semibold text-lg rounded-lg transition-all duration-300 ml-4 ${activeTab === 'past'
//             ? 'bg-blue-600 text-white shadow-md'
//             : 'text-gray-700 hover:bg-gray-100'
//             }`}
//         >
//           Past Events ({pastEvents.length})
//         </button>
//       </motion.div>

//       {/* Events List */}
//       <div className="max-w-6xl mx-auto">
//         {eventsToDisplay.length === 0 ? (
//           <motion.div
//             className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <p className="text-xl text-gray-600 font-semibold">
//               <span role="img" aria-label="calendar" className="mr-2">📅</span>
//               No {activeTab} events found at the moment.
//             </p>
//             <p className="text-gray-500 mt-2">Check back later or suggest a new event!</p>
//           </motion.div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <AnimatePresence>
//               {eventsToDisplay.map((event, index) => (
//                 <motion.div
//                   key={event.id}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.4, delay: index * 0.08 }}
//                   className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-200 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
//                 >
//                   <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
//                     {event.image ? (
//                       <img
//                         src={event.image}
//                         alt={event.title}
//                         className="w-full h-full object-cover"
//                         onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x200?text=Image+Load+Error"; }} // Fallback on error
//                       />
//                     ) : (
//                       // Fallback if image URL is genuinely empty or null in data
//                       <span className="text-gray-400 text-6xl">✨</span>
//                     )}
//                     <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
//                       {event.type}
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
//                       {event.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-2 flex items-center">
//                       <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
//                       {formatDate(event.date)} at {formatTime(event.date)}
//                     </p>
//                     <p className="text-gray-600 text-sm mb-4 flex items-center">
//                       <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
//                       {event.location} {event.isOnline && !event.location.toLowerCase().includes('online') ? ' (Online)' : ''}
//                     </p>
//                     <p className="text-gray-700 text-base line-clamp-3 mb-4">
//                       {event.description}
//                     </p>
//                     <a
//                       href={event.actionLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
//                     >
//                       {event.actionText || 'View Details'}
//                       <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Events;







// -------------------------------------------------2nd version online-------------------------------------------------------









// import React, { useState, useMemo, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";

// /* ---------- KEEP YOUR FULL eventsData ARRAY HERE ---------- */
// const eventsData = [
//   /* paste your full events array here exactly as before */
// ];

// const Events = () => {
//   const [activeTab, setActiveTab] = useState("upcoming");
//   const [isVerified, setIsVerified] = useState(false);
//   const [checkingAuth, setCheckingAuth] = useState(true);

//   // 🔐 Supabase verification
//   useEffect(() => {
//     const init = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (session) {
//         const uid = session.user.id;

//         const { data: student } = await supabase
//           .from("students")
//           .select("is_verified")
//           .eq("id", uid)
//           .single();

//         const { data: alumni } = await supabase
//           .from("alumni")
//           .select("is_verified")
//           .eq("id", uid)
//           .single();

//         const { data: faculty } = await supabase
//           .from("faculty")
//           .select("is_verified")
//           .eq("id", uid)
//           .single();

//         if (student?.is_verified || alumni?.is_verified || faculty?.is_verified) {
//           setIsVerified(true);
//         }
//       }

//       setCheckingAuth(false);
//     };

//     init();
//   }, []);

//   // 🧠 Hooks must ALWAYS run
//   const now = new Date();

//   const upcomingEvents = useMemo(
//     () => eventsData.filter((e) => new Date(e.date) >= now),
//     [now]
//   );

//   const pastEvents = useMemo(
//     () => eventsData.filter((e) => new Date(e.date) < now),
//     [now]
//   );

//   const eventsToDisplay = activeTab === "upcoming" ? upcomingEvents : pastEvents;

//   const formatDate = (d) =>
//     new Date(d).toLocaleDateString("en-IN", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });

//   const formatTime = (d) =>
//     new Date(d).toLocaleTimeString("en-IN", {
//       hour: "2-digit",
//       minute: "2-digit",
//     });

//   // 🔐 AFTER all hooks → safe to return conditionally
//   if (checkingAuth) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-blue-700 text-xl">
//         Loading events...
//       </div>
//     );
//   }

//   if (!isVerified) {
//     return (
//       <section className="min-h-screen flex items-center justify-center bg-blue-50">
//         <div className="bg-white p-10 rounded-xl shadow-lg text-center">
//           <h2 className="text-2xl font-bold text-blue-700 mb-4">🔒 Events Locked</h2>
//           <p className="text-gray-600">
//             Only verified alumni, students, and faculty can access events.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   // 🔓 Verified users reach here
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 md:px-8">
//       <Helmet>
//         <title>SITS Alumni Events</title>
//       </Helmet>

//       <h1 className="text-4xl font-bold text-blue-800 text-center mb-10">
//         🗓️ Alumni & Student Events
//       </h1>

//       <div className="flex justify-center gap-4 mb-10">
//         <button
//           onClick={() => setActiveTab("upcoming")}
//           className={`px-6 py-2 rounded ${
//             activeTab === "upcoming"
//               ? "bg-blue-600 text-white"
//               : "bg-white"
//           }`}
//         >
//           Upcoming
//         </button>

//         <button
//           onClick={() => setActiveTab("past")}
//           className={`px-6 py-2 rounded ${
//             activeTab === "past"
//               ? "bg-blue-600 text-white"
//               : "bg-white"
//           }`}
//         >
//           Past
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         <AnimatePresence>
//           {eventsToDisplay.map((event) => (
//             <motion.div
//               key={event.id}
//               className="bg-white rounded-xl shadow p-4"
//             >
//               <h3 className="font-bold text-lg">{event.title}</h3>
//               <p className="text-sm">
//                 {formatDate(event.date)} {formatTime(event.date)}
//               </p>
//               <p className="text-sm">{event.location}</p>
//               <p className="mt-2">{event.description}</p>
//               <a
//                 href={event.actionLink}
//                 className="text-blue-600 mt-2 inline-block"
//               >
//                 {event.actionText}
//               </a>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default Events;























// ---------------------------------------------------------------3rd version online -------------------------------------------------













// import React, { useState, useMemo, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";

// /* ---------- KEEP YOUR FULL eventsData ARRAY HERE ---------- */
// const eventsData = [
//   /* paste your full events array here exactly as before */
// ];

// const Events = () => {
//   const [activeTab, setActiveTab] = useState("upcoming");
//   const [isVerified, setIsVerified] = useState(false);
//   const [checkingAuth, setCheckingAuth] = useState(true);

//   // 🔐 Supabase verification
//   useEffect(() => {
//     const init = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (session) {
//         const uid = session.user.id;

//         const { data: student } = await supabase
//           .from("students")
//           .select("is_verified")
//           .eq("id", uid)
//           .single();

//         const { data: alumni } = await supabase
//           .from("alumni")
//           .select("is_verified")
//           .eq("id", uid)
//           .single();

//         const { data: faculty } = await supabase
//           .from("faculty")
//           .select("is_verified")
//           .eq("id", uid)
//           .single();

//         if (
//           student?.is_verified ||
//           alumni?.is_verified ||
//           faculty?.is_verified
//         ) {
//           setIsVerified(true);
//         }
//       }

//       setCheckingAuth(false);
//     };

//     init();
//   }, []);

//   // ✅ FIXED: stable "now" reference
//   const now = useMemo(() => new Date(), []);

//   const upcomingEvents = useMemo(() => {
//     return eventsData.filter((e) => new Date(e.date) >= now);
//   }, [now]);

//   const pastEvents = useMemo(() => {
//     return eventsData.filter((e) => new Date(e.date) < now);
//   }, [now]);

//   const eventsToDisplay =
//     activeTab === "upcoming" ? upcomingEvents : pastEvents;

//   const formatDate = (d) =>
//     new Date(d).toLocaleDateString("en-IN", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });

//   const formatTime = (d) =>
//     new Date(d).toLocaleTimeString("en-IN", {
//       hour: "2-digit",
//       minute: "2-digit",
//     });

//   // 🔐 AFTER all hooks → safe to return conditionally
//   if (checkingAuth) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-blue-700 text-xl">
//         Loading events...
//       </div>
//     );
//   }

//   if (!isVerified) {
//     return (
//       <section className="min-h-screen flex items-center justify-center bg-blue-50">
//         <div className="bg-white p-10 rounded-xl shadow-lg text-center">
//           <h2 className="text-2xl font-bold text-blue-700 mb-4">
//             🔒 Events Locked
//           </h2>
//           <p className="text-gray-600">
//             Only verified alumni, students, and faculty can access events.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   // 🔓 Verified users reach here
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 md:px-8">
//       <Helmet>
//         <title>SITS Alumni Events</title>
//       </Helmet>

//       <h1 className="text-4xl font-bold text-blue-800 text-center mb-10">
//         🗓️ Alumni & Student Events
//       </h1>

//       <div className="flex justify-center gap-4 mb-10">
//         <button
//           onClick={() => setActiveTab("upcoming")}
//           className={`px-6 py-2 rounded ${
//             activeTab === "upcoming"
//               ? "bg-blue-600 text-white"
//               : "bg-white"
//           }`}
//         >
//           Upcoming
//         </button>

//         <button
//           onClick={() => setActiveTab("past")}
//           className={`px-6 py-2 rounded ${
//             activeTab === "past" ? "bg-blue-600 text-white" : "bg-white"
//           }`}
//         >
//           Past
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         <AnimatePresence>
//           {eventsToDisplay.map((event) => (
//             <motion.div
//               key={event.id}
//               className="bg-white rounded-xl shadow p-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//             >
//               <h3 className="font-bold text-lg">{event.title}</h3>
//               <p className="text-sm">
//                 {formatDate(event.date)} {formatTime(event.date)}
//               </p>
//               <p className="text-sm">{event.location}</p>
//               <p className="mt-2">{event.description}</p>
//               <a
//                 href={event.actionLink}
//                 className="text-blue-600 mt-2 inline-block"
//               >
//                 {event.actionText}
//               </a>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default Events;
















// ----------------------------------------------------------------4th version online -------------------------------------------------
























// import React, { useState, useMemo, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";
// import { Calendar, MapPin, Clock, Users, Plus, X } from "lucide-react";

// const Events = () => {
//   const [activeTab, setActiveTab] = useState("upcoming");
//   const [isVerified, setIsVerified] = useState(false);
//   const [userRole, setUserRole] = useState("guest");
//   const [user, setUser] = useState(null);
//   const [userName, setUserName] = useState("");
//   const [checkingAuth, setCheckingAuth] = useState(true);
  
//   // Events state
//   const [events, setEvents] = useState([]);
//   const [loadingEvents, setLoadingEvents] = useState(true);
  
//   // Modal states
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [createForm, setCreateForm] = useState({
//     title: "",
//     description: "",
//     date: "",
//     time: "",
//     location: "",
//     category: "Workshop",
//     max_participants: "",
//   });

//   // 🔐 Supabase verification
//   useEffect(() => {
//     const init = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (session) {
//         setUser(session.user);
//         const uid = session.user.id;

//         const { data: student } = await supabase
//           .from("students")
//           .select("is_verified, name")
//           .eq("id", uid)
//           .maybeSingle();

//         const { data: alumni } = await supabase
//           .from("alumni")
//           .select("verified, name")
//           .eq("id", uid)
//           .maybeSingle();

//         const { data: faculty } = await supabase
//           .from("faculty")
//           .select("is_verified, name")
//           .eq("id", uid)
//           .maybeSingle();

//         if (student?.is_verified) {
//           setUserRole("student");
//           setIsVerified(true);
//           setUserName(student.name || session.user.email);
//         } else if (alumni?.verified) {
//           setUserRole("alumni");
//           setIsVerified(true);
//           setUserName(alumni.name || session.user.email);
//         } else if (faculty?.is_verified) {
//           setUserRole("faculty");
//           setIsVerified(true);
//           setUserName(faculty.name || session.user.email);
//         }
//       }

//       setCheckingAuth(false);
//     };

//     init();
//     loadEvents();
//   }, []);

//   // Load events from database
//   const loadEvents = async () => {
//     try {
//       const { data, error } = await supabase
//         .from("events")
//         .select("*")
//         .order("date", { ascending: true });

//       if (error) throw error;
//       setEvents(data || []);
//     } catch (err) {
//       console.error("Error loading events:", err);
//     } finally {
//       setLoadingEvents(false);
//     }
//   };

//   // Create new event
//   const handleCreateEvent = async () => {
//     if (!createForm.title.trim() || !createForm.date || !createForm.time) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     try {
//       const eventDateTime = new Date(`${createForm.date}T${createForm.time}`);
      
//       const { error } = await supabase.from("events").insert({
//         title: createForm.title,
//         description: createForm.description,
//         date: eventDateTime.toISOString(),
//         location: createForm.location,
//         category: createForm.category,
//         max_participants: parseInt(createForm.max_participants) || null,
//         created_by: user.id,
//         creator_name: userName,
//         creator_role: userRole,
//       });

//       if (error) throw error;

//       alert("✅ Event created successfully!");
//       setShowCreateModal(false);
//       setCreateForm({
//         title: "",
//         description: "",
//         date: "",
//         time: "",
//         location: "",
//         category: "Workshop",
//         max_participants: "",
//       });
//       loadEvents();
//     } catch (err) {
//       console.error("Error creating event:", err);
//       alert("Failed to create event. Please try again.");
//     }
//   };

//   // RSVP to event
//   const handleRSVP = async (eventId) => {
//     if (!isVerified) {
//       alert("Please verify your account to RSVP");
//       return;
//     }

//     try {
//       const { error } = await supabase.from("event_participants").insert({
//         event_id: eventId,
//         user_id: user.id,
//         user_name: userName,
//         user_role: userRole,
//         status: "registered",
//       });

//       if (error) {
//         if (error.code === "23505") {
//           alert("You've already registered for this event!");
//         } else {
//           throw error;
//         }
//         return;
//       }

//       alert("✅ Successfully registered for the event!");
//       loadEvents();
//     } catch (err) {
//       console.error("Error RSVPing:", err);
//       alert("Failed to register. Please try again.");
//     }
//   };

//   const now = useMemo(() => new Date(), []);

//   const upcomingEvents = useMemo(() => {
//     return events.filter((e) => new Date(e.date) >= now);
//   }, [events, now]);

//   const pastEvents = useMemo(() => {
//     return events.filter((e) => new Date(e.date) < now);
//   }, [events, now]);

//   const eventsToDisplay = activeTab === "upcoming" ? upcomingEvents : pastEvents;

//   const formatDate = (d) =>
//     new Date(d).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });

//   const formatTime = (d) =>
//     new Date(d).toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//     });

//   const getCategoryColor = (category) => {
//     const colors = {
//       Workshop: "bg-slate-100 text-slate-700",
//       Seminar: "bg-blue-50 text-blue-700",
//       Networking: "bg-emerald-50 text-emerald-700",
//       Conference: "bg-violet-50 text-violet-700",
//       Social: "bg-amber-50 text-amber-700",
//     };
//     return colors[category] || "bg-gray-100 text-gray-700";
//   };

//   // Loading state
//   if (checkingAuth || loadingEvents) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-slate-600 text-lg">Loading events...</div>
//       </div>
//     );
//   }

//   // Not verified
//   if (!isVerified) {
//     return (
//       <section className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="bg-white p-10 rounded-2xl shadow-lg text-center border border-gray-100">
//           <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//             </svg>
//           </div>
//           <h2 className="text-2xl font-bold text-slate-800 mb-2">Events Locked</h2>
//           <p className="text-slate-500">
//             Only verified alumni, students, and faculty can access events.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   // Main events page
//   return (
//     <section className="min-h-screen bg-gray-50 py-8 px-4">
//       <Helmet>
//         <title>Events - Alumni Connect</title>
//       </Helmet>

//       {/* Header */}
//       <div className="max-w-7xl mx-auto mb-8">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//           <div>
//             <h1 className="text-3xl font-bold text-slate-800 mb-1 flex items-center gap-2">
//               <Calendar className="w-8 h-8 text-slate-600" />
//               Alumni & Student Events
//             </h1>
//             <p className="text-slate-500">Connect, learn, and grow together</p>
//           </div>

//           {/* Post Event Button - Only for alumni, faculty, admin */}
//           {(userRole === "alumni" || userRole === "faculty") && (
//             <button
//               onClick={() => setShowCreateModal(true)}
//               className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-700 transition-all shadow-sm"
//             >
//               <Plus className="w-5 h-5" />
//               Post Event
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="max-w-7xl mx-auto mb-8">
//         <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
//           <button
//             onClick={() => setActiveTab("upcoming")}
//             className={`px-6 py-2 rounded-md font-medium transition-all ${
//               activeTab === "upcoming"
//                 ? "bg-slate-800 text-white shadow-sm"
//                 : "text-slate-600 hover:text-slate-800"
//             }`}
//           >
//             Upcoming ({upcomingEvents.length})
//           </button>
//           <button
//             onClick={() => setActiveTab("past")}
//             className={`px-6 py-2 rounded-md font-medium transition-all ${
//               activeTab === "past"
//                 ? "bg-slate-800 text-white shadow-sm"
//                 : "text-slate-600 hover:text-slate-800"
//             }`}
//           >
//             Past ({pastEvents.length})
//           </button>
//         </div>
//       </div>

//       {/* Events Grid */}
//       <div className="max-w-7xl mx-auto">
//         {eventsToDisplay.length === 0 ? (
//           <div className="text-center py-20">
//             <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Calendar className="w-10 h-10 text-slate-400" />
//             </div>
//             <p className="text-slate-500 text-lg">
//               No {activeTab} events at the moment
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <AnimatePresence>
//               {eventsToDisplay.map((event) => (
//                 <motion.div
//                   key={event.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
//                 >
//                   {/* Category Badge */}
//                   <div className="p-4 pb-3">
//                     <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
//                       {event.category}
//                     </span>
//                   </div>

//                   {/* Event Details */}
//                   <div className="px-4 pb-4 flex-grow">
//                     <h3 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2">
//                       {event.title}
//                     </h3>

//                     {/* Date & Time */}
//                     <div className="flex items-start gap-2 mb-2 text-sm text-slate-600">
//                       <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                       <span>{formatDate(event.date)}</span>
//                     </div>

//                     <div className="flex items-start gap-2 mb-2 text-sm text-slate-600">
//                       <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                       <span>{formatTime(event.date)}</span>
//                     </div>

//                     {/* Location */}
//                     {event.location && (
//                       <div className="flex items-start gap-2 mb-3 text-sm text-slate-600">
//                         <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                         <span className="line-clamp-1">{event.location}</span>
//                       </div>
//                     )}

//                     {/* Description */}
//                     {event.description && (
//                       <p className="text-sm text-slate-500 line-clamp-3 mb-3">
//                         {event.description}
//                       </p>
//                     )}

//                     {/* Participants */}
//                     {event.max_participants && (
//                       <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
//                         <Users className="w-4 h-4" />
//                         <span>Max: {event.max_participants} participants</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Footer - RSVP Button */}
//                   <div className="px-4 pb-4 mt-auto">
//                     <button
//                       onClick={() => handleRSVP(event.id)}
//                       className="w-full bg-slate-800 text-white py-2.5 rounded-lg font-medium hover:bg-slate-700 transition-all"
//                     >
//                       Register / RSVP
//                     </button>
//                   </div>

//                   {/* Posted by */}
//                   {event.creator_name && (
//                     <div className="px-4 pb-3 border-t border-gray-100 pt-3">
//                       <p className="text-xs text-slate-400">
//                         Posted by{" "}
//                         <span className="font-semibold text-slate-600">
//                           {event.creator_name}
//                         </span>
//                         {event.creator_role && (
//                           <span className="capitalize"> ({event.creator_role})</span>
//                         )}
//                       </p>
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         )}
//       </div>

//       {/* Create Event Modal */}
//       {showCreateModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//           >
//             {/* Modal Header */}
//             <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
//               <h3 className="text-xl font-bold text-slate-800">Create New Event</h3>
//               <button
//                 onClick={() => setShowCreateModal(false)}
//                 className="text-slate-400 hover:text-slate-600 transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Modal Body */}
//             <div className="p-6 space-y-4">
//               {/* Title */}
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-1">
//                   Event Title *
//                 </label>
//                 <input
//                   type="text"
//                   value={createForm.title}
//                   onChange={(e) => setCreateForm({ ...createForm, title: e.target.value })}
//                   placeholder="e.g., Tech Workshop: Introduction to AI"
//                   className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                 />
//               </div>

//               {/* Description */}
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-1">
//                   Description
//                 </label>
//                 <textarea
//                   value={createForm.description}
//                   onChange={(e) => setCreateForm({ ...createForm, description: e.target.value })}
//                   placeholder="Tell attendees what to expect..."
//                   className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent resize-none"
//                 />
//               </div>

//               {/* Date & Time */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-slate-700 mb-1">
//                     Date *
//                   </label>
//                   <input
//                     type="date"
//                     value={createForm.date}
//                     onChange={(e) => setCreateForm({ ...createForm, date: e.target.value })}
//                     className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-slate-700 mb-1">
//                     Time *
//                   </label>
//                   <input
//                     type="time"
//                     value={createForm.time}
//                     onChange={(e) => setCreateForm({ ...createForm, time: e.target.value })}
//                     className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                   />
//                 </div>
//               </div>

//               {/* Location */}
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-1">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   value={createForm.location}
//                   onChange={(e) => setCreateForm({ ...createForm, location: e.target.value })}
//                   placeholder="e.g., Auditorium A, Online (Zoom Link)"
//                   className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                 />
//               </div>

//               {/* Category & Max Participants */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-slate-700 mb-1">
//                     Category
//                   </label>
//                   <select
//                     value={createForm.category}
//                     onChange={(e) => setCreateForm({ ...createForm, category: e.target.value })}
//                     className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent bg-white"
//                   >
//                     <option value="Workshop">Workshop</option>
//                     <option value="Seminar">Seminar</option>
//                     <option value="Networking">Networking</option>
//                     <option value="Conference">Conference</option>
//                     <option value="Social">Social</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-slate-700 mb-1">
//                     Max Participants
//                   </label>
//                   <input
//                     type="number"
//                     value={createForm.max_participants}
//                     onChange={(e) => setCreateForm({ ...createForm, max_participants: e.target.value })}
//                     placeholder="Optional"
//                     className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex gap-3 rounded-b-2xl">
//               <button
//                 onClick={() => setShowCreateModal(false)}
//                 className="flex-1 border border-gray-200 text-slate-600 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-all"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleCreateEvent}
//                 className="flex-1 bg-slate-800 text-white py-2.5 rounded-lg font-semibold hover:bg-slate-700 transition-all"
//               >
//                 Create Event
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Events;


















// --------------------------------------------------------------- Previous version -------------------------------------------------






















import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { supabase } from "../supabaseClient";
import { Calendar, MapPin, Clock, Users, Plus, X } from "lucide-react";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isVerified, setIsVerified] = useState(false);
  const [userRole, setUserRole] = useState("guest");
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);
  
  // Events state
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  
  // Modal states
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createForm, setCreateForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "Workshop",
    max_participants: "",
  });

  // 🔐 Supabase verification
  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setUser(session.user);
        const uid = session.user.id;

        const { data: student } = await supabase
          .from("students")
          .select("is_verified, name")
          .eq("id", uid)
          .maybeSingle();

        const { data: alumni } = await supabase
          .from("alumni")
          .select("verified, name")
          .eq("id", uid)
          .maybeSingle();

        const { data: faculty } = await supabase
          .from("faculty")
          .select("is_verified, name")
          .eq("id", uid)
          .maybeSingle();

        if (student?.is_verified === true || student?.is_verified === "true") {
          setUserRole("student");
          setIsVerified(true);
          setUserName(student.name || session.user.email);
        } else if (alumni?.verified === true || alumni?.verified === "true" || String(alumni?.verified).trim().toLowerCase() === "true") {
          setUserRole("alumni");
          setIsVerified(true);
          setUserName(alumni.name || session.user.email);
        } else if (faculty?.is_verified === true || faculty?.is_verified === "true") {
          setUserRole("faculty");
          setIsVerified(true);
          setUserName(faculty.name || session.user.email);
        }
      }

      setCheckingAuth(false);
    };

    init();
    loadEvents();
  }, []);

  // Load events from database
  const loadEvents = async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (err) {
      console.error("Error loading events:", err);
    } finally {
      setLoadingEvents(false);
    }
  };

  // Create new event
  const handleCreateEvent = async () => {
    if (!createForm.title.trim() || !createForm.date || !createForm.time) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const eventDateTime = new Date(`${createForm.date}T${createForm.time}`);
      
      const { error } = await supabase.from("events").insert({
        title: createForm.title,
        description: createForm.description,
        date: eventDateTime.toISOString(),
        location: createForm.location,
        category: createForm.category,
        max_participants: parseInt(createForm.max_participants) || null,
        created_by: user.id,
        creator_name: userName,
        creator_role: userRole,
      });

      if (error) throw error;

      alert("✅ Event created successfully!");
      setShowCreateModal(false);
      setCreateForm({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        category: "Workshop",
        max_participants: "",
      });
      loadEvents();
    } catch (err) {
      console.error("Error creating event:", err);
      alert("Failed to create event. Please try again.");
    }
  };

  // RSVP to event
  const handleRSVP = async (eventId) => {
    if (!isVerified) {
      alert("Please verify your account to RSVP");
      return;
    }

    try {
      const { error } = await supabase.from("event_participants").insert({
        event_id: eventId,
        user_id: user.id,
        user_name: userName,
        user_role: userRole,
        status: "registered",
      });

      if (error) {
        if (error.code === "23505") {
          alert("You've already registered for this event!");
        } else {
          throw error;
        }
        return;
      }

      alert("✅ Successfully registered for the event!");
      loadEvents();
    } catch (err) {
      console.error("Error RSVPing:", err);
      alert("Failed to register. Please try again.");
    }
  };

  const now = useMemo(() => new Date(), []);

  const upcomingEvents = useMemo(() => {
    return events.filter((e) => new Date(e.date) >= now);
  }, [events, now]);

  const pastEvents = useMemo(() => {
    return events.filter((e) => new Date(e.date) < now);
  }, [events, now]);

  const eventsToDisplay = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const formatTime = (d) =>
    new Date(d).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const getCategoryColor = (category) => {
    const colors = {
      Workshop: "bg-slate-100 text-slate-700",
      Seminar: "bg-blue-50 text-blue-700",
      Networking: "bg-emerald-50 text-emerald-700",
      Conference: "bg-violet-50 text-violet-700",
      Social: "bg-amber-50 text-amber-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  // Loading state
  if (checkingAuth || loadingEvents) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-slate-600 text-lg">Loading events...</div>
      </div>
    );
  }

  // Not verified
  if (!isVerified) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center border border-gray-100">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Events Locked</h2>
          <p className="text-slate-500">
            Only verified alumni, students, and faculty can access events.
          </p>
        </div>
      </section>
    );
  }

  // Main events page
  return (
    <section className="min-h-screen bg-gray-50 py-8 px-4">
      <Helmet>
        <title>Events - Alumni Connect</title>
      </Helmet>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-1 flex items-center gap-2">
              <Calendar className="w-8 h-8 text-slate-600" />
              Alumni & Student Events
            </h1>
            <p className="text-slate-500">Connect, learn, and grow together</p>
          </div>

          {/* Post Event Button - Only for alumni, faculty, admin */}
          {(userRole === "alumni" || userRole === "faculty") && (
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-700 transition-all shadow-sm"
            >
              <Plus className="w-5 h-5" />
              Post Event
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              activeTab === "upcoming"
                ? "bg-slate-800 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            Upcoming ({upcomingEvents.length})
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              activeTab === "past"
                ? "bg-slate-800 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            Past ({pastEvents.length})
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto">
        {eventsToDisplay.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-10 h-10 text-slate-400" />
            </div>
            <p className="text-slate-500 text-lg">
              No {activeTab} events at the moment
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {eventsToDisplay.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  {/* Category Badge */}
                  <div className="p-4 pb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div className="px-4 pb-4 flex-grow">
                    <h3 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Date & Time */}
                    <div className="flex items-start gap-2 mb-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{formatDate(event.date)}</span>
                    </div>

                    <div className="flex items-start gap-2 mb-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{formatTime(event.date)}</span>
                    </div>

                    {/* Location */}
                    {event.location && (
                      <div className="flex items-start gap-2 mb-3 text-sm text-slate-600">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    )}

                    {/* Description */}
                    {event.description && (
                      <p className="text-sm text-slate-500 line-clamp-3 mb-3">
                        {event.description}
                      </p>
                    )}

                    {/* Participants */}
                    {event.max_participants && (
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                        <Users className="w-4 h-4" />
                        <span>Max: {event.max_participants} participants</span>
                      </div>
                    )}
                  </div>

                  {/* Footer - RSVP Button */}
                  <div className="px-4 pb-4 mt-auto">
                    <button
                      onClick={() => handleRSVP(event.id)}
                      className="w-full bg-slate-800 text-white py-2.5 rounded-lg font-medium hover:bg-slate-700 transition-all"
                    >
                      Register / RSVP
                    </button>
                  </div>

                  {/* Posted by */}
                  {event.creator_name && (
                    <div className="px-4 pb-3 border-t border-gray-100 pt-3">
                      <p className="text-xs text-slate-400">
                        Posted by{" "}
                        <span className="font-semibold text-slate-600">
                          {event.creator_name}
                        </span>
                        {event.creator_role && (
                          <span className="capitalize"> ({event.creator_role})</span>
                        )}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Create Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-xl font-bold text-slate-800">Create New Event</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Event Title *
                </label>
                <input
                  type="text"
                  value={createForm.title}
                  onChange={(e) => setCreateForm({ ...createForm, title: e.target.value })}
                  placeholder="e.g., Tech Workshop: Introduction to AI"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  value={createForm.description}
                  onChange={(e) => setCreateForm({ ...createForm, description: e.target.value })}
                  placeholder="Tell attendees what to expect..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent resize-none"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={createForm.date}
                    onChange={(e) => setCreateForm({ ...createForm, date: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Time *
                  </label>
                  <input
                    type="time"
                    value={createForm.time}
                    onChange={(e) => setCreateForm({ ...createForm, time: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={createForm.location}
                  onChange={(e) => setCreateForm({ ...createForm, location: e.target.value })}
                  placeholder="e.g., Auditorium A, Online (Zoom Link)"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                />
              </div>

              {/* Category & Max Participants */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    value={createForm.category}
                    onChange={(e) => setCreateForm({ ...createForm, category: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent bg-white"
                  >
                    <option value="Workshop">Workshop</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Networking">Networking</option>
                    <option value="Conference">Conference</option>
                    <option value="Social">Social</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Max Participants
                  </label>
                  <input
                    type="number"
                    value={createForm.max_participants}
                    onChange={(e) => setCreateForm({ ...createForm, max_participants: e.target.value })}
                    placeholder="Optional"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex gap-3 rounded-b-2xl">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 border border-gray-200 text-slate-600 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateEvent}
                className="flex-1 bg-slate-800 text-white py-2.5 rounded-lg font-semibold hover:bg-slate-700 transition-all"
              >
                Create Event
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Events;