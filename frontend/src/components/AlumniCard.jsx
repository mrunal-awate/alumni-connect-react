// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AlumniCard = ({ alumni }) => {
//   const navigate = useNavigate();

//   const {
//     _id,
//     fullName = 'Unnamed User',
//     email = 'N/A',
//     yearOfPassing,
//     batch,
//     company = 'N/A',
//     designation = 'N/A',
//     location = 'N/A',
//     linkedIn,
//     role = 'alumni',
//     imageUrl,
//   } = alumni;

//   const avatarUrl =
//     imageUrl ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=004080&color=fff`;

//   const badgeStyle = {
//     backgroundColor:
//       role === 'admin' ? '#ff7043' :
//       role === 'student' ? '#42a5f5' :
//       '#66bb6a',
//     color: '#fff',
//     padding: '4px 10px',
//     borderRadius: '8px',
//     fontSize: '12px',
//     fontWeight: 'bold',
//     display: 'inline-block',
//     marginBottom: '10px',
//   };

//   const handleConnect = () => {
//     alert(`🤝 Connect request sent to ${fullName} (feature coming soon!)`);
//   };

//   const handleMessage = () => {
//     alert(`💬 Message sent to ${fullName} (feature coming soon!)`);
//   };

//   return (
//     <div style={styles.card}>
//       <div style={styles.avatarWrapper}>
//         <img src={avatarUrl} alt="Profile" style={styles.avatar} />
//       </div>

//       <div style={badgeStyle}>{formatRole(role)}</div>

//       <h3 style={styles.name}>{fullName}</h3>
//       <p style={styles.info}><strong>Email:</strong> {email}</p>
//       <p style={styles.info}><strong>Batch:</strong> {yearOfPassing || batch || 'N/A'}</p>
//       <p style={styles.info}><strong>Company:</strong> {company}</p>
//       <p style={styles.info}><strong>Designation:</strong> {designation}</p>
//       <p style={styles.info}><strong>Location:</strong> {location}</p>

//       {linkedIn && (
//         <p style={styles.info}>
//           <a href={linkedIn} target="_blank" rel="noopener noreferrer" style={styles.link}>
//             🔗 LinkedIn
//           </a>
//         </p>
//       )}

//       {/* Buttons in a single row */}
//       <div style={styles.buttonRow}>
//         <button style={styles.button} onClick={() => navigate(`/profile/${_id}`)}>View</button>
//         <button style={styles.buttonAlt} onClick={handleConnect}>Connect</button>
//         <button style={styles.buttonAlt} onClick={handleMessage}>Message</button>
//       </div>
//     </div>
//   );
// };

// const formatRole = (role) => {
//   const cap = role.charAt(0).toUpperCase() + role.slice(1);
//   return role === 'student' ? `🎓 ${cap}` :
//          role === 'admin' ? `🛡️ ${cap}` :
//          `💼 ${cap}`;
// };

// const styles = {
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: '12px',
//     padding: '20px',
//     width: '300px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatarWrapper: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '12px',
//   },
//   avatar: {
//     width: '80px',
//     height: '80px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     border: '2px solid #004080',
//   },
//   name: {
//     fontSize: '1.5rem',
//     color: '#004080',
//     marginBottom: '10px',
//   },
//   info: {
//     fontSize: '14px',
//     marginBottom: '6px',
//     color: '#444',
//   },
//   link: {
//     color: '#0077b5',
//     fontWeight: 'bold',
//     textDecoration: 'none',
//   },
//   buttonRow: {
//     marginTop: '12px',
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '8px',
//     flexWrap: 'wrap',
//   },
//   button: {
//     backgroundColor: '#004080',
//     color: '#fff',
//     padding: '6px 12px',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '13px',
//   },
//   buttonAlt: {
//     backgroundColor: '#00897b',
//     color: '#fff',
//     padding: '6px 12px',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '13px',
//   },
// };

// export default AlumniCard;




// ------------------------------------------------------------------------------




// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AlumniCard = ({ alumni }) => {
//   const navigate = useNavigate();

//   const {
//     id,
//     name = 'Unnamed Alumni',
//     email = 'Not provided',
//     year,
//     branch,
//     role = 'alumni',

//     // 🔮 Future profile fields (may be empty initially)
//     company = '',
//     designation = '',
//     location = '',
//     linkedIn = '',
//     imageUrl = '',
//   } = alumni;

//   const avatarUrl =
//     imageUrl ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(
//       name
//     )}&background=004080&color=fff`;

