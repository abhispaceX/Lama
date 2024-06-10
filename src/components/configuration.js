import React, { useState } from 'react';
import './configuration.css'; // Make sure to create this CSS file or add the styles to your main CSS

const Configuration = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [primaryColor, setPrimaryColor] = useState('#000000');
  const [fontColor, setFontColor] = useState('#000000');
  const [fontSize, setFontSize] = useState('16px');
  const [chatSize, setChatSize] = useState('400px');
  const [showResourceLine, setShowResourceLine] = useState(false);
  
  const [iconSize, setIconSize] = useState('small');
  const [imageUrl, setImageUrl] = useState('');
  const [iconPosition, setIconPosition] = useState('bottom-right');
  const [iconBottomDistance, setIconBottomDistance] = useState(20);
  const [iconHorizontalDistance, setIconHorizontalDistance] = useState(20);
  const iconSizeOptions = [
    { value: 'small', label: 'Small (48x48)' },
    { value: 'medium', label: 'Medium (64x64)' },
    { value: 'large', label: 'Large (80x80)' },
  ];
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => setImageUrl(e.target.result); // Update state with image URL on load
  };
  const handleUploadButtonClick = () => {
    document.getElementById('profile-image').click();
  }

  return (
    <div className="configuration-container">
      <div className="section-switcher">
        <span
          className={`section-link ${activeSection === 'general' ? 'active' : ''}`}
          onClick={() => setActiveSection('general')}
        >
          General
        </span>
        <span
          className={`section-link ${activeSection === 'display' ? 'active' : ''}`}
          onClick={() => setActiveSection('display')}
        >
          Display
        </span>
        <span
          className={`section-link ${activeSection === 'advanced' ? 'active' : ''}`}
          onClick={() => setActiveSection('advanced')}
        >
          Advanced
        </span>
      </div>
      <div className="section-content">
        {activeSection === 'general' && (
          <div className="general-section">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="chatbot-name">Chatbot Name:</label>
                <input type="text" id="chatbot-name" name="chatbotName" />
                <p className='lorem'>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
              </div>
              <div className="input-group">
                <label htmlFor="welcome-message">Welcome Message:</label>
                <input type="text" id="welcome-message" name="welcomeMessage" />
                <p className='lorem'>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="input-placeholder">Input Placeholder:</label>
                <input type="text" id="input-placeholder" name="inputPlaceholder" />
                <p className='lorem'>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'display' && (
          <div className="display-section-wrapper">
            <div className="display-section">
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="primary-color">Primary Color:</label>
                  <input
                    type="text"
                    id="primary-color"
                    name="primaryColor"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                  />
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    style={{ backgroundColor: primaryColor, width: 40, margin: 10 }}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="font-color">Font Color:</label>
                  <input
                    type="text"
                    id="font-color"
                    name="fontColor"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                  />
                  <input
                    type="color"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    style={{ backgroundColor: fontColor, width: 40, margin: 10 }}
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="font-size">Font Size (px):</label>
                  <input
                    type="text"
                    id="font-size"
                    name="fontSize"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="chat-size">Chat Size (px):</label>
                  <input
                    type="text"
                    id="chat-size"
                    name="chatSize"
                    value={chatSize}
                    onChange={(e) => setChatSize(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group toggle-group">
                  <label>Show Resource Line:</label>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={showResourceLine}
                      onChange={() => setShowResourceLine(!showResourceLine)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="display-section">
              <h2 className='chat-heading'>Chat Icon</h2>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="chat-icon-size">Chat Icon Size:</label>
                  <select
                    id="chat-icon-size"
                    name="chaticonsize"
                    value={iconSize}
                    onChange={(e) => setIconSize(e.target.value)}
                  >
                    {iconSizeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="icon-position">Position on Screen:</label>
                  <select
                    id="icon-position"
                    name="iconPosition"
                    value={iconPosition}
                    onChange={(e) => setIconPosition(e.target.value)}
                  >
                    <option value="bottom-right">Bottom Right</option>
                    <option value="bottom-left">Bottom Left</option>
                    <option value="top-right">Top Right</option>
                    <option value="top-left">Top Left</option>
                  </select>
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="icon-bottom-distance">Distance from Bottom (px):</label>
                  <input
                    type="number"
                    id="icon-bottom-distance"
                    name="iconBottomDistance"
                    value={iconBottomDistance}
                    onChange={(e) => setIconBottomDistance(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="icon-horizontal-distance">Horizontal Distance (px):</label>
                  <input
                    type="number"
                    id="icon-horizontal-distance"
                    name="iconHorizontalDistance"
                    value={iconHorizontalDistance}
                    onChange={(e) => setIconHorizontalDistance(e.target.value)}
                  />
                </div>
              </div>

              <div className='dp-updateAbhi' >
                  
                  {imageUrl ? (
                <img style={{width:70, borderRadius:35, height:70}} src={imageUrl} alt="Profile"  />
              ) : (
                <img style={{width:70, borderRadius:35, height:70}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Placeholdere" />
              )}
              
              <input type="file" id="profile-image" onChange={handleImageUpload} style={{display:'none'}} />
                <p className="update-button" onClick={handleUploadButtonClick}>Update Profile <i className="fas fa-download"></i> </p> 
                
                </div>
            </div>
          </div>
        )}
        {activeSection === 'advanced' && (
          <div className="advanced-section">
            <p>Advanced settings content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Configuration;
