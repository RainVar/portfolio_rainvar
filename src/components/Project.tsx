import React from "react";

interface ProjectProps {
  gallery: string[];
  title: string;
  subtitle: string;
  description: string;
}

export default function Project({ gallery, title, subtitle, description }: ProjectProps) {
  return (
    <div className="project-card">
      {/* Gallery */}
      <div className="project-gallery">
        <img
          src={gallery[0]}
          alt={`${title} - Main Image`}
          className="project-image"
        />
      </div>
      
      {/* Content */}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <h4 className="project-subtitle">{subtitle}</h4>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}
