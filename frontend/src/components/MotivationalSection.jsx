import React, { useState, useEffect } from 'react';
import { Play, Quote } from 'lucide-react';

const MotivationalSection = () => {
  const [quote, setQuote] = useState({
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  });
  const [loading, setLoading] = useState(true);

  // Fetch motivational quote from API
  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
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
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Title */}
        <h2 style={styles.title}>✨ Daily Inspiration</h2>
        <p style={styles.subtitle}>Fuel your journey with motivation and knowledge</p>

        <div style={styles.content}>
          {/* Motivational Video */}
          <div style={styles.videoContainer}>
            <div style={styles.videoWrapper}>
              <iframe
                style={styles.iframe}
                src="https://youtu.be/Hgg7M3kSqyE?si=Wfjk3edPdWWxrDVU"
                title="Motivational Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div style={styles.videoCaption}>
              <Play size={16} style={{ marginRight: '8px' }} />
              <span>The Power of Believing in Yourself</span>
            </div>
          </div>

          {/* Motivational Quote */}
          <div style={styles.quoteContainer}>
            <div style={styles.quoteIcon}>
              <Quote size={40} color="#0d47a1" />
            </div>
            {loading ? (
              <div style={styles.quoteLoading}>Loading inspiration...</div>
            ) : (
              <>
                <p style={styles.quoteText}>"{quote.text}"</p>
                <p style={styles.quoteAuthor}>— {quote.author}</p>
              </>
            )}
            <button onClick={fetchQuote} style={styles.refreshButton}>
              🔄 Get New Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 20px 60px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    marginTop: '80px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: '50px',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '40px',
    alignItems: 'start',
  },
  videoContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
    overflow: 'hidden',
    borderRadius: '12px',
    marginBottom: '15px',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },
  videoCaption: {
    display: 'flex',
    alignItems: 'center',
    color: '#333',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
  quoteContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  quoteIcon: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    opacity: 0.1,
  },
  quoteText: {
    fontSize: '1.3rem',
    lineHeight: '1.8',
    color: '#333',
    fontStyle: 'italic',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 1,
  },
  quoteAuthor: {
    fontSize: '1rem',
    color: '#0d47a1',
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: '20px',
  },
  quoteLoading: {
    fontSize: '1.1rem',
    color: '#666',
    textAlign: 'center',
    padding: '40px 0',
  },
  refreshButton: {
    alignSelf: 'center',
    padding: '10px 20px',
    backgroundColor: '#0d47a1',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: 'auto',
  },
};

// Add media query for mobile responsiveness
const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
  styles.content.gridTemplateColumns = '1fr';
  styles.title.fontSize = '2rem';
  styles.quoteText.fontSize = '1.1rem';
}

export default MotivationalSection;