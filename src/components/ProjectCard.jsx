//cspell:disable
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{project.title}</h3>
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}
      </div>
      
      <p className="project-description">{project.description}</p>
      
      {project.details && (
        <div className="project-details">
          <h4><i className="fas fa-tasks"></i> Missions & Réalisations</h4>
          <ul>
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
      
      {project.technologies && (
        <div className="technologies">
          <h4><i className="fas fa-code"></i> Technologies</h4>
          <div className="tech-icons">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-item">
                <i className={tech.icon}></i>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {project.impact && (
        <div className="project-impact">
          <p><strong>Impact :</strong> {project.impact}</p>
        </div>
      )}
      
      {project.githubLink && (
        <div className="project-links">
          <a href={project.githubLink} className="btn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Code Source
          </a>
          <button className="btn">
            <i className="fas fa-eye"></i> Voir Demo
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;