//   const badgeStyle = {
//     backgroundColor:
//       role === 'admin'
//         ? '#ff7043'
//         : role === 'student'
//         ? '#42a5f5'
//         : '#66bb6a',
//     color: '#fff',
//     padding: '4px 10px',
//     borderRadius: '8px',
//     fontSize: '12px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//     display: 'inline-block',
//   };

//   return (
//     <div style={styles.card}>
//       <img src={avatarUrl} alt="Profile" style={styles.avatar} />

//       <div style={badgeStyle}>{formatRole(role)}</div>

//       <h3 style={styles.name}>{name}</h3>

//       <p style={styles.info}>
//         <strong>Branch:</strong> {branch}
//       </p>

//       <p style={styles.info}>
//         <strong>Batch:</strong> {year}
//       </p>

//       <p style={styles.info}>
//         <strong>Email:</strong> {email}
//       </p>

//       <p style={styles.info}>
//         <strong>Company:</strong>{' '}
//         {company ? company : <span style={styles.placeholder}>Not updated</span>}
//       </p>

//       <p style={styles.info}>
//         <strong>Designation:</strong>{' '}
//         {designation ? designation : <span style={styles.placeholder}>Not updated</span>}
//       </p>

//       <p style={styles.info}>
//         <strong>Location:</strong>{' '}
//         {location ? location : <span style={styles.placeholder}>Not updated</span>}
//       </p>

//       {linkedIn ? (
//         <p style={styles.info}>
//           <a
//             href={linkedIn}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={styles.link}
//           >
//             🔗 LinkedIn Profile
//           </a>
//         </p>
//       ) : (
//         <p style={styles.info}>
//           <strong>LinkedIn:</strong>{' '}
//           <span style={styles.placeholder}>Not updated</span>
//         </p>
//       )}

//       <div style={styles.buttonRow}>
//         <button
//           style={styles.button}
//           onClick={() => navigate(`/profile/${id}`)}
//         >
//           View Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// const formatRole = (role) => {
//   const cap = role.charAt(0).toUpperCase() + role.slice(1);
//   return role === 'student'
//     ? `🎓 ${cap}`
//     : role === 'admin'
//     ? `🛡️ ${cap}`
//     : `💼 ${cap}`;
// };

// const styles = {
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: '12px',
//     padding: '20px',
//     width: '300px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     textAlign: 'center',
//   },
//   avatar: {
//     width: '80px',
//     height: '80px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     border: '2px solid #004080',
//     marginBottom: '12px',
//   },
//   name: {
//     fontSize: '1.5rem',
//     color: '#004080',
//     marginBottom: '8px',
//   },
//   info: {
//     fontSize: '14px',
//     marginBottom: '6px',
//     color: '#444',
//   },
//   placeholder: {
//     color: '#999',
//     fontStyle: 'italic',
//   },
//   link: {
//     color: '#0077b5',
//     fontWeight: 'bold',
//     textDecoration: 'none',
//   },
//   buttonRow: {
//     marginTop: '14px',
//   },
//   button: {
//     backgroundColor: '#004080',
//     color: '#fff',
//     padding: '8px 14px',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '14px',
//   },
// };

// export default AlumniCard;





