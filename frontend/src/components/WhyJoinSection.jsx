import React from 'react';
import { Users, Briefcase, BookOpen, Network, Award, TrendingUp } from 'lucide-react';

const WhyJoinSection = () => {
  const benefits = [
    {
      icon: <Network size={40} />,
      title: "Professional Network",
      description: "Connect with thousands of alumni across industries and build meaningful professional relationships.",
      color: "#0d47a1"
    },
    {
      icon: <Briefcase size={40} />,
      title: "Career Opportunities",
      description: "Access exclusive job postings, internships, and career guidance from industry leaders.",
      color: "#00796b"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Mentorship Programs",
      description: "Get mentored by experienced alumni or mentor current students and give back to the community.",
      color: "#c62828"
    },
    {
      icon: <Users size={40} />,
      title: "Community Events",
      description: "Participate in alumni meetups, networking events, and exclusive workshops throughout the year.",
      color: "#6a1b9a"
    },
    {
      icon: <Award size={40} />,
      title: "Alumni Sessions",
      description: "Learn from success stories and gain insights through interactive sessions with accomplished alumni.",
      color: "#ef6c00"
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Continuous Growth",
      description: "Stay updated with industry trends, skill development resources, and lifelong learning opportunities.",
      color: "#2e7d32"
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>🌟 Why Join Our Alumni Network?</h2>
          <p style={styles.subtitle}>
            Be part of a vibrant community that supports your growth at every stage of your career
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                ...styles.benefitCard,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div style={{
                ...styles.iconContainer,
                backgroundColor: `${benefit.color}15`
              }}>
                <div style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
              </div>
              <h3 style={styles.benefitTitle}>{benefit.title}</h3>
              <p style={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={styles.ctaContainer}>
          <div style={styles.ctaContent}>
            <h3 style={styles.ctaTitle}>Ready to Make an Impact?</h3>
            <p style={styles.ctaText}>
              Join our thriving alumni community and unlock endless opportunities for growth, 
              connection, and success. Together, we're stronger!
            </p>
            <div style={styles.ctaButtons}>
              <button style={styles.primaryButton}>
                Update Your Profile
              </button>
              <button style={styles.secondaryButton}>
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>10,000+</div>
            <div style={styles.statLabel}>Active Alumni</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>500+</div>
            <div style={styles.statLabel}>Companies</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Countries</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>1,000+</div>
            <div style={styles.statLabel}>Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#0d47a1',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    marginBottom: '60px',
  },
  benefitCard: {
    backgroundColor: '#f8f9fa',
    padding: '35px 25px',
    borderRadius: '16px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '2px solid transparent',
    animation: 'fadeInUp 0.6s ease forwards',
    opacity: 0,
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
  },
  benefitTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '12px',
  },
  benefitDescription: {
    fontSize: '0.95rem',
    color: '#666',
    lineHeight: '1.6',
  },
  ctaContainer: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    padding: '50px 40px',
    marginBottom: '60px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  },
  ctaContent: {
    textAlign: 'center',
    color: '#ffffff',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  ctaText: {
    fontSize: '1.1rem',
    marginBottom: '30px',
    opacity: 0.95,
    maxWidth: '700px',
    margin: '0 auto 30px',
    lineHeight: '1.7',
  },
  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '15px 35px',
    fontSize: '1rem',
    fontWeight: '600',
    backgroundColor: '#ffffff',
    color: '#667eea',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
  },
  secondaryButton: {
    padding: '15px 35px',
    fontSize: '1rem',
    fontWeight: '600',
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  statCard: {
    textAlign: 'center',
    padding: '20px',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#0d47a1',
    marginBottom: '8px',
  },
  statLabel: {
    fontSize: '1rem',
    color: '#666',
    fontWeight: '500',
  },
};

// Add CSS animations
const styleSheet = document.styleSheets[0];
const keyframes = `
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
`;

try {
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
} catch (e) {
  // Ignore if already exists
}

// Add hover effects
const hoverStyles = `
  .benefit-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    border-color: #0d47a1;
  }
  .primary-button:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
  }
  .secondary-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

try {
  styleSheet.insertRule(hoverStyles, styleSheet.cssRules.length);
} catch (e) {
  // Ignore if already exists
}

export default WhyJoinSection;