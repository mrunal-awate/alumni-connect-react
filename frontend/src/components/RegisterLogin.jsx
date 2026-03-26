// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// import { supabase } from "../supabaseClient";

// import { useAuth } from '../context/AuthContext';

// const RegisterLogin = ({ onSuccess, defaultRole = 'student' }) => {
//   const { login } = useAuth();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     type: 'register',
//     role: defaultRole,
//   });

//   const [message, setMessage] = useState('');
//   const [isError, setIsError] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setIsError(false);

//     const url =
//       formData.type === 'register'
//         ? '/api/auth/register'
//         : '/api/auth/login';

//     const payload = {
//       email: formData.email,
//       password: formData.password,
//     };

//     if (formData.type === 'register') {
//       payload.role = formData.role;
//     }

//     try {
//       const res = await axios.post(url, payload);

//       if (formData.type === 'login') {
//         login(res.data.token);
//         setMessage('Login successful!');
//         setIsError(false);
//         showTemporaryPopup();
//         if (onSuccess) setTimeout(onSuccess, 500); // delay close
//       } else {
//         setMessage(`Registration successful! Please login now as a ${formData.role}.`);
//         setIsError(false);
//         showTemporaryPopup();
//         setFormData({ email: '', password: '', type: 'login', role: 'student' });
//         if (onSuccess) setTimeout(onSuccess, 1800); // delay close
//       }
//     } catch (err) {
//       console.error('Auth error:', err.response?.data?.message || err.message);
//       setIsError(true);
//       setMessage(
//         err.response?.data?.message || `Failed to ${formData.type}. Please try again.`
//       );
//       showTemporaryPopup();
//     }
//   };

//   const showTemporaryPopup = () => {
//     setShowPopup(true);
//     setTimeout(() => {
//       setShowPopup(false);
//     }, 1800);
//   };

//   const isRegister = formData.type === 'register';

//   return (
//     <section style={styles.section}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>
//           {isRegister
//             ? formData.role === 'student'
//               ? 'Student Registration'
//               : 'Alumni Registration'
//             : 'Login'}
//         </h2>

//         {showPopup && (
//           <div style={isError ? styles.popupError : styles.popupSuccess}>
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />

//           {isRegister && (
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               style={styles.input}
//             >
//               <option value="student">Student</option>
//               <option value="alumni">Alumni</option>
//             </select>
//           )}

//           <button type="submit" style={styles.button}>
//             {isRegister ? 'Register' : 'Login'}
//           </button>
//         </form>

//         <p style={styles.toggleText}>
//           {isRegister ? 'Already have an account?' : 'New user?'}{' '}
//           <button
//             type="button"
//             onClick={() =>
//               setFormData((prev) => ({
//                 ...prev,
//                 type: prev.type === 'register' ? 'login' : 'register',
//               }))
//             }
//             style={styles.toggleBtn}
//           >
//             {isRegister ? 'Login here' : 'Register here'}
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: '0',
//     margin: '0',
//     backgroundColor: 'transparent',
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     padding: '30px',
//     borderRadius: '12px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
//     maxWidth: '400px',
//     width: '100%',
//     textAlign: 'center',
//     margin: 'auto',
//     position: 'relative',
//   },
//   heading: {
//     marginBottom: '20px',
//     color: '#004080',
//   },
//   form: {
//     maxWidth: '360px',
//     margin: '0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   input: {
//     width: '100%',
//     padding: '12px',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//   },
//   button: {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#004080',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     fontWeight: 'bold',
//     fontSize: '15px',
//     cursor: 'pointer',
//   },
//   toggleText: {
//     marginTop: '15px',
//     fontSize: '14px',
//   },
//   toggleBtn: {
//     background: 'none',
//     border: 'none',
//     color: '#004080',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     textDecoration: 'underline',
//   },
//   popupSuccess: {
//     backgroundColor: '#d4edda',
//     color: '#155724',
//     padding: '10px',
//     borderRadius: '6px',
//     marginBottom: '15px',
//     fontWeight: 'bold',
//   },
//   popupError: {
//     backgroundColor: '#f8d7da',
//     color: '#721c24',
//     padding: '10px',
//     borderRadius: '6px',
//     marginBottom: '15px',
//     fontWeight: 'bold',
//   },
// };

// export default RegisterLogin;







// -------------------------------------------------------------------------------------------------



// ------------------------ 1st Version online------------------------//





// import React, { useState } from "react";
// import { supabase } from "../supabaseClient";
// import { useAuth } from "../context/AuthContext";

// const RegisterLogin = ({ onSuccess, defaultRole = "student" }) => {
//   const { login } = useAuth();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     type: "register",
//     role: defaultRole,
//   });

//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const showTemporaryPopup = () => {
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 1800);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setIsError(false);

//     try {
//       if (formData.type === "register") {
//         // Register user
//         const { data, error } = await supabase.auth.signUp({
//           email: formData.email,
//           password: formData.password,
//           options: {
//             data: {
//               role: formData.role, // student / alumni
//             },
//           },
//         });

//         if (error) throw error;

//         setMessage("Registration successful! Check your email to verify.");
//         setIsError(false);
//         showTemporaryPopup();

//         setFormData({
//           email: "",
//           password: "",
//           type: "login",
//           role: "student",
//         });

//         if (onSuccess) setTimeout(onSuccess, 1500);
//       } else {
//         // Login user
//         const { data, error } = await supabase.auth.signInWithPassword({
//           email: formData.email,
//           password: formData.password,
//         });

//         if (error) throw error;

//         login(data.session.access_token);

//         setMessage("Login successful!");
//         setIsError(false);
//         showTemporaryPopup();

//         if (onSuccess) setTimeout(onSuccess, 500);
//       }
//     } catch (error) {
//       console.error("Auth error:", error.message);
//       setIsError(true);
//       setMessage(error.message);
//       showTemporaryPopup();
//     }
//   };

//   const isRegister = formData.type === "register";

//   return (
//     <section style={styles.section}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>
//           {isRegister
//             ? formData.role === "student"
//               ? "Student Registration"
//               : "Alumni Registration"
//             : "Login"}
//         </h2>

//         {showPopup && (
//           <div style={isError ? styles.popupError : styles.popupSuccess}>
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />

//           {isRegister && (
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               style={styles.input}
//             >
//               <option value="student">Student</option>
//               <option value="alumni">Alumni</option>
//             </select>
//           )}

