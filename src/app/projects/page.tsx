import React from "react";

const projects = [
  {
    title: "Project One",
    description: "A brief description of project one.",
    link: "#"
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh", color: "#1e3a8a", padding: "2rem" }}>
      <section style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "2rem" }}>Projects</h1>
        <div style={{ display: "grid", gap: "2rem" }}>
          {projects.map((project, idx) => (
            <a key={idx} href={project.link} style={{
              display: "block",
              padding: "1.5rem",
              borderRadius: "1rem",
              background: "#e0e7ff",
              color: "#1e3a8a",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(30,58,138,0.08)"
            }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 600 }}>{project.title}</h2>
              <p style={{ marginTop: "0.5rem" }}>{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
