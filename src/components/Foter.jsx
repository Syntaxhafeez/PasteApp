import React from 'react';
import '../components/Footer.css'; // Import the CSS file for styling

const Foter = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} by Developer Hafeez
    </footer>
  );
};

export default Foter;