//           <button type="submit" style={styles.button}>
//             {isRegister ? "Register" : "Login"}
//           </button>
//         </form>

//         <p style={styles.toggleText}>
//           {isRegister ? "Already have an account?" : "New user?"}{" "}
//           <button
//             type="button"
//             onClick={() =>
//               setFormData((prev) => ({
//                 ...prev,
//                 type: prev.type === "register" ? "login" : "register",
//               }))
//             }
//             style={styles.toggleBtn}
//           >
//             {isRegister ? "Login here" : "Register here"}
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: { padding: "0", margin: "0", backgroundColor: "transparent" },
//   card: {
//     backgroundColor: "#ffffff",
//     padding: "30px",
//     borderRadius: "12px",
//     boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
//     maxWidth: "400px",
//     width: "100%",
//     textAlign: "center",
//     margin: "auto",
//   },
//   heading: { marginBottom: "20px", color: "#004080" },
//   form: { maxWidth: "360px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "10px" },
//   input: { width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ccc" },
//   button: { width: "100%", padding: "12px", backgroundColor: "#004080", color: "white", border: "none", borderRadius: "6px" },
//   toggleText: { marginTop: "15px", fontSize: "14px" },
//   toggleBtn: { background: "none", border: "none", color: "#004080", cursor: "pointer", fontWeight: "bold" },
//   popupSuccess: { backgroundColor: "#d4edda", color: "#155724", padding: "10px", borderRadius: "6px" },
//   popupError: { backgroundColor: "#f8d7da", color: "#721c24", padding: "10px", borderRadius: "6px" },
// };

// export default RegisterLogin;




// ------------------------ 2nd Version online ------------------------



// import React, { useState } from "react";
// import { supabase } from "../supabaseClient";
// import { useAuth } from "../context/AuthContext";

// const COLLEGES = [
//   "Sinhgad College of Engineering (SCOE)",
//   "Smt. Kashibai Navale College of Engineering (SKNCOE)",
//   "Sinhgad Academy of Engineering (SAE)",
//   "Sinhgad Institute Of Technology (SIT)",
//   "Sinhgad Institute of Technology and Science (SITS)",
//   "RMD Sinhgad School Of Engineering",
//   "NBN Sinhgad School Of Engineering",
//   "SKN Sinhgad Institute of Technology & Science (SKNSITS)",
// ];

// const BRANCHES = ["Computer", "IT", "ENTC", "Mechanical", "Civil"];
// const DEPARTMENTS = ["Computer", "IT", "ENTC", "Mechanical", "Civil", "Admin"];

// const RegisterLogin = ({ onSuccess, defaultRole = "student" }) => {
//   const { login } = useAuth();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     type: "register",
//     role: defaultRole,
//     prn: "",
//     college: "",
//     branch: "",
//     department: "",
//   });

//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const showTemporaryPopup = () => {
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 2000);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setIsError(false);

//     try {
//       if (formData.type === "register") {
//         // Validation
//         if (!formData.college) throw new Error("Please select college");

//         if (formData.role === "student" && !formData.prn)
//           throw new Error("PRN is required for students");

//         if (formData.role !== "faculty" && !formData.branch)
//           throw new Error("Branch is required");

//         if (formData.role === "faculty" && !formData.department)
//           throw new Error("Department is required");

//         const { data, error } = await supabase.auth.signUp({
//           email: formData.email,
//           password: formData.password,
//           options: {
//             data: {
//               role: formData.role,
//               prn: formData.prn,
//               college: formData.college,
//               branch: formData.branch,
//               department: formData.department,
//             },
//           },
//         });

//         if (error) throw error;

//         setMessage("Registration successful! Please verify your email.");
//         setIsError(false);
//         showTemporaryPopup();

//         setFormData({
//           email: "",
//           password: "",
//           type: "login",
//           role: "student",
//           prn: "",
//           college: "",
//           branch: "",
//           department: "",
//         });

//         if (onSuccess) setTimeout(onSuccess, 2000);
//       } else {
//         const { data, error } = await supabase.auth.signInWithPassword({
//           email: formData.email,
//           password: formData.password,
//         });

//         if (error) throw error;

//         login(data.session.access_token);
//         setMessage("Login successful!");
//         setIsError(false);
//         showTemporaryPopup();
//         if (onSuccess) setTimeout(onSuccess, 500);
//       }
//     } catch (error) {
//       setIsError(true);
//       setMessage(error.message);
//       showTemporaryPopup();
//     }
//   };

//   const isRegister = formData.type === "register";

//   return (
//     <section style={styles.section}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>
//           {isRegister ? "Register" : "Login"}
//         </h2>

//         {showPopup && (
//           <div style={isError ? styles.popupError : styles.popupSuccess}>
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={styles.input} />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={styles.input} />

//           {isRegister && (
//             <>
//               <select name="role" value={formData.role} onChange={handleChange} style={styles.input}>
//                 <option value="student">Student</option>
//                 <option value="alumni">Alumni</option>
//                 <option value="faculty">Faculty</option>
//               </select>

//               <select name="college" value={formData.college} onChange={handleChange} style={styles.input}>
//                 <option value="">Select College</option>
//                 {COLLEGES.map(c => <option key={c}>{c}</option>)}
//               </select>

//               {formData.role === "student" && (
//                 <input name="prn" placeholder="PRN Number" value={formData.prn} onChange={handleChange} style={styles.input} />
//               )}

//               {formData.role !== "faculty" && (
//                 <select name="branch" value={formData.branch} onChange={handleChange} style={styles.input}>
//                   <option value="">Select Branch</option>
//                   {BRANCHES.map(b => <option key={b}>{b}</option>)}
//                 </select>
//               )}

//               {formData.role === "faculty" && (
//                 <select name="department" value={formData.department} onChange={handleChange} style={styles.input}>
//                   <option value="">Select Department</option>
//                   {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
//                 </select>
//               )}
//             </>
//           )}

