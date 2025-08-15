import React from "react";

export default function About() {
  return (
    <main className="main">
      {/* Title Section */}
      <section className="container title-section">
        <h1 className="title">
          Abangan, Jaerian Peter M.
        </h1>
      </section>

      {/* Hero Section */}
      <section className="container hero-section">
        <div className="hero-content">
          <h2>
            Full-stack web and mobile app developer.
          </h2>
          <p>
            From a young age, I enjoyed building custom game levels—an early sign of my passion for creating and
            coding. Today, I channel that same creativity and logic into developing clean, user-focused applications
            and solving real-world problems using my new and strong foundation in algorithms, data structures, and
            full-stack development.
          </p>
          
          {/* Social Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">💼</a>
            <a href="#" className="social-icon">📚</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">💻</a>
          </div>
        </div>
        
        <div className="profile-container">
          <div className="profile-box">
            <img
              src="/profile.jpg"
              alt="Peter Abangan"
              className="profile-image"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-section">
        <div className="container projects-container">
          <h2 className="projects-title">
            Featured Projects
          </h2>
          <p className="projects-description">
            Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.
          </p>
          
          {/* Projects Grid */}
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-title">
                Project One
              </h3>
              <p className="project-description">
                A comprehensive web application built with React and Node.js, featuring real-time data processing and user authentication.
              </p>
              <a href="#" className="project-link">
                View Project →
              </a>
            </div>
            
            <div className="project-card">
              <h3 className="project-title">
                Project Two
              </h3>
              <p className="project-description">
                A mobile application developed with React Native, providing seamless cross-platform experience with offline capabilities.
              </p>
              <a href="#" className="project-link">
                View Project →
              </a>
            </div>
            
            <div className="project-card">
              <h3 className="project-title">
                Project Three
              </h3>
              <p className="project-description">
                An innovative API service built with Express.js and MongoDB, handling millions of requests with optimized performance.
              </p>
              <a href="#" className="project-link">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
