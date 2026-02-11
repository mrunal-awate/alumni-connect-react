// import React, { useEffect, useState } from 'react';
// import api from '../api'; // your axios instance

// const AdminDashboard = () => {
//   const [pendingAlumni, setPendingAlumni] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetchPendingAlumni();
//   }, []);

//   const fetchPendingAlumni = async () => {
//     try {
//       const res = await api.get('/alumni/pending');
//       setPendingAlumni(res.data);
//     } catch (err) {
//       console.error('Error fetching pending alumni:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerify = async (id) => {
//     try {
//       await api.put(`/alumni/verify/${id}`);
//       setMessage('✅ Alumni verified successfully!');
//       setPendingAlumni(prev => prev.filter(alumni => alumni._id !== id));
//     } catch (err) {
//       console.error('Verification failed:', err);
//       setMessage('❌ Failed to verify alumni.');
//     }

//     setTimeout(() => setMessage(''), 3000);
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>🛡️ Admin Verification Dashboard</h2>

//       {loading ? (
//         <p style={styles.status}>Loading pending accounts...</p>
//       ) : pendingAlumni.length === 0 ? (
//         <p style={styles.status}>No pending alumni to verify 🎉</p>
//       ) : (
//         <div style={styles.grid}>
//           {pendingAlumni.map((alumni) => (
//             <div key={alumni._id} style={styles.card}>
//               <h3 style={styles.name}>{alumni.fullName || 'Unnamed Alumni'}</h3>
//               <p><strong>Email:</strong> {alumni.email}</p>
//               <p><strong>Role:</strong> {alumni.role}</p>
//               <button onClick={() => handleVerify(alumni._id)} style={styles.button}>
//                 ✅ Approve
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {message && <p style={styles.message}>{message}</p>}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '40px',
//     textAlign: 'center',
//     minHeight: '80vh',
//     backgroundColor: '#f4f8ff',
//   },
//   heading: {
//     fontSize: '2rem',
//     marginBottom: '20px',
//     color: '#004080',
//   },
//   status: {
//     fontSize: '1.2rem',
//     color: '#555',
//     marginTop: '20px',
//   },
//   grid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     gap: '20px',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '10px',
//     width: '280px',
//     boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//     textAlign: 'left',
//   },
//   name: {
//     fontSize: '1.3rem',
//     marginBottom: '10px',
//     color: '#004080',
//   },
//   button: {
//     marginTop: '10px',
//     padding: '8px 16px',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//   },
//   message: {
//     marginTop: '20px',
//     fontWeight: 'bold',
//     color: '#007700',
//   }
// };

// export default AdminDashboard;














// --------------------------------------- final version --------------------------------------------------








// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { supabase } from "../supabaseClient";

// const AdminDashboard = () => {
//   const { isAdmin, authLoading } = useAuth();

//   const [pendingUsers, setPendingUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState("");

//   /* ---------------- FETCH PENDING USERS ---------------- */
//   useEffect(() => {
//     // ⛔ Do NOT return early before hooks
//     if (!isAdmin) {
//       setLoading(false);
//       return;
//     }

//     const fetchPendingUsers = async () => {
//       try {
//         const { data: alumni } = await supabase
//           .from("alumni")
//           .select("id, full_name, email, is_verified")
//           .eq("is_verified", false);

//         const { data: faculty } = await supabase
//           .from("faculty")
//           .select("id, full_name, email, is_verified")
//           .eq("is_verified", false);

//         const combined = [
//           ...(alumni || []).map((a) => ({ ...a, role: "Alumni" })),
//           ...(faculty || []).map((f) => ({ ...f, role: "Faculty" })),
//         ];

//         setPendingUsers(combined);
//       } catch (err) {
//         console.error("Failed to fetch pending users:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPendingUsers();
//   }, [isAdmin]);

//   /* ---------------- UI STATES ---------------- */

//   if (authLoading) {
//     return <p style={styles.status}>Checking admin access...</p>;
//   }

//   if (!isAdmin) {
//     return (
//       <div style={styles.center}>
//         <h2>⛔ Access Denied</h2>
//         <p>You are not authorized to view this page.</p>
//       </div>
//     );
//   }

//   /* ---------------- APPROVE USER ---------------- */
//   const handleApprove = async (id, role) => {
//     try {
//       const table = role === "Alumni" ? "alumni" : "faculty";

//       await supabase.from(table).update({ is_verified: true }).eq("id", id);

//       setPendingUsers((prev) => prev.filter((u) => u.id !== id));
//       setMessage(`✅ ${role} approved successfully`);
//     } catch (err) {
//       console.error("Approval failed:", err);
//       setMessage("❌ Approval failed");
//     }

//     setTimeout(() => setMessage(""), 3000);
//   };

//   /* ---------------- MAIN UI ---------------- */
//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>🛡️ Admin Dashboard</h2>

