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



import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlumniCard = ({ alumni }) => {
  // ✅ Hook ALWAYS called first
  const navigate = useNavigate();

  // ✅ Safe render guard AFTER hooks
  if (!alumni) {
    console.warn('⚠️ AlumniCard received empty alumni');
    return null;
  }

  const {
    _id,
    name = 'Unnamed Alumni',
    email = 'Not provided',
    year = 'Not specified',
    branch = 'Not specified',
    role = 'alumni',

    company = '',
    designation = '',
    location = '',
    linkedIn = '',
    imageUrl = '',
  } = alumni;

  const avatarUrl =
    imageUrl ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&background=004080&color=fff`;

  const badgeStyle = {
    backgroundColor:
      role === 'admin'
        ? '#ff7043'
        : role === 'student'
        ? '#42a5f5'
        : '#66bb6a',
    color: '#fff',
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'inline-block',
  };

  return (
    <div style={styles.card}>
      <img src={avatarUrl} alt="Profile" style={styles.avatar} />

      <div style={badgeStyle}>{formatRole(role)}</div>

      <h3 style={styles.name}>{name}</h3>

      <p style={styles.info}>
        <strong>Branch:</strong> {branch}
      </p>

      <p style={styles.info}>
        <strong>Batch:</strong> {year}
      </p>

      <p style={styles.info}>
        <strong>Email:</strong> {email}
      </p>

      <p style={styles.info}>
        <strong>Company:</strong>{' '}
        {company || <span style={styles.placeholder}>Not updated</span>}
      </p>

      <p style={styles.info}>
        <strong>Designation:</strong>{' '}
        {designation || <span style={styles.placeholder}>Not updated</span>}
      </p>

      <p style={styles.info}>
        <strong>Location:</strong>{' '}
        {location || <span style={styles.placeholder}>Not updated</span>}
      </p>

      {linkedIn ? (
        <p style={styles.info}>
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            🔗 LinkedIn Profile
          </a>
        </p>
      ) : (
        <p style={styles.info}>
          <strong>LinkedIn:</strong>{' '}
          <span style={styles.placeholder}>Not updated</span>
        </p>
      )}

      {_id && (
        <div style={styles.buttonRow}>
          <button
            style={styles.button}
            onClick={() => navigate(`/profile/${_id}`)}
          >
            View Profile
          </button>
        </div>
      )}
    </div>
  );
};

const formatRole = (role) => {
  const cap = role.charAt(0).toUpperCase() + role.slice(1);
  return role === 'student'
    ? `🎓 ${cap}`
    : role === 'admin'
    ? `🛡️ ${cap}`
    : `💼 ${cap}`;
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    width: '300px',
    minHeight: '420px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #004080',
    margin: '0 auto 12px',
  },
  name: {
    fontSize: '1.4rem',
    color: '#004080',
    marginBottom: '6px',
  },
  info: {
    fontSize: '14px',
    marginBottom: '6px',
    color: '#444',
  },
  placeholder: {
    color: '#999',
    fontStyle: 'italic',
  },
  link: {
    color: '#0077b5',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  buttonRow: {
    marginTop: '14px',
  },
  button: {
    backgroundColor: '#004080',
    color: '#fff',
    padding: '8px 14px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default AlumniCard;