//           <button type="submit" style={styles.button}>
//             {isRegister ? "Register" : "Login"}
//           </button>
//         </form>
//         <p style={styles.toggleText}>                             
//           {isRegister ? "Already have an account?" : "New user?"}{" "}
//           <button
//             type="button"
//             onClick={() =>
//               setFormData((prev) => ({
//                 ...prev,
//                 type: prev.type === "register" ? "login" : "register",
//               }))
//             }
//             style={styles.toggleBtn}
//           >
//             {isRegister ? "Login here" : "Register here"}
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: { padding: "0", margin: "0", backgroundColor: "transparent" },
//   card: { background: "#fff", padding: 30, borderRadius: 12, maxWidth: 450, margin: "auto" },
//   heading: { color: "#004080", marginBottom: 20 },
//   form: { display: "flex", flexDirection: "column", gap: 10 },
//   input: { padding: 12, borderRadius: 6, border: "1px solid #ccc" },
//   button: { padding: 12, background: "#004080", color: "#fff", border: "none", borderRadius: 6 },
//   popupSuccess: { background: "#d4edda", padding: 10, marginBottom: 10 },
//   popupError: { background: "#f8d7da", padding: 10, marginBottom: 10 },
//   toggleText: {
//     marginTop: "15px",
//     fontSize: "14px",
//   },

//   toggleBtn: {
//     background: "none",
//     border: "none",
//     color: "#004080",
//     cursor: "pointer",
//     fontWeight: "bold",
//     textDecoration: "underline",
//   },

// };

// export default RegisterLogin;







// --------------------------------3rd version online-----------------------------------------------------------------





// import React, { useState } from "react";
// import { supabase } from "../supabaseClient";

// const COLLEGES = [
//   "Sinhgad College of Engineering (SCOE)",
//   "Smt. Kashibai Navale College of Engineering (SKNCOE)",
//   "Sinhgad Academy of Engineering (SAE)",
//   "Sinhgad Institute Of Technology (SIT)",
//   "Sinhgad Institute of Technology and Science (SITS)",
//   "RMD Sinhgad School Of Engineering",
//   "NBN Sinhgad School Of Engineering",
//   "SKN Sinhgad Institute of Technology & Science (SKNSITS)",
// ];

// const BRANCHES = ["Computer", "IT", "ENTC", "Mechanical", "Civil"];
// const DEPARTMENTS = ["Computer", "IT", "ENTC", "Mechanical", "Civil", "Admin"];

// const RegisterLogin = ({ onSuccess, defaultRole = "student" }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     type: "register",
//     role: defaultRole,
//     prn: "",
//     college: "",
//     branch: "",
//     department: "",
//   });

//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const showTemporaryPopup = () => {
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 2000);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setIsError(false);

//     try {
//       if (formData.type === "register") {
//         if (!formData.college) throw new Error("Please select college");

//         if (formData.role === "student" && !formData.prn)
//           throw new Error("PRN is required for students");

//         if (formData.role !== "faculty" && !formData.branch)
//           throw new Error("Branch is required");

//         if (formData.role === "faculty" && !formData.department)
//           throw new Error("Department is required");

//         const { error } = await supabase.auth.signUp({
//           email: formData.email,
//           password: formData.password,
//           options: {
//             data: {
//               role: formData.role,
//               prn: formData.prn,
//               college: formData.college,
//               branch: formData.branch,
//               department: formData.department,
//             },
//           },
//         });

//         if (error) throw error;

//         setMessage("Registration successful! Please verify your email.");
//         setIsError(false);
//         showTemporaryPopup();

//         setFormData({
//           email: "",
//           password: "",
//           type: "login",
//           role: "student",
//           prn: "",
//           college: "",
//           branch: "",
//           department: "",
//         });

//         if (onSuccess) setTimeout(onSuccess, 2000);
//       } 
//       else {
//         // LOGIN
//         const { error } = await supabase.auth.signInWithPassword({
//           email: formData.email,
//           password: formData.password,
//         });

//         if (error) throw error;

//         // 🚨 DO NOT CALL login()
//         // Supabase will auto-create the session
//         // AuthContext listens and updates automatically

//         setMessage("Login successful!");
//         setIsError(false);
//         showTemporaryPopup();

//         if (onSuccess) setTimeout(onSuccess, 500);
//       }
//     } catch (error) {
//       setIsError(true);
//       setMessage(error.message);
//       showTemporaryPopup();
//     }
//   };

//   const isRegister = formData.type === "register";

//   return (
//     <section style={styles.section}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>{isRegister ? "Register" : "Login"}</h2>

//         {showPopup && (
//           <div style={isError ? styles.popupError : styles.popupSuccess}>
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={styles.input} />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={styles.input} />

//           {isRegister && (
//             <>
//               <select name="role" value={formData.role} onChange={handleChange} style={styles.input}>
//                 <option value="student">Student</option>
//                 <option value="alumni">Alumni</option>
//                 <option value="faculty">Faculty</option>
//               </select>

//               <select name="college" value={formData.college} onChange={handleChange} style={styles.input}>
//                 <option value="">Select College</option>
//                 {COLLEGES.map(c => <option key={c}>{c}</option>)}
//               </select>

//               {formData.role === "student" && (
//                 <input name="prn" placeholder="PRN Number" value={formData.prn} onChange={handleChange} style={styles.input} />
//               )}

//               {formData.role !== "faculty" && (
//                 <select name="branch" value={formData.branch} onChange={handleChange} style={styles.input}>
//                   <option value="">Select Branch</option>
//                   {BRANCHES.map(b => <option key={b}>{b}</option>)}
//                 </select>
//               )}

//               {formData.role === "faculty" && (
//                 <select name="department" value={formData.department} onChange={handleChange} style={styles.input}>
//                   <option value="">Select Department</option>
//                   {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
//                 </select>
//               )}
//             </>
//           )}

//           <button type="submit" style={styles.button}>
//             {isRegister ? "Register" : "Login"}
//           </button>
//         </form>

//         <p style={styles.toggleText}>
//           {isRegister ? "Already have an account?" : "New user?"}{" "}
//           <button
//             type="button"
//             onClick={() =>
//               setFormData((prev) => ({
//                 ...prev,
//                 type: prev.type === "register" ? "login" : "register",
//               }))
//             }
//             style={styles.toggleBtn}
//           >
//             {isRegister ? "Login here" : "Register here"}
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: { padding: "0", margin: "0", backgroundColor: "transparent" },
//   card: { background: "#fff", padding: 30, borderRadius: 12, maxWidth: 450, margin: "auto" },
//   heading: { color: "#004080", marginBottom: 20 },
//   form: { display: "flex", flexDirection: "column", gap: 10 },
//   input: { padding: 12, borderRadius: 6, border: "1px solid #ccc" },
//   button: { padding: 12, background: "#004080", color: "#fff", border: "none", borderRadius: 6 },
//   popupSuccess: { background: "#d4edda", padding: 10, marginBottom: 10 },
//   popupError: { background: "#f8d7da", padding: 10, marginBottom: 10 },
//   toggleText: { marginTop: "15px", fontSize: "14px" },
//   toggleBtn: { background: "none", border: "none", color: "#004080", cursor: "pointer", fontWeight: "bold", textDecoration: "underline" },
// };

