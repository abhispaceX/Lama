// Example parent component
import React, { useState } from 'react';
import SideBar from './SideBar'; // assuming SideBar is the parent component
import Upload from './uploadprojects'; // path to your Upload component

const ParentComponent = () => {
    const [showContent, setShowContent] = useState("sampleprojects");

    return (
        <div>
            <SideBar setShowContent={setShowContent} showContent={showContent} />
            {showContent === "Upload" && <Upload setShowContent={setShowContent} />}
        </div>
    );
};

export default ParentComponent;