//       {loading ? (
//         <p style={styles.status}>Loading pending approvals...</p>
//       ) : pendingUsers.length === 0 ? (
//         <p style={styles.status}>🎉 No pending approvals</p>
//       ) : (
//         <div style={styles.grid}>
//           {pendingUsers.map((user) => (
//             <div key={user.id} style={styles.card}>
//               <h3 style={styles.name}>{user.full_name || "Unnamed User"}</h3>
//               <p>
//                 <strong>Email:</strong> {user.email}
//               </p>
//               <p>
//                 <strong>Role:</strong> {user.role}
//               </p>

//               <button
//                 style={styles.button}
//                 onClick={() => handleApprove(user.id, user.role)}
//               >
//                 ✅ Approve
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {message && <p style={styles.message}>{message}</p>}
//     </div>
//   );
// };

// /* ---------------- STYLES ---------------- */

// const styles = {
//   container: {
//     padding: "40px",
//     minHeight: "80vh",
//     backgroundColor: "#f4f8ff",
//   },
//   heading: {
//     fontSize: "2rem",
//     marginBottom: "20px",
//     color: "#004080",
//     textAlign: "center",
//   },
//   status: {
//     fontSize: "1.2rem",
//     color: "#555",
//     textAlign: "center",
//     marginTop: "30px",
//   },
//   grid: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     gap: "20px",
//     marginTop: "20px",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "10px",
//     width: "280px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   },
//   name: {
//     fontSize: "1.3rem",
//     marginBottom: "10px",
//     color: "#004080",
//   },
//   button: {
//     marginTop: "12px",
//     padding: "8px 16px",
//     backgroundColor: "#28a745",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
//   message: {
//     marginTop: "20px",
//     textAlign: "center",
//     fontWeight: "bold",
//     color: "#007700",
//   },
//   center: {
//     minHeight: "80vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// };

// export default AdminDashboard;










// ---------------------------- alternative version with MUI ----------------------------------








import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  // const { isAdmin, authLoading } = useAuth();

  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  /* ---------------- FETCH PENDING USERS ---------------- */
  const fetchPendingUsers = async () => {
    setLoading(true);
    setMessage("");

    try {
      const { data: alumni, error: alumniError } = await supabase
        .from("alumni")
        .select("id, full_name, email, is_verified")
        .eq("is_verified", false);

      const { data: faculty, error: facultyError } = await supabase
        .from("faculty")
        .select("id, full_name, email, is_verified")
        .eq("is_verified", false);

      if (alumniError || facultyError) {
        throw new Error("Failed to load users");
      }

      const combined = [
        ...(alumni || []).map((u) => ({ ...u, role: "Alumni" })),
        ...(faculty || []).map((u) => ({ ...u, role: "Faculty" })),
      ];

      setPendingUsers(combined);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to load pending users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchPendingUsers();
    } else {
      setLoading(false);
    }
  }, [isAdmin]);

  /* ---------------- ACCESS CHECK ---------------- */
  // if (authLoading) {
  //   return <p style={styles.status}>Checking admin access...</p>;
  // }

  // if (!isAdmin) {
  //   return (
  //     <div style={styles.center}>
  //       <h2>⛔ Access Denied</h2>
  //       <p>You are not authorized to view this page.</p>
  //     </div>
  //   );
  // }

  /* ---------------- APPROVE USER ---------------- */
  const handleApprove = async (id, role) => {
    try {
      const table = role === "Alumni" ? "alumni" : "faculty";

      const { error } = await supabase
        .from(table)
        .update({ is_verified: true })
        .eq("id", id);

      if (error) throw error;

      setMessage(`✅ ${role} approved successfully`);
      fetchPendingUsers(); // refresh list
    } catch (err) {
      console.error(err);
      setMessage("❌ Approval failed");
    }

    setTimeout(() => setMessage(""), 3000);
  };

  

  /* ---------------- UI ---------------- */
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛡️ Admin Dashboard</h2>

      {loading ? (
        <p style={styles.status}>Loading pending approvals...</p>
      ) : pendingUsers.length === 0 ? (
        <p style={styles.status}>🎉 No pending approvals</p>
      ) : (
        <div style={styles.grid}>
          {pendingUsers.map((user) => (
            <div key={user.id} style={styles.card}>
              <h3 style={styles.name}>{user.full_name || "Unnamed User"}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>

              <button
                style={styles.button}
                onClick={() => handleApprove(user.id, user.role)}
              >
                ✅ Approve
              </button>
            </div>
          ))}
        </div>
      )}

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    minHeight: "80vh",
    backgroundColor: "#f4f8ff",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#004080",
    textAlign: "center",
  },
  status: {
    fontSize: "1.2rem",
    color: "#555",
    textAlign: "center",
    marginTop: "30px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "280px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  name: {
    fontSize: "1.3rem",
    marginBottom: "10px",
    color: "#004080",
  },
  button: {
    marginTop: "12px",
    padding: "8px 16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  message: {
    marginTop: "20px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#007700",
  },
  center: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default AdminDashboard;
