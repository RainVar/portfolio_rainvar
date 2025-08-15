import React from "react";
import Image from "next/image";
import Project from "../components/Project";

export default function About() {
  const projects = [
    {
      gallery: [
        "/cafe-inventory.jpg"
      ],
      title: "Café Inventory System",
      subtitle: "Power Platform",
      description: "A low-code inventory system using Power Apps and Power Automate to track stock levels. Serves as the foundation for a future POS application."
    },
    {
      gallery: [
        "/catalog-app.jpg"
      ],
      title: "CaTaLog",
      subtitle: "React Native & Expo",
      description: "A full-stack mobile app using React Native and Expo that allows users to track, search, and organize products with ease."
    },
    {
      gallery: [
        "/task-manager.jpg"
      ],
      title: "Task Manager",
      subtitle: "Express & MongoDB",
      description: "A full-stack web app using Express.js and MongoDB that allows users to manage tasks and assign collaborators. Focused on backend logic."
    },
    {
      gallery: [
        "/dr-owlii.jpg"
      ],
      title: "Dr. Owlii",
      subtitle: "Figma",
      description: "Designed a student productivity app prototype in Figma that combines Pomodoro timer and other student tools. Focused on intuitive mobile UI/UX."
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
        </div>
        
        <div className="profile-container">
          <div className="profile-box">
            <Image
              src="/profile.jpg"
              alt="Peter Abangan"
              className="profile-image"
              width={400}
              height={400}
              priority
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
            Here are some of the projects I&apos;ve worked on recently. Each one represents a unique challenge and learning experience.
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