// export default RegisterLogin;











// -------------------------------------------------- final version online --------------------------------------------------







// import React, { useState } from "react";
// import { supabase } from "../supabaseClient";

// const COLLEGES = [
//   "Sinhgad College of Engineering (SCOE)",
//   "Smt. Kashibai Navale College of Engineering (SKNCOE)",
//   "Sinhgad Academy of Engineering (SAE)",
//   "Sinhgad Institute Of Technology (SIT)",
//   "Sinhgad Institute of Technology and Science (SITS)",
//   "RMD Sinhgad School Of Engineering",
//   "NBN Sinhgad School Of Engineering",
//   "SKN Sinhgad Institute of Technology & Science (SKNSITS)",
// ];

// const BRANCHES = ["Computer", "IT", "ENTC", "Mechanical", "Civil"];
// const DEPARTMENTS = ["Computer", "IT", "ENTC", "Mechanical", "Civil", "Admin"];

// const RegisterLogin = ({ onSuccess, defaultRole = "student" }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     type: "register",
//     role: defaultRole,
//     prn: "",
//     college: "",
//     branch: "",
//     department: "",
//   });

//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const showTemporaryPopup = () => {
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 2500);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setIsError(false);

//     try {
//       /* ================= REGISTER ================= */
//       if (formData.type === "register") {
//         if (!formData.college) throw new Error("Please select college");

//         if (formData.role === "student" && !formData.prn)
//           throw new Error("PRN is required for students");

//         if (formData.role !== "faculty" && !formData.branch)
//           throw new Error("Branch is required");

//         if (formData.role === "faculty" && !formData.department)
//           throw new Error("Department is required");

//         // 1️⃣ Create Auth User
//         const { data, error } = await supabase.auth.signUp({
//           email: formData.email,
//           password: formData.password,
//         });

//         if (error) throw error;

//         const userId = data.user.id;

//         // 2️⃣ Insert into role-based table
//         if (formData.role === "student") {
//           await supabase.from("students").insert({
//             id: userId,
//             email: formData.email,
//             prn: formData.prn,
//             college: formData.college,
//             branch: formData.branch,
//             is_verified: false,
//           });
//         }

//         if (formData.role === "alumni") {
//           await supabase.from("alumni").insert({
//             id: userId,
//             email: formData.email,
//             college: formData.college,
//             branch: formData.branch,
//             is_verified: false,
//           });
//         }

//         if (formData.role === "faculty") {
//           await supabase.from("faculty").insert({
//             id: userId,
//             email: formData.email,
//             college: formData.college,
//             department: formData.department,
//             is_verified: false,
//           });
//         }

//         // 3️⃣ Force logout (important)
//         await supabase.auth.signOut();

//         setMessage(
//           "Registration successful! Wait for admin verification before login."
//         );
//         setIsError(false);
//         showTemporaryPopup();

//         setFormData({
//           email: "",
//           password: "",
//           type: "login",
//           role: "student",
//           prn: "",
//           college: "",
//           branch: "",
//           department: "",
//         });

//         return;
//       }

//       /* ================= LOGIN ================= */
//       const { data: loginData, error } =
//         await supabase.auth.signInWithPassword({
//           email: formData.email,
//           password: formData.password,
//         });

//       if (error) throw error;

//       const user = loginData.user;

//       // 1️⃣ Fetch role from profiles
//       const { data: profile } = await supabase
//         .from("profiles")
//         .select("role")
//         .eq("id", user.id)
//         .single();

//       if (!profile) {
//         await supabase.auth.signOut();
//         throw new Error("Profile not found. Contact admin.");
//       }

//       let tableName =
//         profile.role === "student"
//           ? "students"
//           : profile.role === "alumni"
//           ? "alumni"
//           : "faculty";

//       // 2️⃣ Check verification
//       const { data: record } = await supabase
//         .from(tableName)
//         .select("is_verified")
//         .eq("id", user.id)
//         .single();

//       if (!record || !record.is_verified) {
//         await supabase.auth.signOut();
//         throw new Error("Account pending admin verification.");
//       }

//       // ✅ Verified user
//       setMessage("Login successful!");
//       setIsError(false);
//       showTemporaryPopup();

//       if (onSuccess) setTimeout(onSuccess, 500);
//     } catch (error) {
//       setIsError(true);
//       setMessage(error.message);
//       showTemporaryPopup();
//     }
//   };

//   const isRegister = formData.type === "register";

//   return (
//     <section style={styles.section}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>{isRegister ? "Register" : "Login"}</h2>

//         {showPopup && (
//           <div style={isError ? styles.popupError : styles.popupSuccess}>
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />

//           {isRegister && (
//             <>
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 style={styles.input}
//               >
//                 <option value="student">Student</option>
//                 <option value="alumni">Alumni</option>
//                 <option value="faculty">Faculty</option>
//               </select>

//               <select
//                 name="college"
//                 value={formData.college}
//                 onChange={handleChange}
//                 style={styles.input}
//               >
//                 <option value="">Select College</option>
//                 {COLLEGES.map((c) => (
//                   <option key={c}>{c}</option>
//                 ))}
//               </select>

//               {formData.role === "student" && (
//                 <input
//                   name="prn"
//                   placeholder="PRN Number"
//                   value={formData.prn}
//                   onChange={handleChange}
//                   style={styles.input}
//                 />
//               )}

//               {formData.role !== "faculty" && (
//                 <select
//                   name="branch"
//                   value={formData.branch}
//                   onChange={handleChange}
//                   style={styles.input}
//                 >
//                   <option value="">Select Branch</option>
//                   {BRANCHES.map((b) => (
//                     <option key={b}>{b}</option>
//                   ))}
//                 </select>
//               )}

//               {formData.role === "faculty" && (
//                 <select
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   style={styles.input}
//                 >
//                   <option value="">Select Department</option>
//                   {DEPARTMENTS.map((d) => (
//                     <option key={d}>{d}</option>
//                   ))}
//                 </select>
//               )}
//             </>
//           )}

