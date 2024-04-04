import React from 'react';

// Example project data
const projects = [
  {
    title: 'Project 1',
    description: 'This is a brief description of Project 1. It showcases my skills in...',
    demoLink: 'http://example.com/demo1',
    codeLink: 'http://github.com/exampleProject1',
  },
  {
    title: 'Project 2',
    description: 'This is a brief description of Project 2. The focus of this project was...',
    demoLink: 'http://example.com/demo2',
    codeLink: 'http://github.com/exampleProject2',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <br />
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
