import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './index.css';
import axios from 'axios';

const ProjectCreation = () => {
    const [show, setShow] = useState(true);
    const [projectName, setProjectName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        navigate('/projects');
    };

    const handleCreate = async () => {
        if (!projectName) {
            setError("Project Name can't be empty");
            return;
        }
        const randomEpisodes = Math.floor(Math.random() * 10) + 1;
        const colors = ['purple', 'orange', 'blue', 'green', 'red'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const newProject = {
            name: projectName,
            episodes: randomEpisodes, // Assuming new projects start with 0 episodes
            lastEdited: new Date().toLocaleString(),
            color: randomColor, // Default color, can be changed based on your logic
        };

        try {
            const response = await axios.post('http://localhost:5000/newprojects', newProject);
            console.log('Project created:', response.data);
            setProjectName('');
            setError('');
            handleClose();
        } catch (err) {
            console.error('Error creating project:', err);
            setError('Error creating project');
        }
    };

    return (
        <div className='modalview'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Create Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='projectcreationform'>
                        <label>Enter Project Name:</label><br /><br />
                        <input
                            className='inputfieldproject'
                            type="text"
                            value={projectName}
                            onChange={(e) => {
                                setProjectName(e.target.value);
                                setError('');
                            }}
                            placeholder="Type here"
                        />
                    </form>
                    {error && <p className="error">{error}</p>}
                </Modal.Body>
                <Modal.Footer>
                    <button className='cancelbutton' onClick={handleClose}>
                        Cancel
                    </button>
                    <Button variant="primary" onClick={handleCreate}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProjectCreation;