//           <button type="submit" style={styles.button}>
//             {isRegister ? "Register" : "Login"}
//           </button>
//         </form>

//         <p style={styles.toggleText}>
//           {isRegister ? "Already have an account?" : "New user?"}{" "}
//           <button
//             type="button"
//             onClick={() =>
//               setFormData((prev) => ({
//                 ...prev,
//                 type: prev.type === "register" ? "login" : "register",
//               }))
//             }
//             style={styles.toggleBtn}
//           >
//             {isRegister ? "Login here" : "Register here"}
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: { padding: "0", margin: "0" },
//   card: {
//     background: "#fff",
//     padding: 30,
//     borderRadius: 12,
//     maxWidth: 450,
//     margin: "auto",
//   },
//   heading: { color: "#004080", marginBottom: 20 },
//   form: { display: "flex", flexDirection: "column", gap: 10 },
//   input: { padding: 12, borderRadius: 6, border: "1px solid #ccc" },
//   button: {
//     padding: 12,
//     background: "#004080",
//     color: "#fff",
//     border: "none",
//     borderRadius: 6,
//   },
//   popupSuccess: { background: "#d4edda", padding: 10, marginBottom: 10 },
//   popupError: { background: "#f8d7da", padding: 10, marginBottom: 10 },
//   toggleText: { marginTop: "15px", fontSize: "14px" },
//   toggleBtn: {
//     background: "none",
//     border: "none",
//     color: "#004080",
//     cursor: "pointer",
//     fontWeight: "bold",
//     textDecoration: "underline",
//   },
// };

// export default RegisterLogin;















// --------------------------new code ---------------------------------------------------------------












// import React, { useState } from "react";
// import { supabase } from "../supabaseClient";


// /* ---------- constants ---------- */
// const COLLEGES = [
//   "Sinhgad College of Engineering (SCOE)",
//   "Smt. Kashibai Navale College of Engineering (SKNCOE)",
//   "Sinhgad Academy of Engineering (SAE)",
//   "Sinhgad Institute Of Technology (SIT)",
//   "Sinhgad Institute of Technology and Science (SITS)",
//   "RMD Sinhgad School Of Engineering",
//   "NBN Sinhgad School Of Engineering",
//   "SKN Sinhgad Institute of Technology & Science (SKNSITS)",
// ];

// const BRANCHES = ["Computer", "IT", "ENTC", "Mechanical", "Civil"];
// const DEPARTMENTS = ["Computer", "IT", "ENTC", "Mechanical", "Civil", "Admin"];

// const RegisterLogin = ({ onSuccess, defaultRole = "student" }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     type: "register",
//     role: defaultRole,
//     prn: "",
//     college: "",
//     branch: "",
//     department: "",
//   });

//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const showTemporaryPopup = () => {
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 2500);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setIsError(false);

//     try {
//       /* ================= REGISTER ================= */
//       if (formData.type === "register") {
//         if (!formData.college) throw new Error("Please select college");

//         if (formData.role === "student" && !formData.prn)
//           throw new Error("PRN is required for students");

//         if (formData.role !== "faculty" && !formData.branch)
//           throw new Error("Branch is required");

//         if (formData.role === "faculty" && !formData.department)
//           throw new Error("Department is required");

//         const { data, error } = await supabase.auth.signUp({
//           email: formData.email,
//           password: formData.password,
//         });

//         if (error) throw error;

//         const userId = data.user.id;

//         if (formData.role === "student") {
//           await supabase.from("student").insert({
//             id: userId,
//             email: formData.email,
//             prn: formData.prn,
//             college: formData.college,
//             branch: formData.branch,
//             is_verified: true,
//           });
//         }

//         if (formData.role === "alumni") {
//           await supabase.from("alumni").insert({
//             id: userId,
//             email: formData.email,
//             college: formData.college,
//             branch: formData.branch,
//             is_verified: true,
//           });
//         }

//         if (formData.role === "faculty") {
//           await supabase.from("faculty").insert({
//             id: userId,
//             email: formData.email,
//             college: formData.college,
//             department: formData.department,
//             is_verified: true,
//           });
//         }

//         await supabase.auth.signOut();

//         setMessage(
//           "Registration successful! Wait for admin verification before login."
//         );
//         setIsError(false);
//         showTemporaryPopup();

//         setFormData({
//           email: "",
//           password: "",
//           type: "login",
//           role: "student",
//           prn: "",
//           college: "",
//           branch: "",
//           department: "",
//         });

//         return;
//       }

//       /* ================= LOGIN ================= */

//       const { data: loginData, error } =
//         await supabase.auth.signInWithPassword({
//           email: formData.email,
//           password: formData.password,
//         });

//       if (error) throw error;

//       const user = loginData.user;

//       /* ✅ ADMIN CHECK */
//       const { data: admin } = await supabase
//         .from("admin") 
//         .select("id, name")
//         .eq("id", user.id)
//         .maybeSingle();

//       if (admin) {
//         setMessage("Admin login successful!");
//         setIsError(false);
//         showTemporaryPopup();

//         // ✅ redirect admin
//         if (onSuccess) {
//           setTimeout(() => onSuccess("/admin"), 500);
//         }

//         return;
//       }

//       /* ✅ ROLE TABLE CHECK - OPTIMIZED */
//       let userRecord = null;
//       let tableName = null;

//       // Check student
//       const { data: student } = await supabase
//         .from("student")
//         .select("is_verified")
//         .eq("id", user.id)
//         .maybeSingle();

//       if (student) {
//         userRecord = student;
//         tableName = "student";
//       }

//       // Check alumni (only if not student)
//       if (!tableName) {
//         const { data: alumni } = await supabase
//           .from("alumni")
//           .select("is_verified")
//           .eq("id", user.id)
//           .maybeSingle();

//         if (alumni) {
//           userRecord = alumni;
//           tableName = "alumni";
//         }
//       }

//       // Check faculty (only if not student or alumni)
//       if (!tableName) {
//         const { data: faculty } = await supabase
//           .from("faculty")
//           .select("is_verified")
//           .eq("id", user.id)
//           .maybeSingle();

//         if (faculty) {
//           userRecord = faculty;
//           tableName = "faculty";
//         }
//       }

//       // If no role found
//       if (!tableName || !userRecord) {
//         await supabase.auth.signOut();
//         throw new Error("User role not found. Contact admin.");
//       }

