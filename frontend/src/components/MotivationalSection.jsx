// import React, { useState, useEffect } from 'react';
// import { Play, Quote } from 'lucide-react';

// const MotivationalSection = () => {
//   const [quote, setQuote] = useState({
//     text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
//     author: "Winston Churchill"
//   });
//   const [loading, setLoading] = useState(true);

//   // Fetch motivational quote from API
//   useEffect(() => {
//     fetchQuote();
//   }, []);

//   const fetchQuote = async () => {
//     try {
//       const response = await fetch('https://api.quotable.io/random?tags=inspirational,success,motivational');
//       const data = await response.json();
//       setQuote({
//         text: data.content,
//         author: data.author
//       });
//     } catch (error) {
//       console.error('Error fetching quote:', error);
//       // Keep default quote if API fails
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         {/* Title */}
//         <h2 style={styles.title}>✨ Daily Inspiration</h2>
//         <p style={styles.subtitle}>Fuel your journey with motivation and knowledge</p>

//         <div style={styles.content}>
//           {/* Motivational Video */}
//           <div style={styles.videoContainer}>
//             <div style={styles.videoWrapper}>
//               <iframe
//                 style={styles.iframe}
//                 src="https://youtu.be/Hgg7M3kSqyE?si=Wfjk3edPdWWxrDVU"
//                 title="Motivational Video"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//             <div style={styles.videoCaption}>
//               <Play size={16} style={{ marginRight: '8px' }} />
//               <span>The Power of Believing in Yourself</span>
//             </div>
//           </div>

//           {/* Motivational Quote */}
//           <div style={styles.quoteContainer}>
//             <div style={styles.quoteIcon}>
//               <Quote size={40} color="#0d47a1" />
//             </div>
//             {loading ? (
//               <div style={styles.quoteLoading}>Loading inspiration...</div>
//             ) : (
//               <>
//                 <p style={styles.quoteText}>"{quote.text}"</p>
//                 <p style={styles.quoteAuthor}>— {quote.author}</p>
//               </>
//             )}
//             <button onClick={fetchQuote} style={styles.refreshButton}>
//               🔄 Get New Quote
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: '80px 20px 60px',
//     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     minHeight: '70vh',
//     display: 'flex',
//     alignItems: 'center',
//     marginTop: '80px',
//   },
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     width: '100%',
//   },
//   title: {
//     fontSize: '2.5rem',
//     fontWeight: 'bold',
//     color: '#ffffff',
//     textAlign: 'center',
//     marginBottom: '10px',
//   },
//   subtitle: {
//     fontSize: '1.1rem',
//     color: 'rgba(255, 255, 255, 0.9)',
//     textAlign: 'center',
//     marginBottom: '50px',
//   },
//   content: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
//     gap: '40px',
//     alignItems: 'start',
//   },
//   videoContainer: {
//     backgroundColor: '#ffffff',
//     borderRadius: '16px',
//     padding: '20px',
//     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
//   },
//   videoWrapper: {
//     position: 'relative',
//     paddingBottom: '56.25%', // 16:9 aspect ratio
//     height: 0,
//     overflow: 'hidden',
//     borderRadius: '12px',
//     marginBottom: '15px',
//   },
//   iframe: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     border: 'none',
//   },
//   videoCaption: {
//     display: 'flex',
//     alignItems: 'center',
//     color: '#333',
//     fontSize: '0.95rem',
//     fontWeight: '500',
//   },
//   quoteContainer: {
//     backgroundColor: '#ffffff',
//     borderRadius: '16px',
//     padding: '40px',
//     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
//     position: 'relative',
//     minHeight: '300px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   quoteIcon: {
//     position: 'absolute',
//     top: '20px',
//     left: '20px',
//     opacity: 0.1,
//   },
//   quoteText: {
//     fontSize: '1.3rem',
//     lineHeight: '1.8',
//     color: '#333',
//     fontStyle: 'italic',
//     marginBottom: '20px',
//     position: 'relative',
//     zIndex: 1,
//   },
//   quoteAuthor: {
//     fontSize: '1rem',
//     color: '#0d47a1',
//     fontWeight: 'bold',
//     textAlign: 'right',
//     marginBottom: '20px',
//   },
//   quoteLoading: {
//     fontSize: '1.1rem',
//     color: '#666',
//     textAlign: 'center',
//     padding: '40px 0',
//   },
//   refreshButton: {
//     alignSelf: 'center',
//     padding: '10px 20px',
//     backgroundColor: '#0d47a1',
//     color: '#ffffff',
//     border: 'none',
//     borderRadius: '8px',
//     fontSize: '0.9rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     marginTop: 'auto',
//   },
// };

