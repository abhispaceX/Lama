import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './index.css';
import axios from 'axios';

const NewprojectsLinksupload = ({ setShowContent, setModal }) => {
    const [show, setShow] = useState(true);
    const [projectName, setProjectName] = useState('');
    const [projectLink, setProjectLink] = useState('');
    const [error, setError] = useState('');

    const handleClose = () => {
        setShow(false);
        setModal(false);
    };

    const handleCreate = async () => {
        if (!projectName && !projectLink) {
            setError("Project Name or Link can't be empty");
            return;
        }

        const newProject = {
            name: projectName,
            link: projectLink,
            status: 'Pending',
            dateTime: new Date().toLocaleString(),
        };

        try {
            await axios.post('https://lama-backend-o2dz.onrender.com/projects', newProject);
            alert(`Project "${projectName}" created!`);
            setProjectName('');
            setProjectLink('');
            setError('');
            setShowContent('sampleprojects');
            handleClose();
        } catch (err) {
            setError('Error creating project');
        }
    };

    return (
        <div className='modalview'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Upload From Media</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='projectcreationform'>
                        <label>Name:</label><br /><br />
                        <input
                            className='inputfieldproject'
                            type="text"
                            value={projectName}
                            onChange={(e) => {
                                setProjectName(e.target.value);
                                setError('');
                            }}
                            placeholder="Type here"
                        /><br /><br />
                        <label>Link:</label><br /><br />
                        <input
                            className='inputfieldproject'
                            type="text"
                            value={projectLink}
                            onChange={(e) => {
                                setProjectLink(e.target.value);
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

export default NewprojectsLinksupload;
