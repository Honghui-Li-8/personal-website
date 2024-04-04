import React from 'react';

const Background = ({ bgColor }) => {
  // Define the styles directly within the component
  const backgroundStyle = {
    position: 'fixed', // Cover the entire viewport
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1, // Stay behind other content
    backgroundColor: bgColor, // Use the bgColor prop for background color
    // Additional styling (e.g., background image or gradient) can go here
  };

  return (
    <div style={backgroundStyle}>
      {/* This div acts as the background */}
    </div>
  );
};

export default Background;