// ------------------------------------------------------------------------------



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AlumniCard = ({ alumni }) => {
//   const navigate = useNavigate();

//   const {
//     _id,
//     name = 'Unnamed Alumni',
//     email = 'Not provided',
//     graduationYear,
//     branch,
//     role = 'alumni',

//     // 🔮 Future profile fields
//     company = '',
//     designation = '',
//     location = '',
//     linkedIn = '',
//     imageUrl = '',
//   } = alumni;

//   const avatarUrl =
//     imageUrl ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(
//       name
//     )}&background=004080&color=fff`;

//   const badgeStyle = {
//     backgroundColor:
//       role === 'admin'
//         ? '#ff7043'
//         : role === 'student'
//         ? '#42a5f5'
//         : '#66bb6a',
//     color: '#fff',
//     padding: '4px 10px',
//     borderRadius: '8px',
//     fontSize: '12px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//     display: 'inline-block',
//   };

//   return (
//     <div style={styles.card}>
//       <img src={avatarUrl} alt="Profile" style={styles.avatar} />

//       <div style={badgeStyle}>{formatRole(role)}</div>

//       <h3 style={styles.name}>{name}</h3>

//       <p style={styles.info}>
//         <strong>Branch:</strong> {branch || 'Not specified'}
//       </p>

//       <p style={styles.info}>
//         <strong>Batch:</strong> {graduationYear || 'Not specified'}
//       </p>

//       <p style={styles.info}>
//         <strong>Email:</strong> {email}
//       </p>

//       <p style={styles.info}>
//         <strong>Company:</strong>{' '}
//         {company ? company : <span style={styles.placeholder}>Not updated</span>}
//       </p>

//       <p style={styles.info}>
//         <strong>Designation:</strong>{' '}
//         {designation ? designation : <span style={styles.placeholder}>Not updated</span>}
//       </p>

//       <p style={styles.info}>
//         <strong>Location:</strong>{' '}
//         {location ? location : <span style={styles.placeholder}>Not updated</span>}
//       </p>

//       {linkedIn ? (
//         <p style={styles.info}>
//           <a
//             href={linkedIn}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={styles.link}
//           >
//             🔗 LinkedIn Profile
//           </a>
//         </p>
//       ) : (
//         <p style={styles.info}>
//           <strong>LinkedIn:</strong>{' '}
//           <span style={styles.placeholder}>Not updated</span>
//         </p>
//       )}

//       <div style={styles.buttonRow}>
//         <button
//           style={styles.button}
//           onClick={() => navigate(`/profile/${_id}`)}
//         >
//           View Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// const formatRole = (role) => {
//   const cap = role.charAt(0).toUpperCase() + role.slice(1);
//   return role === 'student'
//     ? `🎓 ${cap}`
//     : role === 'admin'
//     ? `🛡️ ${cap}`
//     : `💼 ${cap}`;
// };

// const styles = {
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: '12px',
//     padding: '20px',
//     width: '300px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     textAlign: 'center',
//   },
//   avatar: {
//     width: '80px',
//     height: '80px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     border: '2px solid #004080',
//     marginBottom: '12px',
//   },
//   name: {
//     fontSize: '1.5rem',
//     color: '#004080',
//     marginBottom: '8px',
//   },
//   info: {
//     fontSize: '14px',
//     marginBottom: '6px',
//     color: '#444',
//   },
//   placeholder: {
//     color: '#999',
//     fontStyle: 'italic',
//   },
//   link: {
//     color: '#0077b5',
//     fontWeight: 'bold',
//     textDecoration: 'none',
//   },
//   buttonRow: {
//     marginTop: '14px',
//   },
//   button: {
//     backgroundColor: '#004080',
//     color: '#fff',
//     padding: '8px 14px',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '14px',
//   },
// };

// export default AlumniCard;







// ------------------------------------------------------------------------------



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AlumniCard = ({ alumni }) => {
//   // ✅ Hook ALWAYS called first
//   const navigate = useNavigate();

//   // ✅ Safe render guard AFTER hooks
//   if (!alumni) {
//     console.warn('⚠️ AlumniCard received empty alumni');
//     return null;
//   }

//   const {
//     _id,
//     name = 'Unnamed Alumni',
//     email = 'Not provided',
//     year = 'Not specified',
//     branch = 'Not specified',
//     role = 'alumni',

//     company = '',
//     designation = '',
//     location = '',
//     linkedIn = '',
//     imageUrl = '',
//   } = alumni;

//   const avatarUrl =
//     imageUrl ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(
//       name
//     )}&background=004080&color=fff`;

//   const badgeStyle = {
//     backgroundColor:
//       role === 'admin'
//         ? '#ff7043'
//         : role === 'student'
//         ? '#42a5f5'
//         : '#66bb6a',
//     color: '#fff',
//     padding: '4px 10px',
//     borderRadius: '8px',
//     fontSize: '12px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//     display: 'inline-block',
//   };

//   return (
//     <div style={styles.card}>
//       <img src={avatarUrl} alt="Profile" style={styles.avatar} />

//       <div style={badgeStyle}>{formatRole(role)}</div>

//       <h3 style={styles.name}>{name}</h3>

//       <p style={styles.info}>
//         <strong>Branch:</strong> {branch}
//       </p>

//       <p style={styles.info}>
//         <strong>Batch:</strong> {year}
//       </p>

//       <p style={styles.info}>
//         <strong>Email:</strong> {email}
//       </p>

//       <p style={styles.info}>
//         <strong>Company:</strong>{' '}
//         {company || <span style={styles.placeholder}>Not updated</span>}
//       </p>

//       <p style={styles.info}>
//         <strong>Designation:</strong>{' '}
//         {designation || <span style={styles.placeholder}>Not updated</span>}
//       </p>

//       <p style={styles.info}>
//         <strong>Location:</strong>{' '}
//         {location || <span style={styles.placeholder}>Not updated</span>}
//       </p>

//       {linkedIn ? (
//         <p style={styles.info}>
//           <a
//             href={linkedIn}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={styles.link}
//           >
//             🔗 LinkedIn Profile
//           </a>
//         </p>
//       ) : (
//         <p style={styles.info}>
//           <strong>LinkedIn:</strong>{' '}
//           <span style={styles.placeholder}>Not updated</span>
//         </p>
//       )}

//       {_id && (
//         <div style={styles.buttonRow}>
//           <button
//             style={styles.button}
//             onClick={() => navigate(`/profile/${_id}`)}
//           >
//             View Profile
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// const formatRole = (role) => {
//   const cap = role.charAt(0).toUpperCase() + role.slice(1);
//   return role === 'student'
//     ? `🎓 ${cap}`
//     : role === 'admin'
//     ? `🛡️ ${cap}`
//     : `💼 ${cap}`;
// };

// const styles = {
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     padding: '20px',
//     width: '300px',
//     minHeight: '420px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   avatar: {
//     width: '80px',
//     height: '80px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     border: '2px solid #004080',
//     margin: '0 auto 12px',
//   },
//   name: {
//     fontSize: '1.4rem',
//     color: '#004080',
//     marginBottom: '6px',
//   },
//   info: {
//     fontSize: '14px',
//     marginBottom: '6px',
//     color: '#444',
//   },
//   placeholder: {
//     color: '#999',
//     fontStyle: 'italic',
//   },
//   link: {
//     color: '#0077b5',
//     fontWeight: 'bold',
//     textDecoration: 'none',
//   },
//   buttonRow: {
//     marginTop: '14px',
//   },
//   button: {
//     backgroundColor: '#004080',
//     color: '#fff',
//     padding: '8px 14px',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '14px',
//   },
// };

// export default AlumniCard;

















// -------------------------------------------------------------------------














import React from "react";
import "./AlumniCard.css";

const AlumniCard = ({ alumni }) => {
  // Generate random color for avatar if no image is provided
  const avatarColors = [
    '#667eea', '#764ba2', '#f093fb', '#4facfe', 
    '#43e97b', '#fa709a', '#fee140', '#30cfd0'
  ];
  
  const getAvatarColor = (name) => {
    if (!name) return avatarColors[0];
    const index = name.charCodeAt(0) % avatarColors.length;
    return avatarColors[index];
  };

  const getInitials = (name) => {
    if (!name) return "NA";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const avatarStyle = {
    background: `linear-gradient(135deg, ${getAvatarColor(alumni.name)} 0%, ${getAvatarColor(alumni.name)}dd 100%)`
  };

  return (
    <div className="alumni-card">
      <div className="card-header">
        {alumni.profile_image ? (
          <img 
            src={alumni.profile_image} 
            alt={alumni.name} 
            className="alumni-avatar-img"
          />
        ) : (
          <div className="alumni-avatar" style={avatarStyle}>
            {getInitials(alumni.name)}
          </div>
        )}
        <div className="alumni-badge">Alumni</div>
      </div>

      <div className="card-body">
        <h3 className="alumni-name">{alumni.name || "Unknown"}</h3>
        
        {alumni.position && (
          <div className="alumni-info-row">
            <svg className="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            <span className="info-text position-text">{alumni.position}</span>
          </div>
        )}

        {alumni.company && (
          <div className="alumni-info-row">
            <svg className="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span className="info-text">{alumni.company}</span>
          </div>
        )}

        {alumni.branch && alumni.year && (
          <div className="alumni-info-row">
            <svg className="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            <span className="info-text">{alumni.branch}, {alumni.year}</span>
          </div>
        )}

        {alumni.location && (
          <div className="alumni-info-row">
            <svg className="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="info-text">{alumni.location}</span>
          </div>
        )}

        {alumni.email && (
          <div className="alumni-info-row">
            <svg className="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href={`mailto:${alumni.email}`} className="info-text email-link">
              {alumni.email}
            </a>
          </div>
        )}
      </div>

      <div className="card-footer">
        {alumni.linkedin && (
          <a 
            href={alumni.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        )}
        
        {alumni.profile_url && (
          <a 
            href={alumni.profile_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="profile-btn"
          >
            Profile
          </a>
        )}
      </div>
    </div>
  );
};

export default AlumniCard;