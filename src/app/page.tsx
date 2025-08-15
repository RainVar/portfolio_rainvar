import React from "react";

export default function About() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh", color: "#333" }}>
      {/* Title Section */}
      <section style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "3rem 2rem 0 2rem",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontSize: "3rem", 
          fontWeight: 700, 
          color: "#333",
          marginBottom: "0",
          letterSpacing: "0.05em"
        }}>
          Abangan, Jaerian Peter M.
        </h1>
      </section>

      {/* Hero Section */}
      <section style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "6rem 2rem 4rem 2rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center"
      }}>
          <div>
            <h2 style={{ 
              fontSize: "3rem", 
              fontWeight: 700, 
              marginBottom: "1.5rem",
              color: "#333",
              lineHeight: 1.2
            }}>
              Full-stack web and mobile app developer.
            </h2>
            <p style={{ 
              fontSize: "1.1rem", 
              lineHeight: 1.6, 
              marginBottom: "2rem",
              color: "#666"
            }}>
              From a young age, I enjoyed building custom game levels—an early sign of my passion for creating and
              coding. Today, I channel that same creativity and logic into developing clean, user-focused applications
              and solving real-world problems using my new and strong foundation in algorithms, data structures, and
              full-stack development.
            </p>
            
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
              <a href="#" style={{ color: "#666", fontSize: "1.5rem" }}>🐦</a>
              <a href="#" style={{ color: "#666", fontSize: "1.5rem" }}>💼</a>
              <a href="#" style={{ color: "#666", fontSize: "1.5rem" }}>📚</a>
              <a href="#" style={{ color: "#666", fontSize: "1.5rem" }}>📷</a>
              <a href="#" style={{ color: "#666", fontSize: "1.5rem" }}>💻</a>
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: "400px",
              height: "400px",
              backgroundColor: "#f0f0f0",
              borderRadius: "1rem",
              overflow: "hidden",
              position: "relative"
            }}>
              <img
                src="/profile.jpg"
                alt="Peter Abangan"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section style={{ 
          backgroundColor: "#f8f9fa",
          padding: "4rem 2rem"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ 
              fontSize: "3rem", 
              fontWeight: 700, 
              marginBottom: "1rem",
              color: "#333"
            }}>
              Featured Projects
            </h2>
            <p style={{ 
              fontSize: "1.1rem", 
              color: "#666", 
              marginBottom: "3rem",
              maxWidth: "600px",
              margin: "0 auto 3rem auto"
            }}>
              Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.
            </p>
            
            {/* Projects Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "2rem",
              marginTop: "2rem"
            }}>
              <div style={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "left"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", color: "#333" }}>
                  Project One
                </h3>
                <p style={{ color: "#666", marginBottom: "1rem" }}>
                  A comprehensive web application built with React and Node.js, featuring real-time data processing and user authentication.
                </p>
                <a href="#" style={{ 
                  color: "#1e3a8a", 
                  textDecoration: "none", 
                  fontWeight: 500
                }}>
                  View Project →
                </a>
              </div>
              
              <div style={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "left"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", color: "#333" }}>
                  Project Two
                </h3>
                <p style={{ color: "#666", marginBottom: "1rem" }}>
                  A mobile application developed with React Native, providing seamless cross-platform experience with offline capabilities.
                </p>
                <a href="#" style={{ 
                  color: "#1e3a8a", 
                  textDecoration: "none", 
                  fontWeight: 500
                }}>
                  View Project →
                </a>
              </div>
              
              <div style={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "left"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", color: "#333" }}>
                  Project Three
                </h3>
                <p style={{ color: "#666", marginBottom: "1rem" }}>
                  An innovative API service built with Express.js and MongoDB, handling millions of requests with optimized performance.
                </p>
                <a href="#" style={{ 
                  color: "#1e3a8a", 
                  textDecoration: "none", 
                  fontWeight: 500
                }}>
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
