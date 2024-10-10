import React from 'react';

const NavBar = ({ setActiveTab }) => {
  return (
    <nav className="nav-bar">
    {/* Button for "About Me" tab */}
    <button onClick={() => setActiveTab('Home')} className="nav-button">
      Home
    </button>

      {/* Button for "About Me" tab */}
      <button onClick={() => setActiveTab('AboutMe')} className="nav-button">
        About Me
      </button>

      {/* Button for "Contact" tab */}
      <button onClick={() => setActiveTab('Contact')} className="nav-button">
        Contact
      </button>

      {/* Button for "Projects" tab */}
      <button onClick={() => setActiveTab('Projects')} className="nav-button">
        Projects
      </button>
    </nav>
  );
};

export default NavBar;
