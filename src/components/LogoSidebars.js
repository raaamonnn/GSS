import React from 'react';
import '../pages/Home.css';

const LogoSidebars = () => {
  return (
    <>
      <div className="logo-sidebar left-logo-sidebar">
        <div className="scrolling-logo-container">
          <img 
            src={`${process.env.PUBLIC_URL}/images/gsslogo.webp`} 
            alt="GSS Logo" 
            className="scrolling-logo"
          />
        </div>
      </div>
      <div className="logo-sidebar right-logo-sidebar">
        <div className="scrolling-logo-container">
          <img 
            src={`${process.env.PUBLIC_URL}/images/gsslogo.webp`} 
            alt="GSS Logo" 
            className="scrolling-logo"
          />
        </div>
      </div>
    </>
  );
};

export default LogoSidebars;
