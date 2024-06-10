import React, { useState } from 'react';
import './Transpict.css';

const Transpict = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(
    `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.\n\nIn a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains.\n\nAttitudes play a significant role in shaping our behavior and how we interact with the world around us. They can be changed through personal experiences, education, and persuasive communication.`
  );
  const [editedContent, setEditedContent] = useState(content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveExit = () => {
    setContent(editedContent);
    setIsEditing(false);
  };

  const handleDiscard = () => {
    setEditedContent(content);
    setIsEditing(false);
  };

  return (
    <div className="transpict-container">
      <div className="transpict-box">
        <div className="transpict-edit">
          {!isEditing && (
            <button onClick={handleEditClick} className="edit-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 17.25V21H5.75L16.81 9.94L13.06 6.19L2 17.25ZM22.41 7.34C22.79 6.95 22.79 6.32 22.41 5.93L18.07 1.59C17.68 1.2 17.05 1.2 16.66 1.59L14.13 4.12L19.88 9.87L22.41 7.34Z" fill="white" />
              </svg>
              Edit
            </button>
          )}
          <div className='search-icon' >
            <svg width="25" height="23" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6631 19.6006H20.5769L20.1919 19.2293C21.5394 17.6618 22.3506 15.6268 22.3506 13.4131C22.3506 8.47684 18.3494 4.47559 13.4131 4.47559C8.4769 4.47559 4.47565 8.47684 4.47565 13.4131C4.47565 18.3493 8.4769 22.3506 13.4131 22.3506C15.6269 22.3506 17.6619 21.5393 19.2294 20.1918L19.6006 20.5768V21.6631L26.4756 28.5243L28.5244 26.4756L21.6631 19.6006ZM13.4131 19.6006C9.9894 19.6006 7.22565 16.8368 7.22565 13.4131C7.22565 9.98934 9.9894 7.22559 13.4131 7.22559C16.8369 7.22559 19.6006 9.98934 19.6006 13.4131C19.6006 16.8368 16.8369 19.6006 13.4131 19.6006Z" fill="#7E22CE" />
            </svg>
          </div>

        </div>
        <div className="transpict-content">
          <p className='highlighted-speaker '>Speaker</p>
          {!isEditing ? (
            <p>{content.split('\n').map((text, index) => <span key={index}>{text}<br /></span>)}</p>
          ) : (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              rows="10"
              cols="50"
            />
          )}
        </div>
        {isEditing && (
          <div className="edit-buttons">
            <button onClick={handleSaveExit} className="save-button">
              Save & Exit
            </button>
            <button onClick={handleDiscard} className="discard-button">
              Discard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transpict;
