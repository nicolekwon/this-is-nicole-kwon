import './PhoneProtector.css';
import React from 'react';

function PhoneProtector() {

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <>
    <p>phone</p>
    </>
  );
}

export default PhoneProtector;