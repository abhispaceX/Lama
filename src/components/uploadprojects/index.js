import React, { useState } from 'react';
import './index.css';
import youtube from "../images/youtube.png";
import spotify from "../images/spotify.png";
import rss from "../images/rss.png";
import cloud from "../images/cloud.png";
import NewprojectsLinksupload from '../uploadnewprojectlinks';

const Upload = ({ setShowContent }) => {
    const [modal, setModal] = useState(false);

    const onButtonClick = () => {
        setModal(true);
    };

    return (
        <div className="upload-container">
            <h1>Upload</h1>
            <div className="upload-options">
                <button onClick={onButtonClick} className="upload-button youtube">
                    <img className='youtubeimg' src={youtube} alt="youtube" />Upload Youtube Video
                </button>
                <button onClick={onButtonClick} className="upload-button spotify">
                    <img className='youtubeimg' src={spotify} alt="spotify" />Upload Spotify Podcast
                </button>
                <button onClick={onButtonClick} className="upload-button rss">
                    <img className='youtubeimg' src={rss} alt="rss" />Upload from RSS Feed
                </button>
                <button onClick={onButtonClick} className="upload-button youtube">
                    <img className='youtubeimg' src={youtube} alt="youtube" />Upload Youtube Video
                </button>
                <button onClick={onButtonClick} className="upload-button spotify">
                    <img className='youtubeimg' src={spotify} alt="spotify" />Upload Spotify Podcast
                </button>
                <button onClick={onButtonClick} className="upload-button rss">
                    <img className='youtubeimg' src={rss} alt="rss" />Upload from RSS Feed
                </button>
            </div>
            <div className="upload-file-section">
                <img className='youtubeimg' src={cloud} alt="cloud" />
                <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>

                <div className='uploadcontainer'>
                    <label className='labelupload' htmlFor="filePicker" style={{ background: "blue", color: "#ffffff", borderRadius: "10px", padding: "15px 20px" }}>
                        Upload File
                    </label>
                    <input id="filePicker" style={{ visibility: "hidden" }} type="file" />
                </div>
            </div>
            {modal && (
                <NewprojectsLinksupload setShowContent={setShowContent} setModal={setModal} />
            )}
        </div>
    );
};

export default Upload;