//       // Check verification status
//       if (!userRecord.is_verified) {
//         await supabase.auth.signOut();
//         throw new Error("Account pending admin verification.");
//       }

//       // Success!
//       setMessage("Login successful!");
//       setIsError(false);
//       showTemporaryPopup();
//       if (onSuccess) setTimeout(onSuccess, 500);

//     } catch (error) {
//       setIsError(true);
//       setMessage(error.message);
//       showTemporaryPopup();
//     }
//   };

//   const isRegister = formData.type === "register";

//   return (
//     <section style={styles.section}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>{isRegister ? "Register" : "Login"}</h2>

//         {showPopup && (
//           <div style={isError ? styles.popupError : styles.popupSuccess}>
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />

//           {isRegister && (
//             <>
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 style={styles.input}
//               >
//                 <option value="student">Student</option>
//                 <option value="alumni">Alumni</option>
//                 <option value="faculty">Faculty</option>
//               </select>

//               <select
//                 name="college"
//                 value={formData.college}
//                 onChange={handleChange}
//                 style={styles.input}
//               >
//                 <option value="">Select College</option>
//                 {COLLEGES.map((c) => (
//                   <option key={c}>{c}</option>
//                 ))}
//               </select>

//               {formData.role === "student" && (
//                 <input
//                   name="prn"
//                   placeholder="PRN"
//                   value={formData.prn}
//                   onChange={handleChange}
//                   style={styles.input}
//                 />
//               )}

//               {formData.role !== "faculty" && (
//                 <select
//                   name="branch"
//                   value={formData.branch}
//                   onChange={handleChange}
//                   style={styles.input}
//                 >
//                   <option value="">Select Branch</option>
//                   {BRANCHES.map((b) => (
//                     <option key={b}>{b}</option>
//                   ))}
//                 </select>
//               )}

//               {formData.role === "faculty" && (
//                 <select
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   style={styles.input}
//                 >
//                   <option value="">Select Department</option>
//                   {DEPARTMENTS.map((d) => (
//                     <option key={d}>{d}</option>
//                   ))}
//                 </select>
//               )}
//             </>
//           )}

//           <button type="submit" style={styles.button}>
//             {isRegister ? "Register" : "Login"}
//           </button>
//         </form>

//         {/* ✅ LOGIN / REGISTER TOGGLE */}
//         <p style={styles.toggleText}>
//           {isRegister ? "Already have an account?" : "New user?"}{" "}
//           <button
//             type="button"
//             onClick={() =>
//               setFormData((prev) => ({
//                 ...prev,
//                 type: prev.type === "register" ? "login" : "register",
//               }))
//             }
//             style={styles.toggleBtn}
//           >
//             {isRegister ? "Login here" : "Register here"}
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// };

// /* ---------- STYLES ---------- */
// const styles = {
//   section: { padding: 0 },
//   card: {
//     background: "#fff",
//     padding: 30,
//     borderRadius: 12,
//     maxWidth: 450,
//     margin: "auto",
//   },
//   heading: { color: "#004080", marginBottom: 20 },
//   form: { display: "flex", flexDirection: "column", gap: 10 },
//   input: { padding: 12, borderRadius: 6, border: "1px solid #ccc" },
//   button: {
//     padding: 12,
//     background: "#004080",
//     color: "#fff",
//     border: "none",
//     borderRadius: 6,
//     cursor: "pointer",
//   },
//   popupSuccess: { background: "#d4edda", padding: 10, marginBottom: 10 },
//   popupError: { background: "#f8d7da", padding: 10, marginBottom: 10 },
//   toggleText: {
//     marginTop: 15,
//     fontSize: 14,
//     textAlign: "center",
//   },
//   toggleBtn: {
//     background: "none",
//     border: "none",
//     color: "#004080",
//     cursor: "pointer",
//     fontWeight: "bold",
//     textDecoration: "underline",
//   },
// };

// export default RegisterLogin;







// ---------------------------------------------------------------------






// import React, { useState } from "react";
// import { supabase } from "../supabaseClient";

// /* ---------- constants ---------- */
// const COLLEGES = [
//   "Sinhgad College of Engineering (SCOE)",
//   "Smt. Kashibai Navale College of Engineering (SKNCOE)",
//   "Sinhgad Academy of Engineering (SAE)",
//   "Sinhgad Institute Of Technology (SIT)",
//   "Sinhgad Institute of Technology and Science (SITS)",
//   "RMD Sinhgad School Of Engineering",
//   "NBN Sinhgad School Of Engineering",
//   "SKN Sinhgad Institute of Technology & Science (SKNSITS)",
// ];

// const BRANCHES = ["Computer", "IT", "ENTC", "Mechanical", "Civil"];
// const DEPARTMENTS = ["Computer", "IT", "ENTC", "Mechanical", "Civil", "Admin"];

// const RegisterLogin = ({ onSuccess, defaultRole = "student" }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     type: "register",
//     role: defaultRole,
//     prn: "",
//     college: "",
//     branch: "",
//     department: "",
//   });

//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const showTemporaryPopup = () => {
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 2500);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setIsError(false);

//     try {
//       /* ================= REGISTER ================= */
//       if (formData.type === "register") {
//         if (!formData.college) throw new Error("Please select college");

//         if (formData.role === "student" && !formData.prn)
//           throw new Error("PRN is required for students");

//         if (formData.role !== "faculty" && !formData.branch)
//           throw new Error("Branch is required");

//         if (formData.role === "faculty" && !formData.department)
//           throw new Error("Department is required");

//         const { data, error } = await supabase.auth.signUp({
//           email: formData.email,
//           password: formData.password,
//         });

//         if (error) throw error;

//         const userId = data.user.id;

//         if (formData.role === "student") {
//           const { error: insertError } = await supabase.from("student").insert({
//             id: userId,
//             email: formData.email,
//             prn: formData.prn,
//             college: formData.college,
//             branch: formData.branch,
//             is_verified: true, // ✅ Auto-verified
//           });
//           if (insertError) throw insertError;
//         }

//         if (formData.role === "alumni") {
//           const { error: insertError } = await supabase.from("alumni").insert({
//             id: userId,
//             email: formData.email,
//             college: formData.college,
//             branch: formData.branch,
//             is_verified: true, // ✅ Auto-verified
//           });
//           if (insertError) throw insertError;
//         }

