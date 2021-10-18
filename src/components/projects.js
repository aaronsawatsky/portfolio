import React from 'react';
import { projects } from './data';

export default function Projects() {
    return (
        <section id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h1>Projects</h1>
                </div>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <a href={project.link} target="_blank">
                            <div className="project">
                                <div className="project-title">
                                    <h3>{project.title}</h3>
                                </div>
                            <div className="project-img">
                                <img src={project.image} alt="" className="project-image" />
                            </div>
                            <div className="languages">
                                <p>{project.languages}</p>
                            </div>
                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>
                            </div>
                        </a>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}