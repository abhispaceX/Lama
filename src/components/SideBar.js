import React from 'react';
import { Link } from "react-router-dom";
import "./side.css";

import Configuration from './configuration';
import Settings from './Settings';
import Upload from './uploadprojects';
import SampleProjects from './sampleprojects';

const SideBar = () => {
  const [showContent, setShowContent] = React.useState("Transcript");

  return (
    <div className='total-containerr'>
      <div className="sidebarr">
        <div className="sidebar-headerr">
          <svg width="50" height="50" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.4727 46.8739L29.8109 43.043C27.6752 41.9862 25.1873 41.9862 23.0517 43.043L15.3678 46.8739C8.80679 50.1544 1.87148 43.087 5.3061 36.592L7.11149 33.2014C7.35367 32.7171 7.74998 32.3428 8.23435 32.1446L36.0857 19.617C37.2306 19.1106 38.5736 19.573 39.146 20.6738L47.5344 36.614C50.9691 43.087 44.0338 50.1544 37.4727 46.8739Z" fill="#7E22CE" />
            <path opacity="0.4" d="M34.3463 16.9308L16.1163 25.1431C14.0688 26.0678 11.9992 23.8661 13.056 21.8846L19.7491 9.18088C22.5893 3.78675 30.2952 3.78675 33.1354 9.18088L35.4912 13.6723C36.1076 14.8832 35.6013 16.3584 34.3463 16.9308Z" fill="#7E22CE" />
          </svg>
          <h2>LAMA</h2>
        </div>
        <p className="sidebar-subtitler">Podcast upload flow</p>
        <ul className="sidebar-listr">
          <li className="sidebar-list-itemr" onClick={() => { setShowContent("Transcript") }} >
            <span className="list-numberr">1</span> Projects
          </li>
          <li className="sidebar-list-itemr" onClick={() => { setShowContent("Configuration") }} >
            <span className="list-numberr">2</span> Widget Configuration
          </li>
          <li className="sidebar-list-itemr" onClick={() => { setShowContent("Upload") }} >
            <span className="list-numberr">3</span> Deployment
          </li>
          <li className="sidebar-list-itemr">
            <span className="list-numberr">4</span> Pricing
          </li>
        </ul>
        <hr style={{ backgroundColor: 'grey', height: .5, border: "none" }} />

        <div className="sidebar-footerr" onClick={() => { setShowContent("Account Settings") }} >
          <div>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1360_2466)">
                <rect x="4" y="4" width="40" height="40" rx="20" fill="#1D1B20" fillOpacity="0.12" />
                <g opacity="0.38">
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.31 33.03C27.21 33.71 26.59 34.25 25.85 34.25H22.15C21.41 34.25 20.79 33.71 20.7 32.98L20.43 31.09C20.16 30.95 19.9 30.8 19.64 30.63L17.84 31.35C17.14 31.61 16.37 31.32 16.03 30.7L14.2 27.53C13.85 26.87 14 26.09 14.56 25.65L16.09 24.46C16.08 24.31 16.07 24.16 16.07 24C16.07 23.85 16.08 23.69 16.09 23.54L14.57 22.35C13.98 21.9 13.83 21.09 14.2 20.47L16.05 17.28C16.39 16.66 17.16 16.38 17.84 16.65L19.65 17.38C19.91 17.21 20.17 17.06 20.43 16.92L20.7 15.01C20.79 14.31 21.41 13.76 22.14 13.76H25.84C26.58 13.76 27.2 14.3 27.29 15.03L27.56 16.92C27.83 17.06 28.09 17.21 28.35 17.38L30.15 16.66C30.86 16.4 31.63 16.69 31.97 17.31L33.81 20.49C34.17 21.15 34.01 21.93 33.45 22.37L31.93 23.56C31.94 23.71 31.95 23.86 31.95 24.02C31.95 24.18 31.94 24.33 31.93 24.48L33.45 25.67C34.01 26.12 34.17 26.9 33.82 27.53L31.96 30.75C31.62 31.37 30.85 31.65 30.16 31.38L28.36 30.66C28.1 30.83 27.84 30.98 27.58 31.12L27.31 33.03ZM22.62 32.25H25.38L25.75 29.7L26.28 29.48C26.72 29.3 27.16 29.04 27.62 28.7L28.07 28.36L30.45 29.32L31.83 26.92L29.8 25.34L29.87 24.78L29.8731 24.7531C29.902 24.5027 29.93 24.2607 29.93 24C29.93 23.73 29.9 23.47 29.87 23.22L29.8 22.66L31.83 21.08L30.44 18.68L28.05 19.64L27.6 19.29C27.18 18.97 26.73 18.71 26.27 18.52L25.75 18.3L25.38 15.75H22.62L22.25 18.3L21.72 18.51C21.28 18.7 20.84 18.95 20.38 19.3L19.93 19.63L17.55 18.68L16.16 21.07L18.19 22.65L18.12 23.21C18.09 23.47 18.06 23.74 18.06 24C18.06 24.26 18.08 24.53 18.12 24.78L18.19 25.34L16.16 26.92L17.54 29.32L19.93 28.36L20.38 28.71C20.81 29.04 21.24 29.29 21.71 29.48L22.24 29.7L22.62 32.25ZM27.5 24C27.5 25.933 25.933 27.5 24 27.5C22.067 27.5 20.5 25.933 20.5 24C20.5 22.067 22.067 20.5 24 20.5C25.933 20.5 27.5 22.067 27.5 24Z" fill="#1D1B20" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1360_2466">
                  <rect x="4" y="4" width="40" height="40" rx="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p>Settings</p>
          </div>
        </div>
      </div>
      <div className='contentr'>
        <div className="transpict-headerr">
          <Link to="/">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 13.4116L36.8334 23.1616V40.0833H32.5V27.0833H19.5V40.0833H15.1667V23.1616L26 13.4116ZM26 7.58325L4.33337 27.0833H10.8334V44.4166H23.8334V31.4166H28.1667V44.4166H41.1667V27.0833H47.6667L26 7.58325Z" fill="#7E22CE" />
            </svg>
          </Link>
          {showContent !== 'Account Settings' && <>
            /<Link className='linkbackstep' to="/projects">
              <h3 style={{ color: 'gray' }}>Sample Project</h3>
            </Link> </>}
          /<h3 style={{ marginRight: 350 }}>{showContent}</h3>
          <div className="drop-down-containerr">
            <select className="drop-downr">
              <option>EN</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Hi</option>
            </select>
          </div>
          <img className='lang-logor' src='https://s3-alpha-sig.figma.com/img/61ba/d952/102357d8097692f48fbbb1903bb9299a?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKqNs-8UcKQJ2M2eF8iII2ezX7fFuioYy4shcVqy~PqwwpG0FSAQQiDUR9Togk9fJ3ApVQZQ3PmO~C8D5V5DEilFbHE1qTsIjskuM0kpayGobbZnRVGqEpBcx2EB6QOsP5iOUrGtEYO-bzoXb7u0C3tqnc0hB~CoT3gfoxDGn6NP1-HwL1QKgwRgUFJk-vCxX81TG5QWusOl0rcfojxfl~Wb2Ifzcx42zuO8sMmyntskRU5H4p6poZRHSHVol~mrbE~K9W~OCaO7Z78Z4hUIT8gVuB798TP3O96Au~zhzv9RcKXz8YRhcQ1spmP7Zo~yp5uhNGzU0bAvaTaPszXIZQ__' alt='lang-logo' />
          <svg className="iconr" width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 58C34.9334 58 37.3334 55.6 37.3334 52.6667H26.6667C26.6667 55.6 29.0667 58 32 58ZM48 42V28.6667C48 20.48 43.6534 13.6267 36 11.8133V10C36 7.78667 34.2134 6 32 6C29.7867 6 28 7.78667 28 10V11.8133C20.3734 13.6267 16 20.4533 16 28.6667V42L10.6667 47.3333V50H53.3334V47.3333L48 42ZM42.6667 44.6667H21.3334V28.6667C21.3334 22.0533 25.36 16.6667 32 16.6667C38.64 16.6667 42.6667 22.0533 42.6667 28.6667V44.6667Z" fill="black" />
          </svg>
        </div>

        {showContent === "Transcript" && (
          <>
            <h1 className="main-headingr">Edit Transcript</h1>
            <Upload setShowContent={setShowContent} />
          </>
        )}
        {showContent === "Configuration" && (
          <>
            <h1 className="main-headingr">Configuration</h1>
            <Configuration />
          </>
        )}
        {showContent === "Account Settings" && (
          <>
            <h1 className="main-headingr">Settings</h1>
            <Settings />
          </>
        )}
        {showContent === "sampleprojects" && (
          <SampleProjects />
        )}
      </div>
    </div>
  );
};

export default SideBar;