//         if (formData.role === "faculty") {
//           const { error: insertError } = await supabase.from("faculty").insert({
//             id: userId,
//             email: formData.email,
//             college: formData.college,
//             department: formData.department,
//             is_verified: true, // ✅ Auto-verified
//           });
//           if (insertError) throw insertError;
//         }

//         // ✅ REMOVED: supabase.auth.signOut() — was causing auto-logout bug!

//         setMessage("Registration successful! You can now login.");
//         setIsError(false);
//         showTemporaryPopup();

//         // Switch to login form
//         setFormData({
//           email: formData.email, // ✅ Keep email prefilled for convenience
//           password: "",
//           type: "login",
//           role: formData.role,
//           prn: "",
//           college: "",
//           branch: "",
//           department: "",
//         });

//         return;
//       }

//       /* ================= LOGIN ================= */

//       const { data: loginData, error } = await supabase.auth.signInWithPassword({
//         email: formData.email,
//         password: formData.password,
//       });

//       if (error) throw error;

//       const user = loginData.user;

//       /* ✅ ADMIN CHECK */
//       const { data: admin } = await supabase
//         .from("admin")
//         .select("id, name")
//         .eq("id", user.id)
//         .maybeSingle();

//       if (admin) {
//         setMessage("Admin login successful!");
//         setIsError(false);
//         showTemporaryPopup();
//         if (onSuccess) setTimeout(() => onSuccess("/admin"), 500);
//         return;
//       }

//       /* ✅ ROLE TABLE CHECK */
//       let tableName = null;

//       const { data: student } = await supabase
//         .from("student")
//         .select("is_verified")
//         .eq("id", user.id)
//         .maybeSingle();

//       if (student) tableName = "student";

//       if (!tableName) {
//         const { data: alumni } = await supabase
//           .from("alumni")
//           .select("is_verified")
//           .eq("id", user.id)
//           .maybeSingle();
//         if (alumni) tableName = "alumni";
//       }

//       if (!tableName) {
//         const { data: faculty } = await supabase
//           .from("faculty")
//           .select("is_verified")
//           .eq("id", user.id)
//           .maybeSingle();
//         if (faculty) tableName = "faculty";
//       }

//       // ✅ If no role found in any table
//       if (!tableName) {
//         await supabase.auth.signOut();
//         throw new Error("User record not found. Please register first.");
//       }

//       // ✅ REMOVED: Verification check that was signing users out

//       // Success!
//       setMessage("Login successful!");
//       setIsError(false);
//       showTemporaryPopup();
//       if (onSuccess) setTimeout(onSuccess, 500);

//     } catch (error) {
//       setIsError(true);
//       setMessage(error.message);
//       showTemporaryPopup();
//     }
//   };

//   const isRegister = formData.type === "register";

//   return (
//     <section style={styles.section}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>{isRegister ? "Register" : "Login"}</h2>

//         {showPopup && (
//           <div style={isError ? styles.popupError : styles.popupSuccess}>
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />

//           {isRegister && (
//             <>
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 style={styles.input}
//               >
//                 <option value="student">Student</option>
//                 <option value="alumni">Alumni</option>
//                 <option value="faculty">Faculty</option>
//               </select>

//               <select
//                 name="college"
//                 value={formData.college}
//                 onChange={handleChange}
//                 style={styles.input}
//               >
//                 <option value="">Select College</option>
//                 {COLLEGES.map((c) => (
//                   <option key={c}>{c}</option>
//                 ))}
//               </select>

//               {formData.role === "student" && (
//                 <input
//                   name="prn"
//                   placeholder="PRN"
//                   value={formData.prn}
//                   onChange={handleChange}
//                   style={styles.input}
//                 />
//               )}

//               {formData.role !== "faculty" && (
//                 <select
//                   name="branch"
//                   value={formData.branch}
//                   onChange={handleChange}
//                   style={styles.input}
//                 >
//                   <option value="">Select Branch</option>
//                   {BRANCHES.map((b) => (
//                     <option key={b}>{b}</option>
//                   ))}
//                 </select>
//               )}

//               {formData.role === "faculty" && (
//                 <select
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   style={styles.input}
//                 >
//                   <option value="">Select Department</option>
//                   {DEPARTMENTS.map((d) => (
//                     <option key={d}>{d}</option>
//                   ))}
//                 </select>
//               )}
//             </>
//           )}

//           <button type="submit" style={styles.button}>
//             {isRegister ? "Register" : "Login"}
//           </button>
//         </form>

//         <p style={styles.toggleText}>
//           {isRegister ? "Already have an account?" : "New user?"}{" "}
//           <button
//             type="button"
//             onClick={() =>
//               setFormData((prev) => ({
//                 ...prev,
//                 type: prev.type === "register" ? "login" : "register",
//               }))
//             }
//             style={styles.toggleBtn}
//           >
//             {isRegister ? "Login here" : "Register here"}
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// };

// /* ---------- STYLES ---------- */
// const styles = {
//   section: { padding: 0 },
//   card: {
//     background: "#fff",
//     padding: 30,
//     borderRadius: 12,
//     maxWidth: 450,
//     margin: "auto",
//   },
//   heading: { color: "#004080", marginBottom: 20 },
//   form: { display: "flex", flexDirection: "column", gap: 10 },
//   input: { padding: 12, borderRadius: 6, border: "1px solid #ccc" },
//   button: {
//     padding: 12,
//     background: "#004080",
//     color: "#fff",
//     border: "none",
//     borderRadius: 6,
//     cursor: "pointer",
//   },
//   popupSuccess: { background: "#d4edda", padding: 10, marginBottom: 10 },
//   popupError: { background: "#f8d7da", padding: 10, marginBottom: 10 },
//   toggleText: { marginTop: 15, fontSize: 14, textAlign: "center" },
//   toggleBtn: {
//     background: "none",
//     border: "none",
//     color: "#004080",
//     cursor: "pointer",
//     fontWeight: "bold",
//     textDecoration: "underline",
//   },
// };

// export default RegisterLogin;









// --------------------------------------------------------------------------------------------






import React, { useState } from "react";
import { supabase } from "../supabaseClient";

/* ---------- constants ---------- */
const COLLEGES = [
  "Sinhgad College of Engineering (SCOE)",
  "Smt. Kashibai Navale College of Engineering (SKNCOE)",
  "Sinhgad Academy of Engineering (SAE)",
  "Sinhgad Institute Of Technology (SIT)",
  "Sinhgad Institute of Technology and Science (SITS)",
  "RMD Sinhgad School Of Engineering",
  "NBN Sinhgad School Of Engineering",
  "SKN Sinhgad Institute of Technology & Science (SKNSITS)",
];

