import React from "react";
import Project from "../components/Project";

export default function About() {
  const projects = [
    {
      gallery: [
        "https://placehold.co/400x200/2563eb/fff?text=E-Commerce+Dashboard",
        "https://placehold.co/400x200/1e40af/fff?text=Product+Management"
      ],
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Web Application",
      description: "A comprehensive e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time order tracking."
    },
    {
      gallery: [
        "https://placehold.co/400x200/059669/fff?text=Mobile+Banking",
        "https://placehold.co/400x200/047857/fff?text=Transaction+History"
      ],
      title: "FinTech Mobile App",
      subtitle: "React Native Application",
      description: "A secure mobile banking application with biometric authentication, real-time transactions, budget tracking, and cryptocurrency integration. Built using React Native and Firebase."
    },
    {
      gallery: [
        "https://placehold.co/400x200/dc2626/fff?text=Real-Time+Chat",
        "https://placehold.co/400x200/b91c1c/fff?text=Video+Calls"
      ],
      title: "Communication Platform",
      subtitle: "WebRTC & Socket.IO",
      description: "A real-time communication platform featuring instant messaging, video calls, screen sharing, and file transfers. Implemented using WebRTC, Socket.IO, and Express.js backend."
    },
    {
      gallery: [
        "https://placehold.co/400x200/7c3aed/fff?text=AI+Dashboard",
        "https://placehold.co/400x200/6d28d9/fff?text=Analytics+View"
      ],
      title: "AI Analytics Dashboard",
      subtitle: "Machine Learning & Data Visualization",
      description: "An intelligent analytics dashboard that processes large datasets using Python and TensorFlow. Features predictive models, interactive charts, and automated reporting capabilities."
    }
  ];

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
            {projects.map((project, index) => (
              <Project
                key={index}
                gallery={project.gallery}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
