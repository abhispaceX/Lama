import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Header from '../navbar';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('http://localhost:5000/newprojects');
            setProjects(response.data);
        };

        fetchProjects();
    }, []);

    return (
        <div className="App">
            <Header />
            <header>
                <h1 className='projectTitle'>Projects</h1>
                <Link to="/projectnewcreation">
                    <button className="create-project-button">+ Create New Project</button>
                </Link>
            </header>
            <div className="projects-container">
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
};

function ProjectCard({ project }) {
    return (
        <Link className='projectlinkssidebar' to="/sidebar">
            <div className={`project-card ${project.color}`}>
            <div className={`project-initials ${project.color}`}>
                    {project.name[0]}
                </div>
                <div className="project-details">
                    <h2 className='projectname'>{project.name}</h2>
                    <p className='episodes'>{project.episodes} Episodes</p>
                    <p className='lastedited'>Last edited {project.lastEdited}</p>
                </div>
            </div>
        </Link>
    );
}

export default Projects;