const BRANCHES = ["Computer", "IT", "ENTC", "Mechanical", "Civil"];
const DEPARTMENTS = ["Computer", "IT", "ENTC", "Mechanical", "Civil", "Admin"];

const RegisterLogin = ({ onSuccess, defaultRole = "student" }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",         // ✅ ADDED
    type: "register",
    role: defaultRole,
    prn: "",
    college: "",
    branch: "",
    department: "",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const showTemporaryPopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    try {
      /* ================= REGISTER ================= */
      if (formData.type === "register") {
        if (!formData.name.trim()) throw new Error("Please enter your name");  // ✅ ADDED
        if (!formData.college) throw new Error("Please select college");

        if (formData.role === "student" && !formData.prn)
          throw new Error("PRN is required for students");

        if (formData.role !== "faculty" && !formData.branch)
          throw new Error("Branch is required");

        if (formData.role === "faculty" && !formData.department)
          throw new Error("Department is required");

        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;

        const userId = data.user.id;

        if (formData.role === "student") {
          const { error: insertError } = await supabase.from("student").insert({
            id: userId,
            email: formData.email,
            name: formData.name,          // ✅ ADDED
            roll_number: formData.prn,
            college: formData.college,
            branch: formData.branch,
            is_verified: true,
            verification_status: "verified",  // ✅ FIXED enum value
          });
          if (insertError) throw insertError;
        }

        if (formData.role === "alumni") {
          const { error: insertError } = await supabase.from("alumni").insert({
            id: userId,
            email: formData.email,
            name: formData.name,          // ✅ ADDED
            college: formData.college,
            branch: formData.branch,
            is_verified: true,
            verification_status: "verified",  // ✅ FIXED enum value
          });
          if (insertError) throw insertError;
        }

        if (formData.role === "faculty") {
          const { error: insertError } = await supabase.from("faculty").insert({
            id: userId,
            email: formData.email,
            name: formData.name,          // ✅ ADDED
            college: formData.college,
            department: formData.department,
            branch: formData.branch || null,  // ✅ faculty branch is optional
            is_verified: true,
            verification_status: "verified",  // ✅ FIXED enum value
          });
          if (insertError) throw insertError;
        }

        setMessage("Registration successful! You can now login.");
        setIsError(false);
        showTemporaryPopup();

        // Switch to login form
        setFormData({
          email: formData.email,
          password: "",
          name: "",
          type: "login",
          role: formData.role,
          prn: "",
          college: "",
          branch: "",
          department: "",
        });

        return;
      }

      /* ================= LOGIN ================= */

      const { data: loginData, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      const user = loginData.user;

      /* ✅ ADMIN CHECK */
      const { data: admin } = await supabase
        .from("admin")
        .select("id, name")
        .eq("id", user.id)
        .maybeSingle();

      if (admin) {
        setMessage("Admin login successful!");
        setIsError(false);
        showTemporaryPopup();
        if (onSuccess) setTimeout(() => onSuccess("/admin"), 500);
        return;
      }

      /* ✅ ROLE TABLE CHECK */
      let tableName = null;

      const { data: student } = await supabase
        .from("student")
        .select("is_verified")
        .eq("id", user.id)
        .maybeSingle();

      if (student) tableName = "student";

      if (!tableName) {
        const { data: alumni } = await supabase
          .from("alumni")
          .select("is_verified")
          .eq("id", user.id)
          .maybeSingle();
        if (alumni) tableName = "alumni";
      }

      if (!tableName) {
        const { data: faculty } = await supabase
          .from("faculty")
          .select("is_verified")
          .eq("id", user.id)
          .maybeSingle();
        if (faculty) tableName = "faculty";
      }

      if (!tableName) {
        await supabase.auth.signOut();
        throw new Error("User record not found. Please register first.");
      }

      setMessage("Login successful!");
      setIsError(false);
      showTemporaryPopup();
      if (onSuccess) setTimeout(onSuccess, 500);

    } catch (error) {
      setIsError(true);
      setMessage(error.message);
      showTemporaryPopup();
    }
  };

  const isRegister = formData.type === "register";

  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <h2 style={styles.heading}>{isRegister ? "Register" : "Login"}</h2>

        {showPopup && (
          <div style={isError ? styles.popupError : styles.popupSuccess}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          {isRegister && (
            <>
              {/* ✅ NAME FIELD ADDED */}
              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="student">Student</option>
                <option value="alumni">Alumni</option>
                <option value="faculty">Faculty</option>
              </select>

              <select
                name="college"
                value={formData.college}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="">Select College</option>
                {COLLEGES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              {formData.role === "student" && (
                <input
                  name="prn"
                  placeholder="PRN"
                  value={formData.prn}
                  onChange={handleChange}
                  style={styles.input}
                />
              )}

              {formData.role !== "faculty" && (
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Select Branch</option>
                  {BRANCHES.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              )}

              {formData.role === "faculty" && (
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Select Department</option>
                  {DEPARTMENTS.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              )}
            </>
          )}

          <button type="submit" style={styles.button}>
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p style={styles.toggleText}>
          {isRegister ? "Already have an account?" : "New user?"}{" "}
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                type: prev.type === "register" ? "login" : "register",
              }))
            }
            style={styles.toggleBtn}
          >
            {isRegister ? "Login here" : "Register here"}
          </button>
        </p>
      </div>
    </section>
  );
};

/* ---------- STYLES ---------- */
const styles = {
  section: { padding: 0 },
  card: {
    background: "#fff",
    padding: 30,
    borderRadius: 12,
    maxWidth: 450,
    margin: "auto",
  },
  heading: { color: "#004080", marginBottom: 20 },
  form: { display: "flex", flexDirection: "column", gap: 10 },
  input: { padding: 12, borderRadius: 6, border: "1px solid #ccc" },
  button: {
    padding: 12,
    background: "#004080",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  popupSuccess: { background: "#d4edda", padding: 10, marginBottom: 10 },
  popupError: { background: "#f8d7da", padding: 10, marginBottom: 10 },
  toggleText: { marginTop: 15, fontSize: 14, textAlign: "center" },
  toggleBtn: {
    background: "none",
    border: "none",
    color: "#004080",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

export default RegisterLogin;