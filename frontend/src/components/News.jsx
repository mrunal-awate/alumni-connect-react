


// ---------------1-------------------

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';

// const News = () => {
//   const { isAuthenticated } = useAuth();
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get('https://remotive.io/api/remote-jobs', {
//           params: {
//             search: 'fresher internship junior'
//           }
//         });
//         const filteredJobs = res.data.jobs.filter(job =>
//           job.title.toLowerCase().includes('intern') ||
//           job.title.toLowerCase().includes('fresher') ||
//           job.title.toLowerCase().includes('junior')
//         );
//         setJobs(filteredJobs.slice(0, 20));
//       } catch (err) {
//         console.error('Failed to fetch job news:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const visibleJobs = isAuthenticated ? jobs : jobs.slice(0, 3);

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>💼 Latest Job & Internship Listings</h2>
//         <ul style={styles.list}>
//           {loading ? (
//             <li style={styles.listItem}>🔄 Loading job news...</li>
//           ) : visibleJobs.length > 0 ? (
//             visibleJobs.map((job, idx) => (
//               <li key={idx} style={styles.listItem}>
//                 <a
//                   href={job.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={styles.link}
//                 >
//                   🔗 {job.title} at {job.company_name}
//                 </a>
//               </li>
//             ))
//           ) : (
//             <li style={styles.listItem}>🚫 No job listings found.</li>
//           )}
//         </ul>

//         {!isAuthenticated && (
//           <div style={styles.lockedBox}>
//             🔒 <strong>Login to see more job opportunities.</strong>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
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
//     color: '#ad1457',
//     marginBottom: '25px',
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   listItem: {
//     fontSize: '1.1rem',
//     color: '#333',
//     marginBottom: '15px',
//     lineHeight: '1.6',
//     background: '#ffffffdd',
//     padding: '12px 20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#0077cc',
//     fontWeight: 'bold',
//   },
//   lockedBox: {
//     marginTop: '25px',
//     backgroundColor: '#fff0f5',
//     padding: '16px 24px',
//     border: '1px dashed #ad1457',
//     borderRadius: '10px',
//     fontSize: '1rem',
//     color: '#880e4f',
//   },
// };

// export default News;










//  ---------------1st version online -----------------

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';

// const News = () => {
//   const { isAuthenticated } = useAuth();
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchJobs = async () => {
//       setLoading(true);
//       try {
//         const options = {
//           method: 'GET',
//           url: 'https://jsearch.p.rapidapi.com/search',
//           // url: 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;',     //Testing purpose
//           params: {
//             query: 'internship OR fresher jobs',
//             page: '1',
//             num_pages: '1',
//           },
//           headers: {
//             // 'X-RapidAPI-Key': 'ec18f5d303msh80d3aa10778cbb0p18a129jsn642fec00ac67', // 🚫 Replace with env var in production
//             // 'X-RapidAPI-Key': '1DL4pRCKKmg238fsCU6i7ZYEStP9fL9o4q', // Testing Purpose
//             'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
//             // 'X-RapidAPI-Host': 'gnews.io',                   //Testing Purpose
//           },
//         };

//         const res = await axios.request(options);
//         setJobs(res.data.data || []);
//       } catch (err) {
//         console.error('Failed to fetch job news:', err);
//         if (err.response?.status === 429) {
//           setError('⚠️ API limit exceeded. Please try again later.');
//         } else {
//           setError('❌ Failed to fetch job news.');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const visibleJobs = isAuthenticated ? jobs : jobs.slice(0, 3);

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>💼 Latest Job & Internship Listings</h2>

//         {loading ? (
//           <p style={styles.status}>🔄 Loading job news...</p>
//         ) : error ? (
//           <p style={styles.error}>{error}</p>
//         ) : (
//           <ul style={styles.list}>
//             {visibleJobs.length > 0 ? (
//               visibleJobs.map((job, idx) => (
//                 <li key={idx} style={styles.listItem}>
//                   <a
//                     href={job.job_google_link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={styles.link}
//                   >
//                     🔗 {job.job_title} at {job.employer_name}
//                   </a>
//                 </li>
//               ))
//             ) : (
//               <li style={styles.listItem}>🚫 No job listings found.</li>
//             )}
//           </ul>
//         )}

//         {!isAuthenticated && !loading && !error && (
//           <div style={styles.lockedBox}>
//             🔒 <strong>Login to see more job opportunities.</strong>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
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
//     color: '#ad1457',
//     marginBottom: '25px',
//   },
//   status: {
//     fontSize: '1.1rem',
//     color: '#777',
//     marginBottom: '20px',
//   },
//   error: {
//     fontSize: '1.1rem',
//     color: 'red',
//     marginBottom: '20px',
//     fontWeight: 'bold',
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   listItem: {
//     fontSize: '1.1rem',
//     color: '#333',
//     marginBottom: '15px',
//     lineHeight: '1.6',
//     background: '#ffffffdd',
//     padding: '12px 20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#0077cc',
//     fontWeight: 'bold',
//   },
//   lockedBox: {
//     marginTop: '25px',
//     backgroundColor: '#fff0f5',
//     padding: '16px 24px',
//     border: '1px dashed #ad1457',
//     borderRadius: '10px',
//     fontSize: '1rem',
//     color: '#880e4f',
//   },
// };

// export default News;





// -------------------------------------------------------------------------------------------
// -------------------Upper code is origina-------------------



import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const FALLBACK_NEWS = [
  {
    title: "OpenAI Launches GPT-5 with Enhanced Reasoning Capabilities",
    description: "OpenAI has released its latest model featuring significantly improved reasoning and coding abilities, setting new benchmarks across major AI evaluations.",
    url: "https://techcrunch.com",
    publishedAt: new Date().toISOString(),
    source: { name: "TechCrunch" }
  },
  {
    title: "Google Unveils Next-Gen Gemini Ultra for Enterprise",
    description: "Google DeepMind announced a major update to Gemini Ultra, targeting enterprise customers with advanced multimodal understanding and document processing.",
    url: "https://techcrunch.com",
    publishedAt: new Date().toISOString(),
    source: { name: "The Verge" }
  },
  {
    title: "Meta Releases Open-Source AI Model for Developers",
    description: "Meta continues its open-source AI push with a new model release that developers can run locally, sparking debate about safety and accessibility.",
    url: "https://techcrunch.com",
    publishedAt: new Date().toISOString(),
    source: { name: "Wired" }
  },
  {
    title: "Microsoft Integrates Copilot Deeply into Windows 12",
    description: "Microsoft's latest Windows update brings AI assistance directly into the OS, allowing users to control apps, search files, and write code using natural language.",
    url: "https://techcrunch.com",
    publishedAt: new Date().toISOString(),
    source: { name: "The Verge" }
  },
  {
    title: "Apple Silicon M4 Chip Breaks Performance Records",
    description: "Apple's new M4 chip delivers unprecedented performance per watt, powering the latest MacBook Pro lineup with AI-accelerated workflows.",
    url: "https://techcrunch.com",
    publishedAt: new Date().toISOString(),
    source: { name: "TechCrunch" }
  },
  {
    title: "India's Tech Startup Ecosystem Hits $200B Valuation",
    description: "India's startup ecosystem continues to grow with over 100 unicorns and increasing global investment in fintech, edtech and deeptech sectors.",
    url: "https://techcrunch.com",
    publishedAt: new Date().toISOString(),
    source: { name: "Forbes" }
  },
  {
    title: "Quantum Computing Reaches New Milestone with 1000-Qubit Processor",
    description: "IBM announces a breakthrough in quantum computing stability, bringing practical quantum advantage closer to reality for optimization and drug discovery.",
    url: "https://techcrunch.com",
    publishedAt: new Date().toISOString(),
    source: { name: "MIT Tech Review" }
  },
  {
    title: "Electric Vehicle Sales Surpass 50% Market Share in Europe",
    description: "EV adoption in Europe reaches a historic milestone driven by new models from legacy automakers and continued expansion of charging infrastructure.",
    url: "https://techcrunch.com",
    publishedAt: new Date().toISOString(),
    source: { name: "Reuters" }
  },
];

const News = () => {
  const { isAuthenticated } = useAuth();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const ids = await res.json();
        const top12 = ids.slice(0, 12);

        const stories = await Promise.all(
          top12.map((id) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((r) => r.json())
          )
        );

        const formatted = stories
          .filter((s) => s && s.title && s.url)
          .map((s) => ({
            title: s.title,
            description: `${s.score} points · ${s.descendants || 0} comments · by ${s.by}`,
            url: s.url,
            publishedAt: new Date(s.time * 1000).toISOString(),
            source: { name: 'Hacker News' },
          }));

        setArticles(formatted.length > 0 ? formatted : FALLBACK_NEWS);
      } catch (err) {
        console.error('Live fetch failed, using fallback:', err);
        setArticles(FALLBACK_NEWS);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const visibleArticles = isAuthenticated ? articles : articles.slice(0, 4);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
  };

  return (
    <>
      {/* ✅ Injected responsive styles */}
      <style>{`
        .news-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #e8f4fd, #dbeafe);
          padding: 40px 20px;
          box-sizing: border-box;
        }
        .news-container {
          max-width: 960px;
          margin: 0 auto;
          width: 100%;
        }
        .news-heading {
          font-size: 2rem;
          color: #1e40af;
          text-align: center;
          margin-bottom: 6px;
        }
        .news-subheading {
          text-align: center;
          color: #6b7280;
          margin-bottom: 30px;
          font-size: 0.9rem;
        }
        .news-status {
          text-align: center;
          font-size: 1.1rem;
          color: #777;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
          gap: 20px;
        }
        .news-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          overflow: hidden;
        }
        .news-card-body {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .news-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }
        .news-source {
          font-size: 0.75rem;
          background: #dbeafe;
          color: #1e40af;
          padding: 2px 8px;
          border-radius: 20px;
          font-weight: bold;
        }
        .news-date {
          font-size: 0.75rem;
          color: #9ca3af;
        }
        .news-title {
          font-size: 1rem;
          font-weight: bold;
          color: #1e40af;
          text-decoration: none;
          line-height: 1.4;
        }
        .news-title:hover {
          text-decoration: underline;
        }
        .news-description {
          font-size: 0.85rem;
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }
        .news-read-more {
          font-size: 0.85rem;
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
          margin-top: 4px;
        }
        .news-locked-box {
          margin-top: 30px;
          background-color: #eff6ff;
          padding: 16px 24px;
          border: 1px dashed #1e40af;
          border-radius: 10px;
          font-size: 1rem;
          color: #1e3a8a;
          text-align: center;
        }

        /* ✅ MOBILE STYLES */
        @media (max-width: 600px) {
          .news-heading {
            font-size: 1.4rem;
          }
          .news-subheading {
            font-size: 0.82rem;
          }
          .news-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .news-card-body {
            padding: 14px;
          }
          .news-title {
            font-size: 0.95rem;
          }
          .news-description {
            font-size: 0.8rem;
          }
          .news-locked-box {
            font-size: 0.9rem;
            padding: 12px 16px;
          }
        }

        /* ✅ TABLET STYLES */
        @media (min-width: 601px) and (max-width: 900px) {
          .news-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .news-heading {
            font-size: 1.7rem;
          }
        }
      `}</style>

      <section className="news-section">
        <div className="news-container">
          <h2 className="news-heading">🚀 Latest Tech News</h2>
          <p className="news-subheading">Stay updated with the latest in technology</p>

          {loading ? (
            <p className="news-status">🔄 Loading tech news...</p>
          ) : (
            <div className="news-grid">
              {visibleArticles.map((article, idx) => (
                <div key={idx} className="news-card">
                  <div className="news-card-body">
                    <div className="news-card-top">
                      <span className="news-source">{article.source?.name || 'Tech News'}</span>
                      <span className="news-date">{formatDate(article.publishedAt)}</span>
                    </div>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="news-title"
                    >
                      {article.title}
                    </a>
                    <p className="news-description">
                      {article.description?.replace(/<[^>]+>/g, '').slice(0, 120)}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="news-read-more"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isAuthenticated && !loading && (
            <div className="news-locked-box">
              🔒 <strong>Login to see all tech news articles.</strong>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default News;































// ---------------------------------------2nd version online-------------------------------------------------------






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { supabase } from "../supabaseClient";

// const News = () => {
//   const [jobs, setJobs] = useState([]);
//   const [session, setSession] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const init = async () => {
//       // 🔐 Get Supabase session
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       setSession(session);

//       // 🔎 Fetch jobs (public API)
//       try {
//         const options = {
//           method: "GET",
//           url: "https://jsearch.p.rapidapi.com/search",
//           params: {
//             query: "internship OR fresher jobs",
//             page: "1",
//             num_pages: "1",
//           },
//           headers: {
//             "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
//           },
//         };

//         const res = await axios.request(options);
//         setJobs(res.data.data || []);
//       } catch (err) {
//         console.error("Job fetch failed:", err);
//         setError("Failed to load job listings");
//       }

//       setLoading(false);
//     };

//     init();
//   }, []);

//   // 🔐 Supabase-based lock
//   const visibleJobs = session ? jobs : jobs.slice(0, 3);

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>💼 Latest Job & Internship Listings</h2>

//         {loading ? (
//           <p style={styles.status}>🔄 Loading job news...</p>
//         ) : error ? (
//           <p style={styles.error}>{error}</p>
//         ) : (
//           <ul style={styles.list}>
//             {visibleJobs.length > 0 ? (
//               visibleJobs.map((job, idx) => (
//                 <li key={idx} style={styles.listItem}>
//                   <a
//                     href={job.job_google_link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={styles.link}
//                   >
//                     🔗 {job.job_title} at {job.employer_name}
//                   </a>
//                 </li>
//               ))
//             ) : (
//               <li style={styles.listItem}>🚫 No job listings found.</li>
//             )}
//           </ul>
//         )}

//         {!session && !loading && !error && (
//           <div style={styles.lockedBox}>
//             🔒 <strong>Login to see full alumni job board</strong>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "40px 20px",
//   },
//   container: {
//     textAlign: "center",
//     maxWidth: "700px",
//   },
//   heading: {
//     fontSize: "2rem",
//     color: "#ad1457",
//     marginBottom: "25px",
//   },
//   status: {
//     fontSize: "1.1rem",
//     color: "#777",
//     marginBottom: "20px",
//   },
//   error: {
//     fontSize: "1.1rem",
//     color: "red",
//     marginBottom: "20px",
//     fontWeight: "bold",
//   },
//   list: {
//     listStyle: "none",
//     padding: 0,
//   },
//   listItem: {
//     fontSize: "1.1rem",
//     color: "#333",
//     marginBottom: "15px",
//     lineHeight: "1.6",
//     background: "#ffffffdd",
//     padding: "12px 20px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//   },
//   link: {
//     textDecoration: "none",
//     color: "#0077cc",
//     fontWeight: "bold",
//   },
//   lockedBox: {
//     marginTop: "25px",
//     backgroundColor: "#fff0f5",
//     padding: "16px 24px",
//     border: "1px dashed #ad1457",
//     borderRadius: "10px",
//     fontSize: "1rem",
//     color: "#880e4f",
//   },
// };

// export default News;














// --------------2------------------

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';

// const News = () => {
//   const { isAuthenticated } = useAuth(); // ✅ Check if user is logged in
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const options = {
//           method: 'GET',
//           url: 'https://jsearch.p.rapidapi.com/search',
//           params: {
//             query: 'internship OR fresher jobs',
//             page: '1',
//             num_pages: '1'
//           },
//           headers: {
//             'X-RapidAPI-Key': 'ec18f5d303msh80d3aa10778cbb0p18a129jsn642fec00ac67',
//             'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//           }
//         };

//         const res = await axios.request(options);
//         setJobs(res.data.data || []);
//         setLoading(false);
//       } catch (err) {
//         console.error('Failed to fetch job news:', err);
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   // 🔐 Show all jobs if logged in, otherwise limit to 3
//   const visibleJobs = isAuthenticated ? jobs : jobs.slice(0, 3);

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>💼 Latest Job & Internship Listings</h2>
//         <ul style={styles.list}>
//           {loading ? (
//             <li style={styles.listItem}>🔄 Loading job news...</li>
//           ) : visibleJobs.length > 0 ? (
//             visibleJobs.map((job, idx) => (
//               <li key={idx} style={styles.listItem}>
//                 <a
//                   href={job.job_google_link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={styles.link}
//                 >
//                   🔗 {job.job_title} at {job.employer_name}
//                 </a>
//               </li>
//             ))
//           ) : (
//             <li style={styles.listItem}>🚫 No job listings found.</li>
//           )}
//         </ul>

//         {!isAuthenticated && (
//           <div style={styles.lockedBox}>
//             🔒 <strong>Login to see more job opportunities.</strong>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
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
//     color: '#ad1457',
//     marginBottom: '25px',
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   listItem: {
//     fontSize: '1.1rem',
//     color: '#333',
//     marginBottom: '15px',
//     lineHeight: '1.6',
//     background: '#ffffffdd',
//     padding: '12px 20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#0077cc',
//     fontWeight: 'bold',
//   },
//   lockedBox: {
//     marginTop: '25px',
//     backgroundColor: '#fff0f5',
//     padding: '16px 24px',
//     border: '1px dashed #ad1457',
//     borderRadius: '10px',
//     fontSize: '1rem',
//     color: '#880e4f',
//   },
// };

// export default News;










//  --------------3----------------

// import React from 'react';

// const News = () => {
//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>📢 Latest Job Market News</h2>
//         <ul style={styles.list}>
//           <li style={styles.listItem}>📈 <strong>TCS</strong> plans to hire 40,000 freshers this year.</li>
//           <li style={styles.listItem}>🧠 <strong>AI & Data Science</strong> jobs are in high demand.</li>
//           <li style={styles.listItem}>💼 <strong>LinkedIn</strong> releases Top Companies 2025 list.</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
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
//     color: '#ad1457',
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
//     background: '#ffffffdd',
//     padding: '12px 20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
// };

// export default News;
