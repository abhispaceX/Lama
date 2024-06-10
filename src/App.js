
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import CreateProject from './homepage';
import Projects from './projects';
import ProjectCreation from './createproject';
import ProjectNewCreation from './projectscreatenew';
import SideBar from './components/SideBar';
import NewprojectsLinksupload from './components/uploadnewprojectlinks';
import SampleProjects from './components/sampleprojects';

import { useState } from 'react';


function App() {
  const [showContent, setShowContent] = useState("Transcript");
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<CreateProject />} />
          <Route exact path="/projectcreation" element={<ProjectCreation />} />
          <Route exact path="/projectnewcreation" element={<ProjectNewCreation />} />
          <Route exact path="/projects" element={<Projects  />} />
          <Route exact path="/sidebar" element={<SideBar showContent={showContent} setShowContent={setShowContent} />} />
          <Route exact path="/uploadFromMedia" element={<NewprojectsLinksupload setShowContent={setShowContent} />} />
          <Route exact path="/sampleprojects" element={<SampleProjects />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
