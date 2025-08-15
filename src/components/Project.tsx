import React from "react";
import Image from "next/image";

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
        <Image
          src={gallery[0]}
          alt={`${title} - Main Image`}
          className="project-image"
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, 50vw"
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
