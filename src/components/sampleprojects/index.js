import React, { useState, useEffect } from 'react';
import './index.css';
import youtube from "../images/youtube.png";
import spotify from "../images/spotify.png";
import Transpict from '../Transpict';
import axios from 'axios';

const SampleProjects = () => {
    const [projects, setProjects] = useState([]);
    const [showTranspict, setShowTranspict] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('https://lama-backend-o2dz.onrender.com/projects');
            setProjects(response.data);
        };

        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`https://lama-backend-o2dz.onrender.com/${id}`);
        setProjects(projects.filter(project => project._id !== id));
    };

    const handleEditClick = () => {
        setShowTranspict(false)
    };

    return (
        <>
            {showTranspict ? (
                <div className="upload-container">
                    <h1>Sample Project</h1>
                    <div className="upload-options">
                        <button className="upload-button youtube"><img className='youtubeimg' src={youtube} alt="youtube" />Upload Youtube Video</button>
                        <button className="upload-button spotify"><img className='youtubeimg' src={spotify} alt="youtube" />Upload Spotify Podcast</button>
                        <button className="upload-button media">Upload Media or Text File</button>
                    </div>
                    <div className="notification-banner">
                        <p>All files are processed! Your widget is ready to go!</p>
                        <button className="try-it-button">Try it out!</button>
                    </div>
                    <table className="uploads-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Upload Date & Time</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project._id}>
                                    <td>{project.name}</td>
                                    <td>{project.dateTime}</td>
                                    <td>{project.status}</td>
                                    <td className='editdelete'>
                                        <button onClick={handleEditClick} className="edit-button">Edit</button>
                                        <button onClick={() => handleDelete(project._id)} className="delete-button">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* {showTranspict && <Transpict />}  */}
                </div>
            ) : (
                <>
                    <Transpict />
                </>
            )}
        </>
    );
};

export default SampleProjects;
