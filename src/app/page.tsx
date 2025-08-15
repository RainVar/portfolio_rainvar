import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#fff", minHeight: "100vh", color: "#1e3a8a", padding: "2rem" }}>
        <section style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <img
            src="/profile.jpg"
            alt="Profile Placeholder"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "1.5rem",
              boxShadow: "0 2px 8px rgba(30,58,138,0.08)"
            }}
          />
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>About Me</h1>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Hi, I'm Peter Abangan. I'm passionate about building impactful digital experiences and sharing my journey as a developer. Welcome to my minimalist portfolio!
          </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <img src="https://placehold.co/100x100/2563eb/fff?text=Skill+1" alt="Skill 1" style={{ borderRadius: "1rem" }} />
          <img src="https://placehold.co/100x100/2563eb/fff?text=Skill+2" alt="Skill 2" style={{ borderRadius: "1rem" }} />
          <img src="https://placehold.co/100x100/2563eb/fff?text=Skill+3" alt="Skill 3" style={{ borderRadius: "1rem" }} />
        </div>
      </section>
    </main>
    </>
  );
}
