import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Import the CSS file for styling
import image from "../assets/image.png";
import plus from "../assets/plus.png";
import Header from '../navbar';

const CreateProject = () => {
    return (
        <>
        <Header />
            <div className="create-project">
                <div className="content">
                    <h1 className='titlemainheading'>Create a New Project</h1>
                    <img src={image} alt="Project" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <Link className='link' to="/projectcreation">
                        <button className="create-button">
                            <img className='plusbuttonn' src={plus} alt="plus" />
                            Create New Project
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CreateProject;
