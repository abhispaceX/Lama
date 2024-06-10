// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Import the CSS file for styling
import setting from "../assets/setting.png";
import notification from "../assets/notification.png";



const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.4727 46.8739L29.8109 43.043C27.6752 41.9862 25.1873 41.9862 23.0517 43.043L15.3678 46.8739C8.80679 50.1544 1.87148 43.087 5.3061 36.592L7.11149 33.2014C7.35367 32.7171 7.74998 32.3428 8.23435 32.1446L36.0857 19.617C37.2306 19.1106 38.5736 19.573 39.146 20.6738L47.5344 36.614C50.9691 43.087 44.0338 50.1544 37.4727 46.8739Z" fill="#7E22CE" />
                        <path opacity="0.4" d="M34.3463 16.9309L16.1163 25.1432C14.0688 26.0679 11.9992 23.8662 13.056 21.8847L19.7491 9.181C22.5893 3.78687 30.2952 3.78687 33.1354 9.181L35.4912 13.6724C36.1076 14.8834 35.6013 16.3585 34.3463 16.9309Z" fill="#7E22CE" />
                    </svg>

                    <span>LAMA</span>
                </div>

                <div className="icons">
                <img className='settingss' src={setting} alt="settings" />

                <img className='notificationss' src={notification} alt="notifications" />

                </div>
            </div>
            <Link className='link' to="/">
            <button className="back-button">
                <svg className='homeicon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0613 8.18399L21.1252 13.6415V23.1132H18.6996V15.8366H11.423V23.1132H8.99746V13.6415L15.0613 8.18399ZM15.0613 4.92163L2.93359 15.8366H6.57191V25.5388H13.8486V18.2621H16.2741V25.5388H23.5507V15.8366H27.1891L15.0613 4.92163Z" fill="#3C3C3C" />
                </svg>

                Back to Home
            </button>
            </Link>
        </>
    );
};

export default Header;
