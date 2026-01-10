// import React, { useEffect, useState } from 'react';
// import AlumniCard from '../components/AlumniCard';
// import axios from 'axios';

// const Membership = () => {
//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     // Fetch alumni data (can be updated later if backend route changes)
//     const fetchAlumni = async () => {
//       try {
//         const res = await axios.get('/api/alumni');
//         setMembers(res.data);
//       } catch (err) {
//         console.error('Error fetching members:', err);
//       }
//     };
//     fetchAlumni();
//   }, []);

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Alumni Membership</h2>
//       <p style={styles.description}>
//         Our Alumni Association membership offers lifelong connections, networking opportunities,
//         participation in exclusive events, and the ability to support future generations of students.
//       </p>

//       <h3 style={styles.subheading}>💡 Benefits of Joining:</h3>
//       <ul style={styles.benefitsList}>
//         <li>🔗 Stay connected with your batchmates and juniors</li>
//         <li>📣 Share job/internship openings with students</li>
//         <li>🎤 Speak in alumni sessions and contribute to student growth</li>
//         <li>🏆 Receive updates on alumni achievements and college news</li>
//       </ul>

//       <h3 style={styles.subheading}>👥 Current Members:</h3>
//       <div style={styles.grid}>
//         {members.length > 0 ? (
//           members.map((alumni, index) => (
//             <AlumniCard key={index} alumni={alumni} />
//           ))
//         ) : (
//           <p style={styles.loadingText}>Loading member profiles...</p>
//         )}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: '60px 30px',
//     background: 'linear-gradient(135deg, #e3f2fd, #ffffff)',
//     minHeight: '100vh',
//   },
//   heading: {
//     fontSize: '2.5rem',
//     color: '#003366',
//     marginBottom: '20px',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: '1.1rem',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: '30px',
//     maxWidth: '800px',
//     marginInline: 'auto',
//   },
//   subheading: {
//     fontSize: '1.5rem',
//     color: '#005699',
//     marginTop: '30px',
//     marginBottom: '15px',
//     textAlign: 'center',
//   },
//   benefitsList: {
//     listStyle: 'none',
//     padding: 0,
//     marginBottom: '40px',
//     fontSize: '1.05rem',
//     color: '#333',
//     lineHeight: '1.6',
//     maxWidth: '800px',
//     marginInline: 'auto',
//   },
//   grid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     justifyContent: 'center',
//   },
//   loadingText: {
//     textAlign: 'center',
//     fontStyle: 'italic',
//     color: '#777',
//   },
// };

// export default Membership;



// --------------------------------------------------------------THis is Local ^ ------------------------------------------------------------------------
// --------------------------- 1st version online ----------------------------




// import React, { useEffect, useState } from "react";
// import { supabase } from "../supabaseClient";
// import AlumniCard from "../components/AlumniCard";

// const Membership = () => {
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("alumni")
//           .select("*")
//           .order("name", { ascending: true });

//         if (error) throw error;

//         setMembers(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error("Error fetching members:", err.message);
//         setMembers([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   return (
//     <section style={styles.section}>
//       <h2 style={styles.heading}>🎓 Alumni Membership</h2>
//       <p style={styles.description}>
//         Our Alumni Association membership offers lifelong connections, networking opportunities,
//         participation in exclusive events, and the ability to support future generations of students.
//       </p>

//       <h3 style={styles.subheading}>💡 Benefits of Joining:</h3>
//       <ul style={styles.benefitsList}>
//         <li>🔗 Stay connected with your batchmates and juniors</li>
//         <li>📣 Share job/internship openings with students</li>
//         <li>🎤 Speak in alumni sessions and contribute to student growth</li>
//         <li>🏆 Receive updates on alumni achievements and college news</li>
//       </ul>

//       <h3 style={styles.subheading}>👥 Current Members:</h3>

//       {loading ? (
//         <p style={styles.loadingText}>Loading member profiles...</p>
//       ) : members.length > 0 ? (
//         <div style={styles.grid}>
//           {members.map((alumni) => (
//             <AlumniCard key={alumni.id} alumni={alumni} />
//           ))}
//         </div>
//       ) : (
//         <p style={styles.loadingText}>No members found.</p>
//       )}
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: "60px 30px",
//     background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
//     minHeight: "100vh",
//   },
//   heading: {
//     fontSize: "2.5rem",
//     color: "#003366",
//     marginBottom: "20px",
//     textAlign: "center",
//   },
//   description: {
//     fontSize: "1.1rem",
//     color: "#333",
//     textAlign: "center",
//     marginBottom: "30px",
//     maxWidth: "800px",
//     marginInline: "auto",
//   },
//   subheading: {
//     fontSize: "1.5rem",
//     color: "#005699",
//     marginTop: "30px",
//     marginBottom: "15px",
//     textAlign: "center",
//   },
//   benefitsList: {
//     listStyle: "none",
//     padding: 0,
//     marginBottom: "40px",
//     fontSize: "1.05rem",
//     color: "#333",
//     lineHeight: "1.6",
//     maxWidth: "800px",
//     marginInline: "auto",
//   },
//   grid: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "20px",
//     justifyContent: "center",
//   },
//   loadingText: {
//     textAlign: "center",
//     fontStyle: "italic",
//     color: "#777",
//   },
// };

// export default Membership;













// // ------------------------------------------------------2nd version onilne -------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import AlumniCard from "../components/AlumniCard";

const Membership = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMembers = async () => {
      setLoading(true);
      setError("");

      // 🔐 Wait for Supabase auth session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setError("You must be logged in to view alumni");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("alumni")
        .select("*")
        .order("name", { ascending: true });

      if (error) {
        console.error("Supabase error:", error);
        setError("Access denied or no members available");
        setMembers([]);
      } else {
        setMembers(Array.isArray(data) ? data : []);
      }

      setLoading(false);
    };

    loadMembers();
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>🎓 Alumni Membership</h2>

      <p style={styles.description}>
        Our Alumni Association membership offers lifelong connections, networking opportunities,
        participation in exclusive events, and the ability to support future generations of students.
      </p>

      <h3 style={styles.subheading}>💡 Benefits of Joining:</h3>
      <ul style={styles.benefitsList}>
        <li>🔗 Stay connected with your batchmates and juniors</li>
        <li>📣 Share job/internship openings with students</li>
        <li>🎤 Speak in alumni sessions and contribute to student growth</li>
        <li>🏆 Receive updates on alumni achievements and college news</li>
      </ul>

      <h3 style={styles.subheading}>👥 Current Members:</h3>

      {loading && <p style={styles.loadingText}>Loading member profiles...</p>}

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {!loading && !error && members.length === 0 && (
        <p style={styles.loadingText}>No members found.</p>
      )}

      <div style={styles.grid}>
        {members.map((alumni) => (
          <AlumniCard key={alumni.id} alumni={alumni} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 30px",
    background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#003366",
    marginBottom: "20px",
    textAlign: "center",
  },
  description: {
    fontSize: "1.1rem",
    color: "#333",
    textAlign: "center",
    marginBottom: "30px",
    maxWidth: "800px",
    marginInline: "auto",
  },
  subheading: {
    fontSize: "1.5rem",
    color: "#005699",
    marginTop: "30px",
    marginBottom: "15px",
    textAlign: "center",
  },
  benefitsList: {
    listStyle: "none",
    padding: 0,
    marginBottom: "40px",
    fontSize: "1.05rem",
    color: "#333",
    lineHeight: "1.6",
    maxWidth: "800px",
    marginInline: "auto",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  loadingText: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#777",
  },
};

export default Membership;
