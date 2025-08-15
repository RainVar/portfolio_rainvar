"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      background: "#1e3a8a",
      padding: "1rem 2rem",
      boxShadow: "0 2px 8px rgba(30,58,138,0.1)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Link href="/" style={{
          color: "#fff",
          fontSize: "1.5rem",
          fontWeight: 700,
          textDecoration: "none"
        }}>
          Peter Abangan
        </Link>
        <div style={{
          display: "flex",
          gap: "2rem"
        }}>
          <Link href="/" style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            transition: "background-color 0.2s"
          }}
          onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)"}
          onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = "transparent"}
          >
            About
          </Link>
          <Link href="/projects" style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            transition: "background-color 0.2s"
          }}
          onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)"}
          onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = "transparent"}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
