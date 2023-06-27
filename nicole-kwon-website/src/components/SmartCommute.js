import './SmartCommute.css';
import React from 'react';

function SmartCommute() {

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <>
    <p>smartcommute</p>
    </>
  );
}

export default SmartCommute;