// // Add media query for mobile responsiveness
// const mediaQuery = window.matchMedia('(max-width: 768px)');
// if (mediaQuery.matches) {
//   styles.content.gridTemplateColumns = '1fr';
//   styles.title.fontSize = '2rem';
//   styles.quoteText.fontSize = '1.1rem';
// }

// export default MotivationalSection;















// -------------------------------------------------------------------------------------------------------
















import React, { useState, useEffect } from 'react';

const MotivationalSection = () => {
  const [quote, setQuote] = useState({
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  });
  const [loading, setLoading] = useState(true);

  // Fetch motivational quote from API
  useEffect(() => {
    fetchQuote();
    // Auto-refresh quote every 15 seconds
    const interval = setInterval(() => {
      fetchQuote();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.quotable.io/random?tags=inspirational,success,motivational');
      const data = await response.json();
      setQuote({
        text: data.content,
        author: data.author
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
      // Keep default quote if API fails
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="motivational-section">
      {/* Background Video */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          {/* Replace this URL with your own video */}
          <source
            src="https://youtu.be/Hgg7M3kSqyE?si=Wfjk3edPdWWxrDVU.mp4"
            type="video/mp4"
          />
          {/* Fallback for older browsers */}
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="video-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="content-container">
        <div className="quote-wrapper">
          {/* Section Title */}
          <div className="section-header">
            <h2 className="section-title">Daily Inspiration</h2>
            <div className="title-underline"></div>
          </div>

          {/* Quote Card */}
          <div className="quote-card">
            {loading ? (
              <div className="quote-loading">
                <div className="spinner"></div>
                <p>Loading inspiration...</p>
              </div>
            ) : (
              <>
                <div className="quote-icon">"</div>
                <p className="quote-text">{quote.text}</p>
                <p className="quote-author">— {quote.author}</p>
              </>
            )}
          </div>

          {/* Refresh Button */}
          <button onClick={fetchQuote} className="refresh-button" disabled={loading}>
            <svg 
              className={`refresh-icon ${loading ? 'spinning' : ''}`}
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
            </svg>
            Get New Quote
          </button>
        </div>
      </div>

      <style jsx>{`
        .motivational-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Video Background */
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .background-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(102, 126, 234, 0.4) 50%,
            rgba(118, 75, 162, 0.5) 100%
          );
          backdrop-filter: blur(2px);
        }

        /* Content */
        .content-container {
          position: relative;
          z-index: 1;
          max-width: 900px;
          width: 90%;
          padding: 40px 20px;
        }

        .quote-wrapper {
          animation: fadeInUp 1s ease-out;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 15px 0;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          letter-spacing: 1px;
        }

        .title-underline {
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* Quote Card */
        .quote-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 60px 50px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .quote-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
        }

        .quote-icon {
          position: absolute;
          top: 30px;
          left: 30px;
          font-size: 120px;
          color: rgba(102, 126, 234, 0.15);
          font-family: Georgia, serif;
          line-height: 1;
        }

        .quote-text {
          font-size: 1.75rem;
          line-height: 1.8;
          color: #2c3e50;
          font-style: italic;
          margin: 0 0 30px 0;
          position: relative;
          z-index: 1;
          font-weight: 400;
          animation: fadeIn 0.8s ease-out;
        }

        .quote-author {
          font-size: 1.25rem;
          color: #667eea;
          font-weight: 600;
          text-align: right;
          margin: 0;
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .quote-loading {
          text-align: center;
          padding: 60px 20px;
          color: #666;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(102, 126, 234, 0.2);
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        /* Refresh Button */
        .refresh-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 30px auto 0;
          padding: 14px 32px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #ffffff;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .refresh-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .refresh-button:active:not(:disabled) {
          transform: translateY(0);
        }

        .refresh-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .refresh-icon {
          transition: transform 0.3s ease;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }

          .quote-card {
            padding: 40px 30px;
          }

          .quote-icon {
            font-size: 80px;
            top: 20px;
            left: 20px;
          }

          .quote-text {
            font-size: 1.3rem;
          }

          .quote-author {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .content-container {
            width: 95%;
            padding: 20px 10px;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-header {
            margin-bottom: 30px;
          }

          .quote-card {
            padding: 30px 20px;
            border-radius: 16px;
          }

          .quote-text {
            font-size: 1.1rem;
          }

          .refresh-button {
            padding: 12px 24px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MotivationalSection;